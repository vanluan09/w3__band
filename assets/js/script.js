const buyBtns= document.querySelectorAll('.ticket-btn');

const modal = document.querySelector('.modal');
const closeBtns = document.querySelectorAll('.js-close');
const modalContainer = document.querySelector('.container');


function showModal() {
    modal.classList.add('open');
}

function hideModal() {
    modal.classList.remove('open');
}

// bật modal
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click',showModal);

}

// tắt modal
for (const closeBtn of closeBtns) {
    closeBtn.addEventListener('click',hideModal);
}

modal.addEventListener('click',hideModal);

modalContainer.addEventListener('click',function(event) {
    event.stopPropagation();
});



