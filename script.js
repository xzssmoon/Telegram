const tbody = document.getElementById("tbody");
const searchInput = document.getElementById("search");
const geoFilter = document.getElementById("geoFilter");
const spamFilter = document.getElementById("spamFilter");
const counter = document.getElementById("counter");
const checkAll = document.getElementById("checkAll");

let currentData = [...ACCOUNTS_DATA];

function fillGeo() {
    const geos = [...new Set(ACCOUNTS_DATA.map(a => a.geo))].sort();
    geos.forEach(g => {
        const opt = document.createElement("option");
        opt.value = g;
        opt.textContent = g;
        geoFilter.appendChild(opt);
    });
}

function esc(str) {
    if (str === undefined || str === null) return "";
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function render() {
    const q = searchInput.value.toLowerCase().trim();
    const geo = geoFilter.value;
    const spam = spamFilter.value;

    let filtered = currentData.filter(a => {
        const matchSearch = !q ||
            (a.phone && a.phone.toLowerCase().includes(q)) ||
            (a.name && a.name.toLowerCase().includes(q)) ||
            (a.username && a.username.toLowerCase().includes(q));
        const matchGeo = !geo || a.geo === geo;
        const matchSpam = !spam ||
            (spam === "clean" && !a.spam) ||
            (spam === "blocked" && a.spam);
        return matchSearch && matchGeo && matchSpam;
    });

    tbody.innerHTML = "";

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="11" class="empty">Ничего не найдено</td></tr>`;
        counter.textContent = "Всего: 0";
        return;
    }

    filtered.forEach((acc, i) => {
        const tr = document.createElement("tr");

        const spamBadge = acc.spam
            ? `<span class="badge blocked">⛔ Спамблок</span>`
            : `<span class="badge clean">Без спамблока</span>`;

        const role = acc.role && acc.role !== "—"
            ? esc(acc.role)
            : `<span class="role-dash">—</span>`;

        const uname = acc.username && acc.username !== "—"
            ? `<span class="username">${esc(acc.username)}</span>`
            : `<span class="username empty">—</span>`;

        tr.innerHTML = `
            <td class="col-check"><input type="checkbox"></td>
            <td class="col-num">${i + 1}</td>
            <td>${esc(acc.phone)}</td>
            <td><span class="geo">${esc(acc.geo)}</span></td>
            <td>${spamBadge}</td>
            <td>${esc(acc.hold)}</td>
            <td>${role}</td>
            <td>${esc(acc.used)}</td>
            <td>${esc(acc.name)}</td>
            <td>${uname}</td>
            <td class="col-actions">
                <div class="actions">
                    <span class="icon" title="Архив">📁</span>
                    <span class="icon" title="Юзернейм">@</span>
                    <span class="icon" title="Информация">ℹ️</span>
                    <span class="icon" title="Сессия">⚙️</span>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });

    counter.textContent = `Всего: ${filtered.length}`;
}

searchInput.addEventListener("input", render);
geoFilter.addEventListener("change", render);
spamFilter.addEventListener("change", render);

checkAll.addEventListener("change", () => {
    document.querySelectorAll("#tbody input[type='checkbox']").forEach(cb => {
        cb.checked = checkAll.checked;
    });
});

fillGeo();
render();
