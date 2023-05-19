import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ENGLISH from "../language/en.json";
import VIETNAMESE from '../language/vi.json'

const resources = {
  en: {
    navbar: ENGLISH,
  },
  vi: {
   navbar: VIETNAMESE
      
    
  },
};
const defaultNS = "ENGLISH";
i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  ns: ["navbar"],
  fallbackLng: "en",
  defaultNS,
  interpolation: {
    escapeValue: false,
  },
});
