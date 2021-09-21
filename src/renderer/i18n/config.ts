import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Store from "electron-store";

import universalLanguageDetect from '@unly/universal-language-detector';

import de from './translation/de.json';
import en from './translation/en.json';
import it from './translation/it.json';
import nb from './translation/nb.json';
import ru from './translation/ru.json';
import sv from './translation/sv.json';

const settings = new Store;

export const supportedLanguages = ['de', 'en', 'it', 'nb', 'ru', 'sv'];

let lang = universalLanguageDetect({
    supportedLanguages,
    fallbackLanguage: 'en',
});

const setLang = settings.get('mainSettings.lang');

if (setLang !== undefined) {
    lang = setLang.toString();
}

export const resources = {
    de: {
        translation: de
    },
    en: {
        translation: en,
    },
    it: {
        translation: it,
    },
    nb: {
        translation: nb,
    },
    ru: {
        translation: ru,
    },
    sv: {
        translation: sv,
    }
} as const;

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,
        supportedLngs: supportedLanguages,

        lng: lang,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },

        resources,
    });