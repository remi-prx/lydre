document.addEventListener("DOMContentLoaded", () => {
    let lastScroll = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        let currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll) {
            header.style.transform = `translateY(-${header.offsetHeight}px)`;
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScroll = currentScroll;
    });

    console.log("DOMContentLoaded")
    
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
