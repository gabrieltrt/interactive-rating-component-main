// A função abaixo adiciona a classe "visible" aos elementos que
// serão mostrados e adiciona a classe "hidden" ao elemento que
// será escondido.

const toggleContent = () => {
    const hideElement = document.getElementById('elementToHide');
    const showElement = document.getElementById('elementToShow');
    
    hideElement.classList.add('hidden');
    showElement.classList.remove('hidden');
    showElement.classList.add('visible');
};

const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', toggleContent);

//----------------------------------------------------------------//

const options = document.querySelectorAll('.circle');
const elementoClicadoTexto = document.getElementById('elementoClicadoTexto');

options.forEach((option) => {
    option.addEventListener('click', function() {
      
      options.forEach((el) => {
        el.classList.remove('selecionado');
      });
  
      option.classList.add('selecionado');

      elementoClicadoTexto.textContent = option.textContent;
    });
  });





