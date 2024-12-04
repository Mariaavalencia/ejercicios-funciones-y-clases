class ServicioDomicilio {
    constructor() {
      this.restaurantes = {
        hamburguesas: {
          "Hamburguesa simple": 25000
        },
        pizzeria: {
          "Pizza familiar": 85000
        },
        "comida china": {
          "Fideos con pollo": 18000
        }
      };
      this.costoEnvio = 5000;
      this.metodosPago = ["efectivo", "tarjeta"];
    }
  
    validarRestaurante(restaurante) {
      return this.restaurantes.hasOwnProperty(restaurante.toLowerCase());
    }
  
    validarMetodoPago(metodo) {
      return this.metodosPago.includes(metodo.toLowerCase());
    }
  
    calcularTotal(restaurante, pedido, metodoPago) {
      if (!this.validarRestaurante(restaurante)) {
        console.log("Restaurante no disponible.");
        return;
      }
  
      if (!this.validarMetodoPago(metodoPago)) {
        console.log("Método de pago inválido. Solo se acepta efectivo o tarjeta.");
        return;
      }
  
      let subtotal = 0;
      pedido.forEach(item => {
        const { menu, cantidad } = item;
        const precioUnitario = this.restaurantes[restaurante.toLowerCase()][menu];
        if (precioUnitario) {
          subtotal += precioUnitario * cantidad;
        } else {
          console.log(`El menú "${menu}" no está disponible en ${restaurante}.`);
        }
      });
  
      if (subtotal < 23000) {
        console.log("El pedido debe ser de al menos $23000.");
        return;
      }
  
      let total = subtotal + this.costoEnvio;
  
      console.log("Resumen del pedido:");
      pedido.forEach(item => {
        console.log(`${item.cantidad} x ${item.menu}: $${(item.cantidad * this.restaurantes[restaurante.toLowerCase()][item.menu]).toFixed(2)}`);
      });
      console.log(`Costo de envío: $${this.costoEnvio}`);
      console.log(`Total a pagar: $${total.toFixed(2)}`);
      console.log("Tiempo estimado de entrega: 45 minutos a 1 hora.");
    }
  }
  
  
  const servicio = new ServicioDomicilio();
  
  
  servicio.calcularTotal(
    "hamburguesas",
    [{ menu: "Hamburguesa simple", cantidad: 2 }],
    "tarjeta"
  );
  
  
  servicio.calcularTotal(
    "comida china",
    [{ menu: "Fideos con pollo", cantidad: 1 }],
    "efectivo"
  );
  
  
  servicio.calcularTotal(
    "sushi",
    [{ menu: "Rollos de sushi", cantidad: 3 }],
    "efectivo"
  );
  
  
  servicio.calcularTotal(
    "pizzeria",
    [{ menu: "Pizza familiar", cantidad: 1 }],
    "cheque"
  );
  