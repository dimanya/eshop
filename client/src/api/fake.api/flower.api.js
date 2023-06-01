const categories = {
    roses: { _id: "67rdca3eeb7f6fgeed471818", name: "Розы" },
    carnations: { _id: "67rdca3eeb7f6fgeed471820", name: "Гвоздики" },
    chrysanthemums: { _id: "67rdca3eeb7f6fgeed471814", name: "Хризантемы" },
    peonies: { _id: "67rdca3eeb7f6fgeed471822", name: "Пионы" },
    asters: { _id: "67rdca3eeb7f6fgeed471824", name: "Астры" },
    buttercups: { _id: "67rdca3eeb7f6fgeed471829", name: "Лютики" }
}


const flowers = [
    {
        _id: "67rdca3eeb7f6fgeed471815",
        name: "Роза белая",
        categories: categories.roses,
        price: 125
    },
    {
        _id: "67rdca3eeb7f6fgeed471816",
        name: "Роза красная",
        categories: categories.roses,
        price: 157
    },
    {
        _id: "67rdca3eeb7f6fgeed471817",
        name: "Астра синяя",
        categories: categories.asters,
        price: 142
    },
    {
        _id: "67rdca3eeb7f6fgeed471818",
        name: "Гвоздика красная",
        categories: categories.carnations,
        price: 25
    },
    {
        _id: "67rdca3eeb7f6fgeed471819",
        name: "Гвоздика белая",
        categories: categories.carnations,
        price: 34
    },
    {
        _id: "67rdca3eeb7f6fgeed471820",
        name: "Астра желтая",
        categories: categories.asters,
        price: 38
    },
    {
        _id: "67rdca3eeb7f6fgeed471821",
        name: "Хризантема белая",
        categories: categories.chrysanthemums,
        price: 354
    },
    {
        _id: "67rdca3eeb7f6fgeed471822",
        name: "Хризантема фиолетовая",
        categories: categories.chrysanthemums,
        price: 318
    },
    {
        _id: "67rdca3eeb7f6fgeed471823",
        name: "Лютик красный",
        categories: categories.buttercups,
        price: 367
    },
    {
        _id: "67rdca3eeb7f6fgeed471824",
        name: "Пион синий",
        categories: categories.peonies,
        price: 412
    },
    {
        _id: "67rdca3eeb7f6fgeed47181f",
        name: "Пион белый",
        categories: categories.peonies,
        price: 458
    },
    {
        _id: "67rdca3eeb7f6fgeed47181r",
        name: "Лютик зеленый",
        categories: categories.buttercups,
        price: 461
    },
]
export function fetchAll() {
    return flowers
}
