document.addEventListener('DOMContentLoaded', () => {
    const figures = document.querySelectorAll('.figury'); // Zmieniono na 'figury'
    let isDragging = false;
    let activeFigure = null;
    let offsetX = 0;
    let offsetY = 0;

    figures.forEach(figury => {
      // Wyłączamy domyślne menu kontekstowe, gdy klikniemy prawym przyciskiem
      figury.addEventListener('contextmenu', (e) => {
        e.preventDefault();
      });

      // Obsługa przytrzymania lewego przycisku myszy
      figury.addEventListener('mousedown', (e) => {
        if (e.button === 0) { // 0 oznacza lewy przycisk myszy
          isDragging = true;
          activeFigure = figury;
          // Obliczamy offset między myszką a figurą
          offsetX = e.clientX - figury.getBoundingClientRect().left;
          offsetY = e.clientY - figury.getBoundingClientRect().top;
        }
      });
    });

    // Kiedy puścimy przycisk myszy
    document.addEventListener('mouseup', () => {
      isDragging = false;
      activeFigure = null; // Zerujemy aktywną figurę
    });

    // Kiedy ruszamy myszką
    document.addEventListener('mousemove', (e) => {
      if (isDragging && activeFigure) {
        // Ustawiamy nową pozycję figury, uwzględniając offset
        activeFigure.style.left = `${e.pageX - offsetX}px`;
        activeFigure.style.top = `${e.pageY - offsetY}px`;
      }
    });
  });