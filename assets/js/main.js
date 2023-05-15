//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*********************************TOYOTA**************************************//

const dbToyota = [
  {
    id: 1,
    model: "Avanza",
    price: 19020,
    type: "Minivan",
  },
  {
    id: 2,
    model: "Corolla",
    price: 23160,
    type: "Sedan",
  },
  {
    id: 3,
    model: "Yaris",
    price: 17340,
    type: "Sedan",
  },
  {
    id: 4,
    model: "Rav4",
    price: 31550,
    type: "Suv",
  },
  {
    id: 5,
    model: "Raize",
    price: 16390,
    type: "Suv",
  },
  {
    id: 6,
    model: "Hilux",
    price: 28880,
    type: "Pickup",
  },
  {
    id: 7,
    model: "Rush",
    price: 22940,
    type: "Minivan",
  },
];

let toyotaArr = []; 
let carritoToyotaArr = []; 
let trueOfalse = true;

// Clase Constructora Toyota

class Toyota {
  constructor(id, model, price, type) {
    this.id = id;
    this.model = model;
    this.price = price;
    this.type = type;
  }

}

// Funcion Push Toyota para agregar el arrays de objetos s toyotaArr[]
function pushToyota() {
  for (const productoToyota of dbToyota) {
    toyotaArr.push(
      new Toyota(
        productoToyota.id,
        productoToyota.model,
        productoToyota.price,
        productoToyota.type
      )
    );
  }

}

pushToyota();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//*********************************NISSAN**************************************//
const dbNissan = [
  {
    id: 1,
    model: "Urban",
    price: 31750,
    type: "Minivan",
  },
  {
    id: 2,
    model: "Sentra",
    price: 22790,
    type: "Sedan",
  },
  {
    id: 3,
    model: "Versa",
    price: 18360,
    type: "Sedan",
  },
  {
    id: 4,
    model: "X-trail",
    price: 34890,
    type: "Suv",
  },
  {
    id: 5,
    model: "Kicks",
    price: 23180,
    type: "Suv",
  },
  {
    id: 6,
    model: "Frontier",
    price: 30760,
    type: "Pickup",
  },
  // {
  //   id:7,
  //   name:'Rush',
  //   price: 22940,
  //   modelo: 'Minivan'
  // },
];

let nissanArr = []; 
let carritoNissanArr = []; 

// Clase Constructora Nissan

class Nissan {
  constructor(id, model, price, type) {
    this.id = id;
    this.model = model;
    this.price = price;
    this.type = type;
  }
}

// Funcion Push Nissan para agregar el arrays de objetos a nissanArr[]
function pushNissan() {
  for (const productoNissan of dbNissan) {
    nissanArr.push(
      new Nissan(
        productoNissan.id,
        productoNissan.model,
        productoNissan.price,
        productoNissan.type
      )
    );
  }

}

pushNissan();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*********************************CHEVROLET**************************************//

const dbChevrolet = [
  {
    id: 1,
    model: "N400",
    price: 11990,
    type: "Minivan",
  },
  {
    id: 2,
    model: "Joy",
    price: 12290,
    type: "Sedan",
  },
  {
    id: 3,
    model: "Onix",
    price: 13590,
    type: "Sedan",
  },
  {
    id: 4,
    model: "Tracker",
    price: 18490,
    type: "Suv",
  },
  {
    id: 5,
    model: "Captiva",
    price: 19990,
    type: "Suv",
  },
  {
    id: 6,
    model: "Colorado",
    price: 25490,
    type: "Pickup",
  },
  {
    id: 7,
    model: "Silverado",
    price: 59990,
    type: "Pickup",
  },
];

let chevroletArr = []; 
let carritoChevroletArr = []; 

// Clase Constructora Chevrolet

class Chevrolet {
  constructor(id, model, price, type) {
    this.id = id;
    this.model = model;
    this.price = price;
    this.type = type;
  }
}

// Funcion Push Chevrolet para agregar el arrays de objetos a chevroletArr[]
function pushChevrolet() {
  for (const productoChevrolet of dbChevrolet) {
    chevroletArr.push(
      new Chevrolet(
        productoChevrolet.id,
        productoChevrolet.model,
        productoChevrolet.price,
        productoChevrolet.type
      )
    );
  }

}

pushChevrolet();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*********************************VOLKSWAGEN**************************************//

