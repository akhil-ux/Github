
        document.addEventListener("DOMContentLoaded", function () {
            let slideIndex = 0;
            showSlides();

            function showSlides() {
                let i;
                let slides = document.getElementsByClassName("mySlides");
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                slideIndex++;
                if (slideIndex > slides.length) { slideIndex = 1 }
                slides[slideIndex - 1].style.display = "block";
                setTimeout(showSlides, 2000); // Change image every 2 seconds
            }

            function plusSlides(n) {
                showSlides(slideIndex += n);
            }

            function currentSlide(n) {
                showSlides(slideIndex = n);
            }

            // Add event listeners for the buttons
            document.querySelector(".prev").addEventListener("click", function () {
                plusSlides(-1);
            });

            document.querySelector(".next").addEventListener("click", function () {
                plusSlides(1);
            });

            // Add event listeners for the dots
            document.querySelectorAll(".dot").forEach(function (dot, index) {
                dot.addEventListener("click", function () {
                    currentSlide(index + 1);
                });
            });
        });
    
