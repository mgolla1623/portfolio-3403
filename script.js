// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Your existing JavaScript code here...
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    const navLinksItems = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const fadeEls = document.querySelectorAll('.fade-in');

    // Experience dropdown functionality
    const experienceItems = document.querySelectorAll('.experience-item');
    
    experienceItems.forEach(item => {
        item.addEventListener('click', function() {
            // Toggle the expanded class
            this.classList.toggle('expanded');
        });
    });

    // Mobile menu toggle (if navbar exists)
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a nav link (if nav links exist)
    if (navLinksItems.length > 0) {
        navLinksItems.forEach(link => {
            link.addEventListener('click', () => {
                if (navToggle) navToggle.classList.remove('active');
                if (navLinks) navLinks.classList.remove('active');
            });
        });
    }

    // Navbar scroll effect (if navbar exists)
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // FIXED: Active nav link tracking
    if (navLinksItems.length > 0 && sections.length > 0) {
        window.addEventListener('scroll', () => {
            let current = '';
            const scrollPos = window.pageYOffset + 150; // Increased offset for better detection
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                // Check if we're within this section
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    current = sectionId;
                }
            });

            // Handle the case when we're at the very bottom of the page
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
                const lastSection = sections[sections.length - 1];
                current = lastSection.getAttribute('id');
            }

            // Update active states
            navLinksItems.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                if (href === `#${current}`) {
                    link.classList.add('active');
                }
            });

            // Fallback: if no section is detected, keep home active
            if (!current) {
                const homeLink = document.querySelector('a[href="#home"]');
                if (homeLink) {
                    homeLink.classList.add('active');
                }
            }
        });

        // Trigger once on load to set initial state
        window.dispatchEvent(new Event('scroll'));
    }

    // Fade-in scroll animation
    function handleFadeIn() {
        fadeEls.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('visible');
            }
        });
    }

    // Use `requestAnimationFrame` for smoothness
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleFadeIn();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Trigger once on load
    handleFadeIn();
});





//TO DO
/*
1. Figure out how to make experience look better. how to better show this? sepearte into sections? maybe once i get more work experience idk
    also add images to the expeirence if possible
2. personal section: 
    - Travel: include the video i made from my spam. have a list of diffrent places i have been to (omg interactice map)
    - Food: Link my beli AND my instagram food account
    - Reads: how can i develop a fun bookshelf find of page
3. i want to change fonts/themes to make it more personal and more like me
4. for the personal section, there is a weird gap in betwen the sections!!
5. maybe make buttons in center?

Ideas:
experience - make it so it's intuitive to click on each one and when it's clicked ,THEN the bullet point sshow up+ the extra infromation!!  
i  also want a space to add the logo for the images!!



i kind of what to list projects a bit differentely as well. like more CLEAN and miminal. 
similar to experience section where if u click on the square, it will expand the block into what it currently looks like. (immage+title -click-> image+tite+descriptions+techlinks)


BUT I DONT KNOW!!
Goal: make it look cleaner, a bit unique, but intuite
for the personal section, there is a weird gap in betwen the sections!!
*/




/* 
    <!-- Footer -->
<!--     <footer class="footer">
        <div class="footer-content">
            <div class="social-links">
                <a href="#" class="social-link">📧</a>
                <a href="#" class="social-link">💼</a>
                <a href="#" class="social-link">🐙</a>
                <a href="#" class="social-link">🐦</a>
            </div>
            <p class="footer-text">
                © 2025 Your Name. Built with passion and lots of coffee ☕
            </p>
        </div>
    </footer>
 -->
    
 */
    