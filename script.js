let menu = document.querySelector('#menu-btn');
        let header = document.querySelector('.header');
        menu.onclick = () => {
            menu.classList.toggle('fa-times');
            header.classList.toggle('active');
        }
        let darkTheme = document.querySelector('#dark-theme');
        darkTheme.onclick = () => {
            darkTheme.classList.toggle('fa-moon');
            document.body.classList.toggle('active');
        }


        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".navbar a");

        window.addEventListener("scroll", () => {
            let current = "";

            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100; // adjust for fixed navbar
                const sectionHeight = section.offsetHeight;
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute("id");
                }
            });

            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${current}`) {
                    link.classList.add("active");
                }
            });
        });