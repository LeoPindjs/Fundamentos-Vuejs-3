let methods = {
  incrementar() {
    this.contador++;
  },
  decrementar() {
    this.contador > 0 && this.contador--;
  },
  reset() {
    this.contador = 0;
  },
  input(e){
    this.titulo = e.target.value 
  }
};

export {
    methods
};
