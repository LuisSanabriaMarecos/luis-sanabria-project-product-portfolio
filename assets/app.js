const filterButtons = [...document.querySelectorAll("[data-filter]")];
const portfolioItems = [...document.querySelectorAll("[data-track]")];

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((candidate) => {
      candidate.setAttribute("aria-pressed", String(candidate === button));
    });

    portfolioItems.forEach((item) => {
      const tracks = item.dataset.track.split(" ");
      const shouldShow = selectedFilter === "all" || tracks.includes(selectedFilter);
      item.hidden = !shouldShow;
    });

    const visibleCount = portfolioItems.filter((item) => !item.hidden).length;
    const grid = document.querySelector(".portfolio-grid");
    if (grid) {
      grid.setAttribute("aria-label", `${visibleCount} experience snapshots shown`);
    }
  });
});

document.querySelectorAll("[data-current-year]").forEach((year) => {
  year.textContent = new Date().getFullYear();
});
