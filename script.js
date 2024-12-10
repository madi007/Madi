const sectionsWrapper = document.querySelector('.sections-wrapper');
const slider = document.querySelector('.slider');
const tabs = document.querySelectorAll('.tab');

sectionsWrapper.addEventListener('scroll', () => {
    const scrollPosition = sectionsWrapper.scrollLeft;
    const width = sectionsWrapper.offsetWidth;

    // Ползунок
    const sliderPosition = (scrollPosition / width) * 100;
    slider.style.transform = `translateX(${sliderPosition}%)`;

    // Активные вкладки
    if (scrollPosition < width / 2) {
        tabs[0].classList.add('active');
        tabs[1].classList.remove('active');
    } else {
        tabs[1].classList.add('active');
        tabs[0].classList.remove('active');
    }
});

const sendBtn = document.querySelector('.footer-btn.present-btn');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal-btn');
const randomCodeElement = document.querySelector('.random-code');

// Функция для генерации случайного 6-значного кода
function generateRandomCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Показ модального окна
function showModal() {
    randomCodeElement.textContent = generateRandomCode();
    modal.classList.remove('hidden');
    modal.classList.add('visible');
}

// Скрытие модального окна
function hideModal() {
    modal.classList.remove('visible');
    modal.classList.add('hidden');
}

// Обработчики событий
sendBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', hideModal);

// Закрытие модального окна по клику вне его (опционально)
document.addEventListener('click', (e) => {
    if (modal.classList.contains('visible') && !modal.contains(e.target) && !sendBtn.contains(e.target)) {
        hideModal();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Получаем элементы
const uploadButton = document.getElementById('upload-button');
const uploadedImage = document.getElementById('uploaded-image');
const imageContainer = document.getElementById('image-container');

// Загружаем изображение из LocalStorage, если оно там есть
window.onload = function() {
  const savedImage = localStorage.getItem('uploadedImage');
  if (savedImage) {
    uploadedImage.src = savedImage; // Устанавливаем src изображения
    imageContainer.classList.remove('hidden'); // Показываем контейнер
  }
};

// Обработчик на кнопку загрузки изображения
uploadButton.addEventListener('click', function() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';

  input.onchange = function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      
      // Преобразуем изображение в base64
      reader.onload = function(e) {
        const imageDataUrl = e.target.result;
        
        // Сохраняем изображение в LocalStorage
        localStorage.setItem('uploadedImage', imageDataUrl);

        // Показываем изображение в контейнере
        uploadedImage.src = imageDataUrl;
        imageContainer.classList.remove('hidden'); // Показываем контейнер с изображением
      };
      
      // Читаем файл как Data URL
      reader.readAsDataURL(file);
    }
  };

  input.click();
});
