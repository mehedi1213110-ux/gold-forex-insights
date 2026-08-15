document.getElementById("year").textContent = new Date().getFullYear();

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(a => {
  a.addEventListener("click", () => nav.classList.remove("open"));
});

// Demo ticker pulse — replace these values later with a live market API if desired.
const tickerValues = [
  ["$2,500.00", "+0.00%"],
  ["1.0000", "+0.00%"],
  ["1.0000", "+0.00%"],
  ["100.00", "+0.00%"],
  ["$100,000", "+0.00%"]
];

setInterval(() => {
  document.querySelectorAll(".ticker > div").forEach((el, i) => {
    const strong = el.querySelector("strong");
    const em = el.querySelector("em");
    if (!strong || !em) return;
    const base = tickerValues[i][0];
    const change = (Math.random() * 0.18 - 0.09).toFixed(2);
    const sign = change >= 0 ? "+" : "";
    strong.textContent = base;
    em.textContent = `${sign}${change}%`;
    em.style.color = change >= 0 ? "#75d59c" : "#ff7b7b";
  });
}, 4500);