const dbVolkswagen = [
  {
    id: 1,
    model: "T-Cross",
    price: 21990,
    type: "Suv",
  },
  {
    id: 2,
    model: "Polo",
    price: 18490,
    type: "Sedan",
  },
  {
    id: 3,
    model: "Jetta",
    price: 23790,
    type: "Sedan",
  },
  {
    id: 4,
    model: "Tiguan",
    price: 35390,
    type: "Suv",
  },
  {
    id: 5,
    model: "Taos",
    price: 28490,
    type: "Suv",
  },
  {
    id: 6,
    model: "Amarok",
    price: 37990,
    type: "Pickup",
  },
  {
    id: 7,
    model: "Saveiro",
    price: 13990,
    type: "Pickup",
  },
];

let volkswagenArr = []; 
let carritoVolkswagenArr = []; 

// Clase Constructora Volkswagen

class Volkswagen {
  constructor(id, model, price, type) {
    this.id = id;
    this.model = model;
    this.price = price;
    this.type = type;
  }
}

// Funcion Push Volkswagen para agregar el arrays de objetos a volkswagenArr[]
function pushVolkswagen() {
  for (const productoVolkswagen of dbVolkswagen) {
    volkswagenArr.push(
      new Volkswagen(
        productoVolkswagen.id,
        productoVolkswagen.model,
        productoVolkswagen.price,
        productoVolkswagen.type
      )
    );
  }

}

pushVolkswagen();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*********************************INGRESANDO TODOS LOS VEHICULOS A UN SOLO ARRAY**************************************//

let todosVehiculosArr = [];
let carritoTodosVehiculos = []; 

// Clase Constructora

class TodosVehiculos {
  constructor(id, model, price, type) {
    this.id = id;
    this.model = model;
    this.price = price;
    this.type = type;
  }

}

// Funcion Push para agregar el arrays de objetos a todosVehiculosArr[]
function pushTodosVehiculos() {
  for (const productoToyota of dbToyota) {
    todosVehiculosArr.push(
      new TodosVehiculos(
        productoToyota.id,
        productoToyota.model,
        productoToyota.price,
        productoToyota.type
      )
    );
  }

  for (const productoNissan of dbNissan) {
    todosVehiculosArr.push(
      new TodosVehiculos(
        productoNissan.id,
        productoNissan.model,
        productoNissan.price,
        productoNissan.type
      )
    );
  }

  for (const productoChevrolet of dbChevrolet) {
    todosVehiculosArr.push(
      new TodosVehiculos(
        productoChevrolet.id,
        productoChevrolet.model,
        productoChevrolet.price,
        productoChevrolet.type
      )
    );
  }

  for (const productoVolkswagen of dbVolkswagen) {
    todosVehiculosArr.push(
      new TodosVehiculos(
        productoVolkswagen.id,
        productoVolkswagen.model,
        productoVolkswagen.price,
        productoVolkswagen.type
      )
    );
  }

}

pushTodosVehiculos();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*********************************FUNCION PRINCIPAL INITPROGRAM PARA LA PANTALLA INICIAL - USANDO WHILE, PROMPT Y SWITCH**************************************//

