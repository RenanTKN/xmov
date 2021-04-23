import { useEffect, useState } from "react";
import Cookies from "js-cookie";

import translation from "./dictionary.json";

let currentLanguage = Cookies.get("lang") ?? "en";

export const useTranslate = () => {
  const [language, setLanguage] = useState(currentLanguage);
  const languages = Object.keys(translation);

  useEffect(() => {
    currentLanguage = language || "en";
    Cookies.set("lang", language)
  }, [language]);

  const translate = (key: string) => translation?.[language]?.[key];

  return { translate, setLanguage, language, languages };
};
