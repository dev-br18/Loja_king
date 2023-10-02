const carousel = document.querySelector('.carousel');
const carousel2 = document.querySelector('.carousel2')
let isDragging = false;
let startX, scrollLeft;


const openModalButtons = document.querySelectorAll('.open-modal-button');
const modal = document.getElementById('myModal');
const modalTitle = document.querySelector('.modal-title');
const modalDescription = document.querySelector('.modal-description');
const modalImage = document.querySelector('.modal-image');
const modalPrice = document.querySelector('.modal-price')
const closeModalButton = document.querySelector('.close');

// Função para fechar o modal
function closeModal() {
    modal.style.display = 'none'; // Oculta o modal
  }

closeModalButton.addEventListener('click', closeModal);

// Adicione um ouvinte de evento de clique a todos os botões "Ver Detalhes"
openModalButtons.forEach(function (button) {
    button.addEventListener('click', function () {
    const title = button.getAttribute('data-title');
    const description = button.getAttribute('data-description');
    const imageSrc = button.getAttribute('data-image');
    const price = button.getAttribute('data-price');

    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalPrice.textContent = price;
    modalImage.src = imageSrc;

    modal.style.display = 'block'; // Exibe o modal com os detalhes específicos do celular
   });
});

  

carousel.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseup', () => {
  isDragging = false;
});

carousel.addEventListener('mouseleave', () => {
  isDragging = false;
});

carousel.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 1.5;
  carousel.scrollLeft = scrollLeft - walk;
});


carousel2.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - carousel2.offsetLeft;
  scrollLeft = carousel2.scrollLeft;
});

carousel2.addEventListener('mouseup', () => {
  isDragging = false;
});

carousel2.addEventListener('mouseleave', () => {
  isDragging = false;
});

carousel2.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - carousel2.offsetLeft;
  const walk = (x - startX) * 1.5;
  carousel2.scrollLeft = scrollLeft - walk;
});



