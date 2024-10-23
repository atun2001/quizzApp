// script.js
var cards = document.querySelectorAll('.flip-card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('flipped');
  });
});


/* let currentCardIndex = 0;
const cards = document.querySelectorAll('.flip-card');

function flipCard(card) {
    const flipInner = card.querySelector('.flip-card-inner');
    flipInner.classList.toggle('flipped'); // Chuyển đổi trạng thái lật
}

function changeCard(direction) {
    // Ẩn thẻ hiện tại
    cards[currentCardIndex].classList.remove('active');
    
    currentCardIndex += direction;

    if (currentCardIndex < 0) {
        currentCardIndex = cards.length - 1; // Quay lại thẻ cuối
    } else if (currentCardIndex >= cards.length) {
        currentCardIndex = 0; // Quay lại thẻ đầu
    }

    // Hiển thị thẻ mới
    cards[currentCardIndex].classList.add('active');

    // Đảm bảo thẻ mới không bị lật
    const newFlipInner = cards[currentCardIndex].querySelector('.flip-card-inner');
    newFlipInner.classList.remove('flipped');
} */