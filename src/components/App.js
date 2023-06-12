let data = () =>({
    titulo: "Hola bienvenido a Vuejs 3 😊",
    attrsImages: {
      src:'https://images.pexels.com/photos/2113332/pexels-photo-2113332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt:'img-cat',
      width:'400'
    }
  })
  
let App = {
  data,
}

export {
    App as default
}