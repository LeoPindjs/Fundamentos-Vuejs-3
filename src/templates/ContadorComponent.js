let ContadorComponent = () =>
  `<section>
  <h1>Valor de mi contador {{contador}}</h1>
  <button @click="incrementar">Incrementar</button>
  <button @click="decrementar">Decrementar</button>
  <button @click="reset">Reiniciar</button>
</section>`;


export {
    ContadorComponent,
}