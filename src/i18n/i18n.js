import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import langCh from "src/i18n/lang/ch";
import langEn from "src/i18n/lang/en";
import langKo from "src/i18n/lang/ko";

const resources = {
  en: {
    translation: langEn,
  },
  ko: {
    translation: langKo,
  },
  cn: {
    translation: langCh,
  },
};

i18n.use(initReactI18next).init({
  resources: resources,
  // 초기 설정 언어
  lng: "en",
  fallbackLng: "en",
  debug: true,
  defaultNS: "translation",
  ns: "translation",
  keySeparator: ".",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
