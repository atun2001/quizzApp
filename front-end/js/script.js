var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".flashcard-tools__transition--arrow.right",
    prevEl: ".flashcard-tools__transition--arrow.left",
  },
  on: {
    slideChange: function () {
    currentSlideIndex = swiper.realIndex; // Cập nhật chỉ số slide hiện tại
    updateSlide();
      var cards = document.querySelectorAll(".flip-card-inner");
      cards.forEach(function (card) {
        card.classList.remove("flipped");
      });
    },
  },
});
// Lấy nút play/pause
const playButton = document.querySelector('.flashcard-tools__media--play');

// Biến để theo dõi trạng thái autoplay
let isPlaying = true;

// Hàm để chuyển đổi giữa play và pause
function togglePlayPause() {
    if (isPlaying) {
        swiper.autoplay.stop(); // Dừng autoplay
        playButton.innerHTML = '<i class="fa-solid fa-play" style="color: #63E6BE;"></i>'; // Đổi icon thành play
    } else {
        swiper.autoplay.start(); // Bắt đầu autoplay
        playButton.innerHTML = '<i class="fa-solid fa-pause" style="color: #63E6BE;"></i>'; // Đổi icon thành pause
    }
    isPlaying = !isPlaying; // Đảo ngược trạng thái
}
playButton.addEventListener('click', togglePlayPause);


//flip card
var cards = document.querySelectorAll(".flip-card-inner");

cards.forEach((card) => {
  card.addEventListener("click", function () {
    card.classList.toggle("flipped");
  });
});

//transition
const slides = document.querySelectorAll(".flip-card"); // Cập nhật selector

let currentSlideIndex = 0;
const slideCounter = document.getElementById("slide-counter");

// Hàm để cập nhật slide hiện tại và counter
function updateSlide() {
  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlideIndex ? "block" : "none"; // Hiển thị slide hiện tại
  });
  slideCounter.textContent = `${currentSlideIndex + 1}/${slides.length}`; // Cập nhật counter
}

// Sự kiện cho nút Next
document
  .querySelector(".flashcard-tools__transition--arrow.right")
  .addEventListener("click", () => {
    if (currentSlideIndex < slides.length - 1) {
      currentSlideIndex++;
      updateSlide();
    }
  });

// Sự kiện cho nút Previous
document
  .querySelector(".flashcard-tools__transition--arrow.left")
  .addEventListener("click", () => {
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
      updateSlide();
    }
  });

// Khởi động slide đầu tiên
updateSlide();
