import peliculas from './peliculas.js'

const generoAccion = document.getElementById("genero-28")
const generoThriller = document.getElementById("genero-53")
const generoAventura = document.getElementById("genero-12")

const peliculasFiltradasAccion = peliculas.filter(pelicula => pelicula.genre_ids.includes(28))
const peliculasFiltradasThriller = peliculas.filter(pelicula => pelicula.genre_ids.includes(53))
const peliculasFiltradasAventura = peliculas.filter(pelicula => pelicula.genre_ids.includes(12))


peliculasFiltradasAccion.forEach(pelicula => generoAccion.innerHTML += `
  <div class="pelicula">
  <img src=https://image.tmdb.org/t/p/w200${pelicula.poster_path} />
  <h2>${pelicula.title}</h2>
  </div>
  `
)

peliculasFiltradasThriller.forEach(pelicula => generoThriller.innerHTML += `
  <div class="pelicula">
  <img src=https://image.tmdb.org/t/p/w200${pelicula.poster_path} />
  <h2>${pelicula.title}</h2>
  </div>
  `)

  peliculasFiltradasAventura.forEach(pelicula => generoAventura.innerHTML += `
  <div class="pelicula">
  <img src=https://image.tmdb.org/t/p/w200${pelicula.poster_path} />
  <h2>${pelicula.title}</h2>
  </div>
  `)
