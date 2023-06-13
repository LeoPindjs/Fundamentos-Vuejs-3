import { data } from "../estadoVue/index";
import { methods } from "../metodos/index";

let App = {
  data,
  methods,
  template: `
  <h1>{{titulo.toUpperCase()}}</h1>
  <figure>
    <!-- <img 
      :src="attrsImages.src" 
      :alt="attrsImages.alt" 
      :width="attrsImages.width"
    > -->
    <img v-bind="attrsImages">
  </figure>
  <section>
    <h1>Valor de mi contador {{contador}}</h1>
    <button @click="incrementar">Incrementar</button>
    <button @click="decrementar">Decrementar</button>
    <button @click="reset">Reiniciar</button>
  </section>
  `,
};

export { App as default };
