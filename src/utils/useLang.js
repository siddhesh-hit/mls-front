import { useEffect, useState } from "react";

const useLang = () => {
  const [lang, setLang] = useState("mr");

  const getLang = localStorage.getItem("lang");
  const handleGetLang = (lang) => {
    setLang(lang);
  };

  useEffect(() => {
    if (getLang) {
      handleGetLang(getLang);
    }
  }, [getLang]);

  return lang;
};

export default useLang;
