import { defineStore } from 'pinia';

export interface MultiLang {
    en: string;
    ru: string;
    uz: string;
}

export interface Product {
    id: number;
    name: MultiLang;
    description: MultiLang;
    image1: string;
    subcategory: MultiLang;
}

export const useProductStore = defineStore('productStore', {
    state: () => ({
        products: [
            {
                id: 1,
                name: {
                    en: 'Premium Car Shampoo',
                    ru: 'Премиум автошампунь',
                    uz: 'Premium avtomobil shampuni',
                },
                description: {
                    en: 'High foam, streak-free professional detailing shampoo.',
                    ru: 'Профессиональный шампунь с высоким пенообразованием и без разводов.',
                    uz: 'Ko‘p ko‘pik beruvchi, dog‘siz professional detailing shampuni.',
                },
                image1: '/images/1.jpg',
                subcategory: {
                    en: 'Car Care',
                    ru: 'Уход за авто',
                    uz: 'Avto parvarish',
                },
            },
            {
                id: 2,
                name: {
                    en: 'Ceramic Coat Spray',
                    ru: 'Керамическое защитное покрытие (спрей)',
                    uz: 'Keramik himoya spreyi',
                },
                description: {
                    en: 'Long-lasting hydrophobic protection with SiO₂.',
                    ru: 'Долговременная гидрофобная защита с SiO₂.',
                    uz: 'SiO₂ bilan uzoq muddatli gidrofob himoya.',
                },
                image1: '/images/ceramic.jpg',
                subcategory: {
                    en: 'Protection',
                    ru: 'Защита',
                    uz: 'Himoya',
                },
            },
            {
                id: 3,
                name: {
                    en: 'APC Cleaner',
                    ru: 'Универсальный очиститель (APC)',
                    uz: 'Universal tozalagich (APC)',
                },
                description: {
                    en: 'All-purpose cleaner for interior & exterior surfaces.',
                    ru: 'Универсальный очиститель для внутренних и внешних поверхностей.',
                    uz: 'Salon va tashqi qismlar uchun universal tozalagich.',
                },
                image1: '/images/apc.jpg',
                subcategory: {
                    en: 'Cleaning',
                    ru: 'Очистка',
                    uz: 'Tozalash',
                },
            },
            {
                id: 4,
                name: {
                    en: 'Degreaser Extreme',
                    ru: 'Сильный обезжириватель',
                    uz: 'Kuchli yog‘qochiruvchi vosita',
                },
                description: {
                    en: 'Ultra-strong formula for engines & heavy dirt.',
                    ru: 'Сверхмощная формула для двигателей и сильных загрязнений.',
                    uz: 'Dvigatel va qattiq kirlar uchun kuchli formula.',
                },
                image1: '/images/degreaser.jpg',
                subcategory: {
                    en: 'Deep Clean',
                    ru: 'Глубокая очистка',
                    uz: 'Chuqur tozalash',
                },
            }
        ] as Product[],
    }),

    getters: {
        getAll: (state) => state.products,
    },
});
