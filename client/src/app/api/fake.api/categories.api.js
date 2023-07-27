export const categories = {
    roses: { _id: "67rdca3eeb7f6fgeed471818", name: "Розы" },
    carnations: { _id: "67rdca3eeb7f6fgeed471820", name: "Гвоздики" },
    chrysanthemums: { _id: "67rdca3eeb7f6fgeed471814", name: "Хризантемы" },
    peonies: { _id: "67rdca3eeb7f6fgeed471822", name: "Пионы" },
    asters: { _id: "67rdca3eeb7f6fgeed471824", name: "Астры" },
    buttercups: { _id: "67rdca3eeb7f6fgeed471829", name: "Лютики" }
};

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(categories);
        }, 2000);
    });

export default {
    fetchAll
};
