// src/utils/humanizeSize.ts
var units = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
var humanizeSize = (size, fractionDigits = -1, originalSize = "B") => {
  const sizeNumber = Number(size) * Math.pow(1e3, units.indexOf(originalSize));
  const multiplier = sizeNumber < 0 ? -1 : 1;
  let parsed = Math.abs(sizeNumber);
  let i = 0;
  while (parsed >= 1e3) {
    parsed /= 1e3;
    i += 1;
  }
  parsed *= multiplier;
  if (fractionDigits === -1) {
    const str = parsed.toFixed(4).replace(/\.?0+$/, "");
    return `${str}${units[i]}`;
  }
  return `${parsed.toFixed(fractionDigits)}${units[i]}`;
};

// src/utils/formatNumber.ts
var reverse = (str) => str.split("").reverse().join("");
var formatNumber = (n) => {
  const parts = reverse(String(n)).match(/.{1,3}/g) ?? [];
  return reverse(parts.join(","));
};

// src/core.ts
var registerClick = (query, handler) => {
  document.addEventListener("click", (e) => {
    let elem = e.target;
    while (elem) {
      if (elem.matches(query))
        return handler(e, elem);
      elem = elem.parentElement;
    }
  });
};
registerClick("[data-open-burger]", () => {
  document.body.classList.add("overflow-hidden");
  document.querySelector("[data-burger]")?.classList.remove("hidden");
  document.querySelector("[data-burger]")?.classList.add("flex");
});
registerClick("[data-close-burger]", () => {
  document.body.classList.remove("overflow-hidden");
  document.querySelector("[data-burger]")?.classList.add("hidden");
  document.querySelector("[data-burger]")?.classList.remove("flex");
});
registerClick("[data-calendly]", (e, elem) => {
  const url = elem.dataset.calendly;
  if (!url)
    return;
  if (!("Calendly" in window))
    return;
  if (typeof window.Calendly !== "object" || !window.Calendly)
    return;
  if (!("showPopupWidget" in window.Calendly))
    return;
  if (typeof window.Calendly.showPopupWidget !== "function")
    return;
  window.Calendly.showPopupWidget(url);
});
(async () => {
  if (document.querySelector("[data-prices]")) {
    const priceType = (type) => `[data-price-type="${type}"]`;
    const request = await fetch(
      "https://api.staging.eventspace.com/api/v1/prices"
    );
    const info = await request.json();
    for (const prices of document.querySelectorAll("[data-prices]")) {
      for (const plan of info.data.plans) {
        const price = prices.querySelector(
          `[data-price="${plan.productName}"]`
        );
        if (!price)
          continue;
        const monthPrice = price.querySelector("[data-month-price]");
        const annualPrice = price.querySelector("[data-annual-price]");
        const spaces = price.querySelector(priceType("spaces"));
        const admins = price.querySelector(priceType("admins"));
        const venues = price.querySelector(priceType("venues"));
        const storage = price.querySelector(priceType("storage"));
        const loading = price.querySelector("[data-price-loading]");
        monthPrice.innerHTML = "$" + Math.round(plan.monthPriceAmount / 100);
        spaces.innerHTML = plan.createSpace;
        admins.innerHTML = plan.adminUsers;
        venues.innerHTML = plan.createVenue;
        storage.innerHTML = humanizeSize(plan.storage);
        if (plan.yearPriceAmount == 0) {
          const block = annualPrice.parentElement;
          block.innerHTML = "&nbsp;";
        } else {
          annualPrice.innerHTML = "$" + formatNumber(Math.round(plan.yearPriceAmount / 100));
        }
        loading.parentElement.removeChild(loading);
      }
    }
  }
})();
(() => {
  const avif = new Image();
  avif.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=";
  avif.onload = function() {
    document.documentElement.classList.add("avif-supported");
  };
  avif.onerror = function() {
    document.documentElement.classList.add("avif-unsupported");
  };
})();
