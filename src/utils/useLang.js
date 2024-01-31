import { useEffect, useState } from "react";

const useLang = () => {
  const [lang, setLang] = useState(localStorage.getItem("lang"));

  useEffect(() => {
    const handleLangChange = () => {
      setLang(localStorage.getItem("lang"));
    };

    window.addEventListener("langChange", handleLangChange);

    // Cleanup
    return () => {
      window.removeEventListener("langChange", handleLangChange);
    };
  }, []);

  const checkLang = lang === "mr" ? "marathi" : "english";

  return { lang, checkLang };
};

export default useLang;