function initProgram() {
  while (trueOfalse) {
    let selectSection = prompt(
      "¿Qué quieres hacer? \n 1. Ver Todos los vehículos \n 2. Ver vehículos TOYOTA \n 3. Ver vehículos NISSAN \n 4. Ver vehículos de mayor precio a menor precio \n 5. Ver vehículo por tipo \n 6. Comprar un vehiculo\n 7. Aplicar porcentaje de descuento a marca Chevrolet  \n 9. Salir"
    );
    switch (selectSection) {
      case "1":
        verTodosLosVehiculos();
        break;
      case "2":
        verVehiculosToyota();
        break;
      case "3":
        verVehiculosNissan();
        break;
      case "4":
        verVehiculosDeMayorPrecioAMenorPrecio();
        break;
      case "5":
        verVehiculoPorTipo();
        break;
      case "6":
        comprarVehiculo();
        break;
      case "7":
        colocarPorcentajeDeDescuentoChevrolet();
        break;
      case "9":
        trueOfalse = false;
        break;

      default:
        alert("No ingresaste una opcion valida");
        selectSection = prompt(
          "¿Qué quieres hacer? \n 1. Ver Todos los vehículos \n 2. Ver vehículos TOYOTA \n 3. Ver vehículos NISSAN \n 4. Ver vehículos de mayor precio a menor precio \n 5. Ver vehículo por tipo \n 6. Comprar un vehiculo\n 7. Aplicar porcentaje de descuento a marca Chevrolet  \n 9. Salir"
        );

        break;
    }
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*********************************MOSTRAMOS TODOS LOS VEHICULOS  PASANDO LAS FUNCIONES COMO PARAMETROS**************************************//

function verTodosLosVehiculos() {
  productosToyota(dbToyota, alert);
  productosNissan(dbNissan, alert);
  productosChevolet(dbChevrolet, alert);
  productosVolkswagen(dbVolkswagen, alert);
  alert("Ya no hay mas Vehículos para mostrar");
  initProgram();
}

function productosToyota(arr, fn) {
  for (const toyota of arr) {
    fn(
      `Modelo: ${toyota.model} \nPrecio: ${toyota.price} \nTipo: ${toyota.type} \nTOYOTA`
    );
  }
}

function productosNissan(arr, fn) {
  for (const nissan of arr) {
    fn(
      `Modelo: ${nissan.model} \nPrecio: ${nissan.price} \nTipo: ${nissan.type} \nNISSAN`
    );
  }
}

function productosChevolet(arr, fn) {
  for (const chevrolet of arr) {
    fn(
      `Modelo: ${chevrolet.model} \nPrecio: ${chevrolet.price} \nTipo: ${chevrolet.type} \nCHEVROLET`
    );
  }
}

function productosVolkswagen(arr, fn) {
  for (const volkswagen of arr) {
    fn(
      `Modelo: ${volkswagen.model} \nPrecio: ${volkswagen.price} \nTipo: ${volkswagen.type} \nVOLKSWAGEN`
    );
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*********************************VER SOLO VEHICULOS TOYOTA UTILIZANDO FOREACH**************************************//

function verVehiculosToyota() {
  toyotaArr.forEach((toyota, id) => {
    alert(
      `Id: ${id + 1}\nModelo: ${toyota.model} \nPrecio: ${
        toyota.price
      } \nTipo: ${toyota.type} \nTOYOTA`
    );
  });

  alert(
    `Ya no hay mas Vehículos TOYOTA para mostrar, solo hay ${toyotaArr.length} vehiculos`
  );
  initProgram();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*********************************VER SOLO VEHICULOS NISSAN UTILIZANDO FOREACH**************************************//

function verVehiculosNissan() {
  nissanArr.forEach((nissan, id) => {
    alert(
      `Id: ${id + 1}\nModelo: ${nissan.model} \nPrecio: ${
        nissan.price
      } \nTipo: ${nissan.type} \nNISSAN`
    );
  });

  alert(
    `Ya no hay mas Vehículos NISSAN para mostrar, solo hay ${nissanArr.length} vehiculos`
  );

  initProgram();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*********************************VER VEHICULOS DE MAYOR PRECIO A MENOR PRECIO**************************************//

function verVehiculosDeMayorPrecioAMenorPrecio() {
  todosVehiculosArr.sort((a, b) => b.price - a.price);
  todosVehiculosArr.forEach((todosVehiculos, id) => {
    alert(
      `Id: ${id + 1}\nModelo: ${todosVehiculos.model} \nPrecio: ${
        todosVehiculos.price
      } \nTipo: ${
        todosVehiculos.type
      } \nORDENADOS DE MAYOR PRECIO A MENOR PRECIO`
    );
  });
  console.log(todosVehiculosArr);
  initProgram();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*********************VER VEHICULOS POR TIPO (PICKUP, SUV, MINIVAN, SEDAN) UTILIZANDO FILTER**************************//

function verVehiculoPorTipo() {
  let vehiculoABuscar = prompt('Ingrese el vehículo por tipo \nPickup \nSuv \nMinivan \nSedan')
  let vehiculoEncontrado = todosVehiculosArr.filter((todosVehiculos)=>{
    return todosVehiculos.type == vehiculoABuscar
  })
  if (vehiculoEncontrado.length > 0) {
    vehiculoEncontrado.forEach((vehiculo)=>{
     alert(
      `Modelo: ${vehiculo.model} \nPrecio: ${
        vehiculo.price
      } \nTipo: ${
        vehiculo.type
      } \nORDENADOS POR TIPO DE VEHÍCULO` )

    });
  } else {
    alert(`El Producto no existe`)
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*********************************COMPRAR UN VEHICULO**************************************//


function comprarVehiculo() {
  let vehiculoABuscar = prompt('Ingrese el vehículo a buscar por modelo \nAvanza \nCorolla \nYaris \nRav4 \nRaize \nHilux \nRush \nUrban \nSentra \nVersa \nX-trail \nKicks \nFrontier \nN400 \nJoy \nOnix \nTracker \nCaptiva \nColorado \nSilverado \nT-Cross \nPolo \nJetta \nTiguan  \nTaos \nAmarok \nSaveiro ')
  let vehiculoEncontrado = todosVehiculosArr.find((todosVehiculos)=>{
    return todosVehiculos.model == vehiculoABuscar
  })
  if(vehiculoEncontrado){
    alert( `Modelo: ${vehiculoEncontrado.model} \nPrecio: ${
      vehiculoEncontrado.price
    } \nTipo: ${
      vehiculoEncontrado.type
    } \nEL VEHÍCULO SE HA ENCONTRADO`)

    let confirmarCompra = prompt('Desea agregar el vehículo para su compra \n1. Si \n2. No')

    if(confirmarCompra == 1){
      carritoTodosVehiculos.push(vehiculoEncontrado)
      alert('Se agrego el vehículo para su compra')
      const continuarCompra = prompt('Desea agregar otro vehículo para su compra \n1. Si \n2. No')
        if (continuarCompra == 1) {
          comprarVehiculo()
        } else {
          if(carritoTodosVehiculos.length > 0) {
            totalCarritoVehiculo()
          } else{
            alert( 'No hay vehículos para comprar')
            initProgram()
          }
          
        }
    }else{
      alert('El vehículo no fue agregado')
    }

  } else {
    alert('El vehiculo no fue Encontrado')
    comprarVehiculo()
  }
}

function totalCarritoVehiculo() {
  let total = carritoTodosVehiculos.reduce((acumulador, vehiculo)=>{
    return acumulador + vehiculo.price
  }, 0)
  alert(`El precio total es $ ${total}`)
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*********************************APLICAR DESCUENTOS A VEHICULOS CHEVROLET**************************************//
function colocarPorcentajeDeDescuentoChevrolet() {
  let porcentajeDescuento = prompt("Ingrese el porcentaje de descuento que se le ha otorgado \n 1. 3% \n 2. 7%  \n 3. 10% \n 4. Volver")
  switch (porcentajeDescuento) {
      case "1":
          porcentaje3()
          break
      case "2":
          porcentaje7()
          break
      case "3":
          porcentaje10()
          break
      case "4":
          initProgram()
          break
      default:
          alert("No ingresaste una opción valida")
          porcentajeDescuento = prompt("Ingrese el porcentaje de descuento que se le ha otorgado \n 1. 3% \n 2. 7%  \n 3. 10% \n 4. Volver")
          break
  }
}

//***DESCUENTO 3%*//

function porcentaje3() {
  carritoChevroletArr = chevroletArr.map((vehiculo)=>{
    return{
      id : vehiculo.id,
      model : vehiculo.model,
      price : vehiculo.price - (vehiculo.price)*0.03,
      type : vehiculo.type
    }  
  })
  verDescuentosChevrolet()   
}

//***DESCUENTO 7%*//

function porcentaje7() {
  carritoChevroletArr = chevroletArr.map((vehiculo)=>{
    return{
      id : vehiculo.id,
      model : vehiculo.model,
      price : vehiculo.price - (vehiculo.price)*0.07,
      type : vehiculo.type
    }  
  })
  verDescuentosChevrolet()   
}



//***DESCUENTO 10%*//

function porcentaje10() {
  carritoChevroletArr = chevroletArr.map((vehiculo)=>{
    return{
      id : vehiculo.id,
      model : vehiculo.model,
      price : vehiculo.price - (vehiculo.price)*0.10,
      type : vehiculo.type
    }  
  })
  verDescuentosChevrolet()   
}


function verDescuentosChevrolet(){
  carritoChevroletArr.forEach((vehiculo)=>{
    alert(`Modelo: ${vehiculo.model} \nPrecio: ${vehiculo.price} \nTipo: ${vehiculo.type} \nDESCUENTOS SOLO PARA VEHÍCULOS CHEVROLET`)
  })
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*********************************FIN*************************************//

initProgram();
