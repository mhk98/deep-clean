"use client";

import { useEffect, useState } from "react";

function setCookie(name, value) {
  document.cookie = `${name}=${value};path=/;max-age=31536000`;
  document.cookie = `${name}=${value};path=/;domain=${window.location.hostname};max-age=31536000`;
}

export default function TranslateWidget() {
  const [language, setLanguage] = useState("ar");

  useEffect(() => {
    function removeTranslateGap() {
      document.body.style.top = "0px";
      document.documentElement.style.marginTop = "0px";

      document.querySelectorAll("body > .skiptranslate").forEach((element) => {
        element.style.display = "none";
        element.style.height = "0";
        element.style.visibility = "hidden";
      });
    }

    const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
    if (match) {
      const value = match[1];
      if (value.includes("/ar/en")) {
        setLanguage("en");
      } else if (value.includes("/en/ar")) {
        setLanguage("ar");
      } else if (value.includes("/en/en")) {
        setLanguage("en");
      }
    } else {
      setCookie("googtrans", "/en/ar");
    }

    if (window.google?.translate?.TranslateElement) {
      return;
    }

    window.googleTranslateElementInit = function googleTranslateElementInit() {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "ar,en",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    removeTranslateGap();
    const gapTimer = window.setInterval(removeTranslateGap, 300);

    return () => {
      window.clearInterval(gapTimer);
    };
  }, []);

  function handleLanguageChange(event) {
    const nextLanguage = event.target.value;
    setLanguage(nextLanguage);

    if (nextLanguage === "en") {
      setCookie("googtrans", "/en/en");
    } else {
      setCookie("googtrans", "/en/ar");
    }

    window.location.reload();
  }

  return (
    <div className="translate-widget">
      <span className="translate-label">Translate</span>
      <select
        aria-label="Translate language"
        className="translate-select"
        onChange={handleLanguageChange}
        value={language}
      >
        <option value="ar">Arabic</option>
        <option value="en">English</option>
      </select>
      <div id="google_translate_element" />
    </div>
  );
}
