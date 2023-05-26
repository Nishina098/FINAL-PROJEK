    window.addEventListener("load", function () {
    var currentSlide = 1;
    var totalSlides = document.querySelectorAll("#slider input[type=radio]").length;

    function showSlide() {
      var nextSlide = (currentSlide % totalSlides) + 1;
      document.getElementById("s" + currentSlide).checked = false;
      document.getElementById("s" + nextSlide).checked = true;
      currentSlide = nextSlide;
    }

    setInterval(showSlide, 3000); // Ganti slide setiap 4 detik
  });

  window.addEventListener("load", function () {
    var cards = document.querySelectorAll(".card");

    function animateCards() {
      cards.forEach(function (card) {
        card.style.animation = "ease-in 7s";
      });
    }

    animateCards();
  });
