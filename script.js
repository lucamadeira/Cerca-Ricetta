document.getElementById('inviaBtn').addEventListener('click', () => {
  const query = document.getElementById('cercaInput').value;
  if (query) {
    fetchRecipes(query);
  }
});

function fetchRecipes(query) {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    .then(response => response.json())
    .then(data => displayRecipes(data.meals))
    .catch(error => console.error('Errore nella fetch:', error));
}

function displayRecipes(meals) {
  const container = document.getElementById('recipes');
  container.innerHTML = '';

  if (!meals) {
    container.innerHTML = '<p>Nessuna ricetta trovata.</p>';
    return;
  }

  meals.forEach(meal => {
    const card = document.createElement('div');
    card.className = 'recipe-card';

    card.innerHTML = `
      <h3>${meal.strMeal}</h3>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      <p><strong>Cucina:</strong> ${meal.strArea}</p>
      <a href="${meal.strSource || meal.strYoutube}" target="_blank">📖 Vedi ricetta</a>
    `;

    container.appendChild(card);
  });
}
