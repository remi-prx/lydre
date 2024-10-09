document.addEventListener("DOMContentLoaded", () => {
    let lastScroll = 0;
    const header = document.querySelector('.header');
    const scrollThreshold = 90;
    let isThrottled = false;

    window.addEventListener('scroll', () => {
        if (isThrottled) return;

        let currentScroll = window.scrollY;
        console.log(currentScroll>scrollThreshold)

        if (currentScroll <= scrollThreshold) {
            header.style.transform = 'translateY(0)';
        } else if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
            header.style.transform = `translateY(-${header.offsetHeight}px)`;
        } else if (currentScroll < lastScroll) {
            header.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;

        isThrottled = true;
        setTimeout(() => {
            isThrottled = false;
        }, 100);
    });

    console.log("DOMContentLoaded");

    const darkMode = localStorage.getItem("dark-mode");

    if (darkMode === "enabled") {
        document.documentElement.classList.add("dark-mode");
    }
    setTimeout(() => {
        document.body.removeAttribute('data-initial');
    }, 100);

    const darkmode_button = document.getElementById("darkmode_button");
    darkmode_button.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark-mode");
        if (document.documentElement.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }
    });
});
