import { defineStore } from "pinia";

export interface MultiLang {
    en: string;
    ru: string;
    uz: string;
}

export interface Product {
    id: number;
    brand: string;
    name: MultiLang;
    description: MultiLang;
    image1: string;
    subcategory: MultiLang;
}

export const useProductStore = defineStore("productStore", {
    state: () => ({
        products: [
            // ========================
            //         Z I X X
            // ========================
            {
                id: 1,
                brand: "ZIXX",
                name: {
                    en: "ZIXX Interior Putty",
                    ru: "ZIXX Шпатлевка для внутренних работ",
                    uz: "ZIXX Ichki shpatlyovka",
                },
                description: {
                    en: "Smooth polymer putty for interior wall finishing.",
                    ru: "Гладкая полимерная шпатлевка для внутренних стен.",
                    uz: "Ichki devorlarni tekislash uchun polimer shpatlyovka.",
                },
                image1:
                    "",
                subcategory: { en: "Putty", ru: "Шпатлевка", uz: "Shpatlyovka" },
            },

            {
                id: 2,
                brand: "ZIXX",
                name: {
                    en: "ZIXX Deep Primer",
                    ru: "ZIXX Грунтовка глубокого проникновения",
                    uz: "ZIXX Chuqur grunt",
                },
                description: {
                    en: "Deep penetration primer for mineral surfaces.",
                    ru: "Грунтовка глубокого проникновения для минеральных поверхностей.",
                    uz: "Mineral yuzalar uchun chuqur kiruvchi grunt.",
                },
                image1:
                    "",
                subcategory: { en: "Primer", ru: "Грунтовка", uz: "Gruntovka" },
            },

            {
                id: 3,
                brand: "ZIXX",
                name: {
                    en: "ZIXX Facade Paint",
                    ru: "ZIXX Фасадная краска",
                    uz: "ZIXX Fasad bo‘yoq",
                },
                description: {
                    en: "Weather-resistant facade paint for exterior walls.",
                    ru: "Погодоустойчивая фасадная краска.",
                    uz: "Ob-havoga chidamli fasad bo‘yoq.",
                },
                image1:
                    "",
                subcategory: { en: "Paint", ru: "Краска", uz: "Bo‘yoq" },
            },

            // ========================
            //       K A Y A  B O Y A
            // ========================
            {
                id: 4,
                brand: "Kaya Boya",
                name: {
                    en: "Kaya Interior Latex Paint",
                    ru: "Kaya Латексная краска",
                    uz: "Kaya Ichki lateks bo‘yoq",
                },
                description: {
                    en: "Matte interior latex paint with a soft finish.",
                    ru: "Матовая латексная краска с мягким покрытием.",
                    uz: "Yumshoq mat qoplamali lateks bo‘yoq.",
                },
                image1:
                    "",
                subcategory: { en: "Paint", ru: "Краска", uz: "Bo‘yoq" },
            },

            {
                id: 5,
                brand: "Kaya Boya",
                name: {
                    en: "Kaya Universal Primer",
                    ru: "Kaya Универсальная грунтовка",
                    uz: "Kaya Universal grunt",
                },
                description: {
                    en: "Universal primer for all interior surfaces.",
                    ru: "Универсальная грунтовка для всех поверхностей.",
                    uz: "Barcha yuzalar uchun universal grunt.",
                },
                image1:
                    "",
                subcategory: { en: "Primer", ru: "Грунтовка", uz: "Gruntovka" },
            },

            {
                id: 6,
                brand: "Kaya Boya",
                name: {
                    en: "Kaya Decorative Plaster",
                    ru: "Kaya Декоративная штукатурка",
                    uz: "Kaya Dekorativ suvoq",
                },
                description: {
                    en: "Textured decorative plaster for luxury walls.",
                    ru: "Фактурная декоративная штукатурка.",
                    uz: "Zamonaviy devorlar uchun dekorativ suvoq.",
                },
                image1:
                    "",
                subcategory: { en: "Decor", ru: "Декор", uz: "Dekor" },
            },

            // ========================
            //       D O G A N  A L Ç I
            // ========================
            {
                id: 7,
                brand: "Dogan Alçi",
                name: {
                    en: "Dogan Gypsum Putty",
                    ru: "Dogan Гипсовая шпатлевка",
                    uz: "Dogan Gipsli shpatlyovka",
                },
                description: {
                    en: "White gypsum putty for interior finishing.",
                    ru: "Белая гипсовая шпатлевка.",
                    uz: "Ichki pardozlash uchun oq gipsli shpatlyovka.",
                },
                image1:
                    "",
                subcategory: { en: "Putty", ru: "Шпатлевка", uz: "Shpatlyovka" },
            },

            {
                id: 8,
                brand: "Dogan Alçi",
                name: {
                    en: "Dogan Plaster Mix",
                    ru: "Dogan Штукатурная смесь",
                    uz: "Dogan Suvoq aralashmasi",
                },
                description: {
                    en: "Strong plaster mix for walls and ceilings.",
                    ru: "Прочная штукатурная смесь.",
                    uz: "Devor va shiftlar uchun suvoq aralashmasi.",
                },
                image1:
                    "",
                subcategory: { en: "Plaster", ru: "Штукатурка", uz: "Suvoq" },
            },

            // ========================
            //          F A R B E N
            // ========================
            {
                id: 9,
                brand: "Farben",
                name: {
                    en: "Farben Acrylic Paint",
                    ru: "Farben Акриловая краска",
                    uz: "Farben Akril bo‘yoq",
                },
                description: {
                    en: "Durable acrylic paint for interior and exterior.",
                    ru: "Прочная акриловая краска для интерьера и экстерьера.",
                    uz: "Ichki va tashqi devorlar uchun akril bo‘yoq.",
                },
                image1:
                    "",
                subcategory: { en: "Paint", ru: "Краска", uz: "Bo‘yoq" },
            },

            {
                id: 10,
                brand: "Farben",
                name: {
                    en: "Farben Deep Primer",
                    ru: "Farben Глубокая грунтовка",
                    uz: "Farben Chuqur grunt",
                },
                description: {
                    en: "Deep primer for preparation of porous walls.",
                    ru: "Грунтовка глубокого проникновения.",
                    uz: "G‘ovak devorlar uchun chuqur grunt.",
                },
                image1:
                    "",
                subcategory: { en: "Primer", ru: "Грунтовка", uz: "Gruntovka" },
            },

            // ========================
            //          A L B I N
            // ========================
            {
                id: 11,
                brand: "Albin",
                name: {
                    en: "Albin Interior Putty",
                    ru: "Albin Интерьерная шпатлевка",
                    uz: "Albin Ichki shpatlyovka",
                },
                description: {
                    en: "Smooth finishing putty for final coating.",
                    ru: "Гладкая финишная шпатлевка.",
                    uz: "Yakuniy tekislash uchun silliq shpatlyovka.",
                },
                image1:
                    "",
                subcategory: { en: "Putty", ru: "Шпатлевка", uz: "Shpatlyovka" },
            },

            {
                id: 12,
                brand: "Albin",
                name: {
                    en: "Albin Waterproof Coating",
                    ru: "Albin Гидроизоляция",
                    uz: "Albin Gidroizolyatsiya qoplama",
                },
                description: {
                    en: "Elastic waterproof layer for wet areas.",
                    ru: "Эластичное гидроизоляционное покрытие.",
                    uz: "Nam joylar uchun elastik gidroizolyatsiya qoplami.",
                },
                image1:
                    "",
                subcategory: { en: "Waterproofing", ru: "Гидроизоляция", uz: "Gidroizolyatsiya" },
            },
        ],
    }),

    getters: {
        getAll: (state) => state.products,
    },
});
