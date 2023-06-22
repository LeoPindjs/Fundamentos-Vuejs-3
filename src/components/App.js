import { data } from "../estadoVue/index";
import { methods } from "../metodos/index";
import {
  ContadorComponent,
  ImagenComponent,
  TituloComponent,
} from "../templates/index";

let App = {
  data,
  methods,
  template: `
    ${TituloComponent()}
    ${ImagenComponent()}
    ${ContadorComponent()}
  `,
};

export { App as default };
