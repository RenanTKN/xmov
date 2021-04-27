import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Cookies from "js-cookie";

import dict from "../lang/dictionary.json";

interface TranslateProviderProps {
  children: ReactNode;
}

interface TranslateData {
  languages: string[];
  setLanguage: Dispatch<SetStateAction<string>>;
  translate: (key: string) => string;
}

let currentLanguage = Cookies.get("lang") ?? "en";

export const TranslateContext = createContext({} as TranslateData);

export const TranslateProvider = ({ children }: TranslateProviderProps) => {
  const [language, setLanguage] = useState(currentLanguage);
  const languages = Object.keys(dict);

  useEffect(() => {
    currentLanguage = language || "en";
    Cookies.set("lang", language);
  }, [language]);

  const translate = (key: string) => dict?.[language]?.[key];

  return (
    <TranslateContext.Provider
      value={{
        languages,
        setLanguage,
        translate,
      }}
    >
      {children}
    </TranslateContext.Provider>
  );
};
