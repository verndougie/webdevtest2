const productCard = document.querySelector("#product-card");
const detailsButton = document.querySelector("#details-button");
const productDetails = document.querySelector("#product-details");
const themeButton = document.querySelector("#theme-button");

detailsButton.addEventListener("click", () => {
    const shouldRevealDetails = productDetails.hidden;

    productDetails.hidden = !shouldRevealDetails;
    detailsButton.setAttribute("aria-expanded", String(shouldRevealDetails));
    detailsButton.innerHTML = shouldRevealDetails
        ? 'Hide details <span aria-hidden="true">↙</span>'
        : 'Reveal details <span aria-hidden="true">↗</span>';
});

themeButton.addEventListener("click", () => {
    const isSunriseTheme = productCard.classList.toggle("is-sunrise");

    themeButton.setAttribute("aria-pressed", String(isSunriseTheme));
    themeButton.innerHTML = isSunriseTheme
        ? '<span class="theme-icon" aria-hidden="true">☾</span> Use cosmic theme'
        : '<span class="theme-icon" aria-hidden="true">☼</span> Change theme';
});