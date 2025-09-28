# Cerca-Ricetta
iccola web app per cercare ricette usando l'API di TheMealDB. Interfaccia minimale in HTML/CSS e logica in JavaScript.

## Come usare
1. Apri [index.html](index.html) nel browser.
2. Inserisci il nome di una pietanza o un ingrediente nella barra di ricerca.
3. Premi "Cerca" per visualizzare i risultati.

La ricerca è gestita dalla funzione [`fetchRecipes`](script.js) e i risultati sono resi da [`displayRecipes`](script.js).

## Struttura del progetto
- [index.html](index.html) — interfaccia utente.
- [style.css](style.css) — stili.
- [script.js](script.js) — logica di ricerca e rendering (contiene `fetchRecipes` e `displayRecipes`).
- [LICENSE](LICENSE) — licenza MIT.
- [icon-favicon/icons8-biscoito-30.png](icon-favicon/icons8-biscoito-30.png) — icona favicon.
- [.gitignore](.gitignore) — file di esclusione git.
- [.gitattributes](.gitattributes) — normalizzazione fine linea.

## Dettagli tecnici
- API usata: TheMealDB (richieste via fetch).
- Link sorgente/YouTube nelle card: `meal.strSource` o `meal.strYoutube`.

## Contribuire
Apri una issue o invia una pull request. Mantieni il layout semplice e l'accessibilità.

## Licenza
Progetto rilasciato sotto la [LICENSE](LICENSE) (MIT).