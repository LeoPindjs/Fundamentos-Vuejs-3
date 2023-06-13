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
};

export {
    methods
};
