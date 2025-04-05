// Открыть модальное окно
document.getElementById("button-buy-1").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open")
})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal").classList.remove("open")
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

// second button

// Открыть модальное окно
document.getElementById("button-buy-2").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open")
})

// third button

// Открыть модальное окно
document.getElementById("button-buy-3").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open")
})

// fourth button

// Открыть модальное окно
document.getElementById("button-buy-4").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open")
})

// fifth button

// Открыть модальное окно
document.getElementById("button-buy-5").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open")
})

// sixth button

// Открыть модальное окно
document.getElementById("button-buy-6").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open")
})

// seventh button

// Открыть модальное окно
document.getElementById("button-buy-7").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open")
})

// eights button

// Открыть модальное окно
document.getElementById("button-buy-8").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open")
})