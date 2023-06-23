let TituloComponent = () => `
<h1>{{titulo.toUpperCase()}}</h1>
<input type="text" v-model="titulo" placeholder="Ingresa un texto"/>
<input type="text" @input="input" :value="titulo" placeholder="Ingresa un texto"/>
`;

export { TituloComponent };
