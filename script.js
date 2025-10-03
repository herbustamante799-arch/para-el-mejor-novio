document.addEventListener('DOMContentLoaded', () => {

    const sobre = document.getElementById('abrirCarta');
    const contenedorCarta = document.getElementById('contenedorCarta');

    if (sobre && contenedorCarta) {
        
        sobre.addEventListener('click', () => {
            contenedorCarta.classList.remove('hidden');
        });

        contenedorCarta.addEventListener('click', (event) => {
            if (event.target === contenedorCarta) {
                contenedorCarta.classList.add('hidden');
            }
        });
    }
});

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });
  
  document.addEventListener('keydown', function (e) {
    if (e.key === 'F12') {
      e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
      e.preventDefault();
    }
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
    }
  });

  (function() {
  const checkDevTools = () => {
    const inicio = new Date();
    
    debugger;
    
    const fin = new Date();

    if (fin - inicio > 100) {
      window.location.href = 'https://www.google.com'; 
    }
    setTimeout(checkDevTools, 10); 
  };
  
  checkDevTools();
})();
