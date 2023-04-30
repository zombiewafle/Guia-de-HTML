// Seleccionar elementos del DOM
const ul = document.querySelector('ul');
const divArticulo = document.querySelector('#articulo');
const divImagenes = document.querySelector('#imagenes');

// Crear elementos del DOM
const liHome = document.createElement('li');
const aHome = document.createElement('a');
const liDescargas = document.createElement('li');
const aDescargas = document.createElement('a');
const liNosotros = document.createElement('li');
const aNosotros = document.createElement('a');
const h2 = document.createElement('h2');
const article1 = document.createElement('article');
const article2 = document.createElement('article');
const img1 = document.createElement('img');
const img2 = document.createElement('img');
const img3 = document.createElement('img');
const img4 = document.createElement('img');
const footer = document.createElement('footer');

// Establecer atributos de los elementos
aHome.setAttribute('href', '#home');
aHome.textContent = 'Home';
liHome.appendChild(aHome);

aDescargas.setAttribute('href', '#downloads');
aDescargas.textContent = 'Descargar';
liDescargas.appendChild(aDescargas);

aNosotros.setAttribute('href', '#about');
aNosotros.textContent = 'Acerca de nosotros';
liNosotros.appendChild(aNosotros);

h2.textContent = 'Noticias sobre las nuevas consolas de videojuegos';

article1.textContent = 'Durante los últimos meses hemos visto como distintas compañías han lanzado las nuevas iteraciones de las ya conocidas consolas. Por parte de Sony tenemos la PlayStation 5 en sus versiones digital y con lector de BlueRay, la cual presenta un diseño atípico. Por su lado, Microsoft lanzó un equipo con un diseño más conservador, algo que nos permitirá tener una consola, además de decoración para la sala en la que se encuentre.';

article2.textContent = 'Nintendo siguiendo el camino que ha trazado durante esta década y nos presenta algunas mejoras (ya necesitadas) a la Nintendo Switch, ahora trayendo ahora una pantalla OLED, un incremento en el almacenamiento y el peso. Y para finalizar, Valve con su SteamDeck, que realmente es una pc en formato portátil. Valve nos mostró algo completamente nuevo en el mundo mainstream, ya que nos da acceso al catálogo de Steam en cualquier lugar que queramos.';

img1.setAttribute('src', 'images/ps5.webp');
img1.setAttribute('width', '30%');

img2.setAttribute('src', 'images/xbox.webp');
img2.setAttribute('width', '30%');

img3.setAttribute('src', 'images/switch-oled.original.webp');
img3.setAttribute('width', '30%');

img4.setAttribute('src', 'images/steam-deck-model.webp');
img4.setAttribute('width', '33.5%');

footer.innerHTML = '&copy; 2022 by Javier Salazar';

// Agregar elementos al DOM
ul.appendChild(liHome);
ul.appendChild(liDescargas);
ul.appendChild(liNosotros);

divArticulo.appendChild(h2);
divArticulo.appendChild(article1);
divArticulo.appendChild(document.createElement('br'));
divArticulo.appendChild(document.createElement('br'));
divArticulo.appendChild(article2);
divArticulo.appendChild(document.createElement('br'));

divImagenes.appendChild(img1);
divImagenes.appendChild(img2);
divImagenes.appendChild(img3);
divImagenes.appendChild(img4);

document.querySelector('body').appendChild(footer);