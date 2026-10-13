# Git og GitHub cheat sheet

Cheat sheet på en A4-side om hvordan man jobber trygt med Git og GitHub.
Laget med HTML, CSS og Vue 3.

Åpne `index.html` i nettleseren. Vue hentes fra internett.

## Filer

- `index.html` - oppsettet og Vue-malen
- `style.css` - styling
- `script.js` - innholdet og Vue-appen

## 5 avanserte teknikker

### 1. Vue og v-for
Innholdet ligger som en liste i `script.js`. I HTML-en er det bare én `<section>`,
og Vue lager en boks for hver seksjon med `v-for`. Hvis jeg vil ha en ny boks
legger jeg bare til et nytt objekt i lista.

### 2. Søk med v-model og computed
Søkefeltet er koblet til `sok` med `v-model`. `filtrert` er en computed som
regnes ut på nytt hver gang man skriver noe, og viser bare boksene der
tittelen inneholder søkeordet.

### 3. CSS-variabler
Fargene ligger i `:root`. Hver farge-klasse setter bare `--farge`, for eksempel
`.gronn { --farge: var(--gronn); }`. Kanten og overskriften bruker `var(--farge)`,
så jeg slipper å skrive den samme CSS-en for hver farge.

### 4. To spalter med column-count
Boksene er ikke like høye, så med grid ble det hull. `column-count: 2` pakker dem
tett, og `break-inside: avoid` gjør at en boks ikke blir delt i to.

### 5. Flexbox og media query
Headeren bruker `display: flex` med `justify-content: space-between`, så tittelen
står til venstre og søkefeltet til høyre. På skjermer under 800px gjør media queryen
at headeren legger seg under hverandre (`flex-direction: column`), boksene kommer
i én spalte og arket fyller hele bredden.
