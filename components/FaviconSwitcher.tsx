"use client";

import { useEffect } from "react";

export default function FaviconSwitcher() {
  useEffect(() => {
    const updateFavicon = () => {
      const isDark = document.documentElement.classList.contains("dark");

      let favicon = document.querySelector<HTMLLinkElement>(
        'link[rel="icon"][type="image/png"]'
      );

      if (!favicon) {
        favicon = document.createElement("link");
        favicon.rel = "icon";
        favicon.type = "image/png";
        document.head.appendChild(favicon);
      }

      favicon.href = isDark ? "/XDark.png" : "/XLight.png";
    };

    // Set favicon immediately on load
    updateFavicon();

    // Observe changes to HTML class attribute
    const observer = new MutationObserver(updateFavicon);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
