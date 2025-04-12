import { useEffect } from "react";

// 💡 Konversiya funksiyasi komponentdan tashqarida bo'lishi kerak
export function gtag_report_conversion(url) {
  const callback = function () {
    if (typeof url !== "undefined") {
      window.location = url;
    }
  };

  window.gtag("event", "conversion", {
    send_to: "AW-16971943809/ofiRC1jFhMzEIGFZ7e",
    value: 1.0,
    currency: "USD",
    transaction_id: "",
    event_callback: callback,
  });

  return false;
}

const GoogleTag = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=AW-16971943809";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-16971943809');
    `;
    document.head.appendChild(script2);
  }, []);

  return null;
};

export default GoogleTag;
