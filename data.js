// ============================================
// СПИСОК TELEGRAM-АККАУНТОВ
// Данные ТЕСТОВЫЕ — замени на свои
// ============================================

const ACCOUNTS_DATA = [
    {
        phone: "79001234501",
        geo: "RU",
        spam: false,
        hold: "2 г 3 мес",
        role: "Админ",
        used: "Сегодня, 09:45",
        name: "Александр",
        username: "@alex_admin",
        note: "Основной"
    },
    {
        phone: "79001234502",
        geo: "RU",
        spam: false,
        hold: "1 г 8 мес",
        role: "Оператор",
        used: "Сегодня, 09:30",
        name: "Мария",
        username: "@maria_op",
        note: ""
    },
    {
        phone: "79001234503",
        geo: "RU",
        spam: false,
        hold: "8 мес 15 дн",
        role: "—",
        used: "Сегодня, 09:12",
        name: "Дмитрий",
        username: "@dmitry",
        note: ""
    },
    {
        phone: "79001234504",
        geo: "RU",
        spam: true,
        hold: "4 мес 22 дн",
        role: "—",
        used: "Вчера, 22:48",
        name: "Елена",
        username: "@elena_k",
        note: "Спамблок"
    },
    {
        phone: "79001234505",
        geo: "RU",
        spam: false,
        hold: "3 г 1 мес",
        role: "Рассыльщик",
        used: "Сегодня, 08:00",
        name: "Сергей",
        username: "@sergey",
        note: ""
    },
    {
        phone: "79001234506",
        geo: "UA",
        spam: false,
        hold: "1 г 5 мес",
        role: "—",
        used: "Вчера, 20:15",
        name: "Ольга",
        username: "@olga_ua",
        note: ""
    },
    {
        phone: "79001234507",
        geo: "KZ",
        spam: false,
        hold: "11 мес 3 дн",
        role: "—",
        used: "Сегодня, 07:20",
        name: "Айгуль",
        username: "@aigul",
        note: ""
    },
    {
        phone: "79001234508",
        geo: "BY",
        spam: false,
        hold: "2 мес 28 дн",
        role: "—",
        used: "Вчера, 18:40",
        name: "Николай",
        username: "—",
        note: "Без юзернейма"
    },
    {
        phone: "79001234509",
        geo: "RU",
        spam: true,
        hold: "6 мес 10 дн",
        role: "—",
        used: "3 дня назад",
        name: "Ирина",
        username: "@irina_b",
        note: "Спамблок с 15.09"
    },
    {
        phone: "79001234510",
        geo: "RU",
        spam: false,
        hold: "1 мес 12 дн",
        role: "—",
        used: "Сегодня, 06:50",
        name: "Павел",
        username: "@pavel",
        note: ""
    },
    {
        phone: "79001234511",
        geo: "RU",
        spam: false,
        hold: "5 мес 7 дн",
        role: "Оператор",
        used: "Сегодня, 06:30",
        name: "Виктория",
        username: "@victoria",
        note: ""
    },
    {
        phone: "79001234512",
        geo: "UA",
        spam: false,
        hold: "2 г 7 мес",
        role: "—",
        used: "Вчера, 23:10",
        name: "Андрей",
        username: "@andrey_ua",
        note: ""
    },
    {
        phone: "79001234513",
        geo: "RU",
        spam: false,
        hold: "9 мес 18 дн",
        role: "—",
        used: "Сегодня, 05:45",
        name: "Ксения",
        username: "@ksenia",
        note: ""
    },
    {
        phone: "79001234514",
        geo: "RU",
        spam: true,
        hold: "3 мес 20 дн",
        role: "—",
        used: "5 дней назад",
        name: "Артём",
        username: "@artem",
        note: "Спамблок"
    },
    {
        phone: "79001234515",
        geo: "KZ",
        spam: false,
        hold: "1 г 2 мес",
        role: "—",
        used: "Сегодня, 04:20",
        name: "Данияр",
        username: "@daniyar",
        note: ""
    },
    {
        phone: "79001234516",
        geo: "RU",
        spam: false,
        hold: "7 мес 14 дн",
        role: "—",
        used: "Вчера, 21:00",
        name: "Юлия",
        username: "@yulia",
        note: ""
    },
    {
        phone: "79001234517",
        geo: "BY",
        spam: false,
        hold: "4 мес 2 дн",
        role: "—",
        used: "Сегодня, 03:50",
        name: "Максим",
        username: "@maxim_by",
        note: ""
    },
    {
        phone: "79001234518",
        geo: "RU",
        spam: false,
        hold: "1 г 9 мес",
        role: "Админ",
        used: "Сегодня, 03:30",
        name: "Роман",
        username: "@roman_admin",
        note: "Резервный"
    },
    {
        phone: "79001234519",
        geo: "RU",
        spam: false,
        hold: "6 мес 25 дн",
        role: "—",
        used: "Вчера, 19:45",
        name: "Татьяна",
        username: "@tatyana",
        note: ""
    },
    {
        phone: "79001234520",
        geo: "UA",
        spam: false,
        hold: "2 мес 9 дн",
        role: "—",
        used: "Сегодня, 02:15",
        name: "Богдан",
        username: "@bogdan",
        note: ""
    },
    {
        phone: "79001234521",
        geo: "RU",
        spam: false,
        hold: "1 г 3 мес",
        role: "—",
        used: "Вчера, 17:30",
        name: "Наталья",
        username: "@natalia",
        note: ""
    },
    {
        phone: "79001234522",
        geo: "RU",
        spam: true,
        hold: "5 мес 11 дн",
        role: "—",
        used: "4 дня назад",
        name: "Григорий",
        username: "@grigory",
        note: "Спамблок"
    },
    {
        phone: "79001234523",
        geo: "KZ",
        spam: false,
        hold: "8 мес 3 дн",
        role: "—",
        used: "Сегодня, 01:40",
        name: "Асель",
        username: "@asel",
        note: ""
    },
    {
        phone: "79001234524",
        geo: "RU",
        spam: false,
        hold: "3 г 5 мес",
        role: "—",
        used: "Вчера, 16:00",
        name: "Владимир",
        username: "@vladimir",
        note: "Старый аккаунт"
    },
    {
        phone: "79001234525",
        geo: "RU",
        spam: false,
        hold: "1 мес 20 дн",
        role: "—",
        used: "Сегодня, 00:30",
        name: "Анастасия",
        username: "@anastasia",
        note: ""
    },
];
