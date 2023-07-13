// src/core.ts
var registerClick = (query, handler) => {
  document.addEventListener("click", (e) => {
    const elem = e.target;
    if (!elem.matches(query))
      return;
    handler(e);
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
