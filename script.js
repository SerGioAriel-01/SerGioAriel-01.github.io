document.addEventListener('DOMContentLoaded', () => {
  fetch('animales.json')
    .then(response => response.json())
    .then(data => {
      const animalList = document.getElementById('animal-list');

      data.animales.forEach(animal => {
        const animalCard = document.createElement('div');
        animalCard.className = 'animal-card';

        const animalName = document.createElement('div');
        animalName.className = 'animal-name';
        animalName.textContent = animal.nombre;

        const animalSpecies = document.createElement('div');
        animalSpecies.className = 'animal-species';
        animalSpecies.textContent = animal.especie;

        const animalBreed = document.createElement('div');
        animalBreed.className = 'animal-breed';
        animalBreed.textContent = `Raza: ${animal.raza}`;

        const animalAge = document.createElement('div');
        animalAge.className = 'animal-age';
        animalAge.textContent = `Edad: ${animal.edad} años`;

        const animalDescription = document.createElement('div');
        animalDescription.className = 'animal-description';
        animalDescription.textContent = animal.descripcion;

        const animalImage = document.createElement('img');
        animalImage.src = animal.imagen;
        animalImage.alt = animal.nombre;
        animalImage.id = animal.id; // Agregamos el id del animal como identificador para la imagen

        const adoptButton = document.createElement('button');
        adoptButton.className = 'button';
        adoptButton.textContent = `Adoptar a ${animal.nombre}`;
        adoptButton.addEventListener('click', () => adoptarAnimal(animal.nombre));

        animalCard.appendChild(animalName);
        animalCard.appendChild(animalSpecies);
        animalCard.appendChild(animalBreed);
        animalCard.appendChild(animalAge);
        animalCard.appendChild(animalDescription);
        animalCard.appendChild(animalImage);
        animalCard.appendChild(adoptButton);

        animalList.appendChild(animalCard);
      });
    })
    .catch(error => console.error('Error al cargar el JSON:', error));
});

function adoptarAnimal(nombreAnimal) {
  switch (nombreAnimal.toLowerCase()) {
    case 'caramelo':
      alert('Felicidades, ahora Caramelo es parte de tu familia, recuerda darle mucho cariño. ¡Gracias por adoptar!');
      break;
    case 'max':
      alert('¡Enhorabuena! Has adoptado a Max. recuerda, le gusta que lo mimen.');
      break;
    case 'kiwi':
      alert('¡Felicidades! Kiwi ahora es parte de tu familia.recuerda darle muchas zanahorias si no se enfadara ¡Muchas Gracias por adoptarlo!');
      break;
    case 'chispa':
      alert('¡Felicidades! Chispa ha encontrado un nuevo hogar junto a ti. ¡Gracias por adoptar!');
      break;
    case 'milo':
      alert('¡Enhorabuena! Milo ha sido adoptado y está listo para ser mimado por su nueva familia.');
      break;
    case 'coco':
      alert('¡Felicidades! Coco ahora es parte de tu familia, esta feliz de poder ser tu nuevo amigo. ¡Gracias por adoptar!');
      break;
    default:
      alert(`Felicidades, ahora tienes a ${nombreAnimal} en la familia. ¡Gracias por adoptar!`);
  }
}
document.addEventListener('DOMContentLoaded', () => {
  // Código existente para cargar la lista de animales

  // Código para manejar el envío de comentarios
  const commentForm = document.getElementById('comment-form');
  const commentInput = document.getElementById('comment-input');
  const commentsSection = document.getElementById('comments');

  commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const commentText = commentInput.value.trim();
    if (commentText !== '') {
      addComment(commentText);
      commentInput.value = '';
    }
  });

  function addComment(text) {
    const currentDate = new Date();
    const commentDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';
    commentDiv.innerHTML = `
      <p>${text}</p>
      <p class="comment-date">Publicado el ${commentDate}</p>
    `;
    commentsSection.appendChild(commentDiv);
  }
});
