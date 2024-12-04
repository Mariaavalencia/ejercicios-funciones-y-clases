class VentaBoletas {
    constructor() {
      this.localidades = {
        general: { precio: 50000, capacidad: 100 },
        preferencial: { precio: 150000, capacidad: 50 },
        vip: { precio: 300000, capacidad: 20 }
      };
      this.cargoServicio = 5000;
      this.impuesto = 0.1;
      this.metodosPago = ["efectivo", "tarjeta"];
    }
  
    validarCantidadBoletas(cantidad) {
      return cantidad >= 1 && cantidad <= 5;
    }
  
    validarMetodoPago(metodo) {
      return this.metodosPago.includes(metodo.toLowerCase());
    }
  
    validarDisponibilidad(localidad, cantidad) {
      return this.localidades[localidad.toLowerCase()].capacidad >= cantidad;
    }
  
    calcularTotal(localidad, cantidad) {
      const localidadInfo = this.localidades[localidad.toLowerCase()];
      if (!localidadInfo) {
        console.log("Localidad inválida.");
        return 0;
      }
  
      let subtotal = localidadInfo.precio * cantidad;
      let impuestos = subtotal * this.impuesto;
      let cargos = this.cargoServicio * cantidad;
      let total = subtotal + impuestos + cargos;
  
      console.log("Desglose de cobros:");
      console.log(`Subtotal: $${subtotal}`);
      console.log(`Impuestos (10%): $${impuestos.toFixed(2)}`);
      console.log(`Cargos por servicio: $${cargos}`);
      console.log(`Total a pagar: $${total.toFixed(2)}`);
    }
  
    procesarCompra(localidad, cantidad, metodoPago) {
      if (!this.validarMetodoPago(metodoPago)) {
        console.log("Método de pago inválido. Solo se acepta efectivo o tarjeta.");
        return;
      }
  
      if (!this.validarCantidadBoletas(cantidad)) {
        console.log("Cantidad inválida. Debe comprar entre 1 y 5 boletas.");
        return;
      }
  
      if (!this.validarDisponibilidad(localidad, cantidad)) {
        console.log("No hay suficientes boletas disponibles en esta localidad.");
        return;
      }
  
      console.log(`Compra de ${cantidad} boletas en localidad ${localidad.toUpperCase()}:`);
      this.calcularTotal(localidad, cantidad);
  

      this.localidades[localidad.toLowerCase()].capacidad -= cantidad;
  
      console.log(`Método de pago: ${metodoPago}`);
      console.log("¡Gracias por su compra!");
    }
  }
  

  const venta = new VentaBoletas();
  

  venta.procesarCompra("general", 3, "tarjeta");
  

  venta.procesarCompra("preferencial", 6, "efectivo");
  

  venta.procesarCompra("vip", 2, "cheque");
  

  venta.procesarCompra("vip", 21, "tarjeta");
  