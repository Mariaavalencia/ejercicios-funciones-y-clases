class TiendaZapatos {
    constructor() {
      this.modelos = {
        clasicos: 500000,
        running: 800000,
        basketball: 1000000
      };
      this.tallasDisponibles = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44];
      this.descuento = 0.1; 
    }
  
    validarTalla(talla) {
      return this.tallasDisponibles.includes(talla);
    }
  
    validarCantidad(cantidad) {
      return cantidad >= 1 && cantidad <= 5;
    }
  
    calcularTotal(modelo, talla, cantidad) {
      if (!this.modelos[modelo]) {
        console.log("Modelo no disponible.");
        return;
      }
      if (!this.validarTalla(talla)) {
        console.log("Talla fuera del rango permitido.");
        return;
      }
      if (!this.validarCantidad(cantidad)) {
        console.log("Cantidad inválida. Debe ser entre 1 y 5 pares.");
        return;
      }
  
      let precioBase = this.modelos[modelo];
      let total = precioBase * cantidad;
  
      if (cantidad >= 3) {
        total -= total * this.descuento; 
      }
  
      console.log(`Modelo seleccionado: ${modelo}`);
      console.log(`Talla seleccionada: ${talla}`);
      console.log(`Cantidad a comprar: ${cantidad}`);
      console.log(`Total a pagar: $${total.toFixed(2)}`);
    }
  }
  
 
  const tienda = new TiendaZapatos();
  tienda.calcularTotal("clasicos", 40, 3);    
  tienda.calcularTotal("running", 36, 1);     
  tienda.calcularTotal("basketball", 44, 6);  
  tienda.calcularTotal("clasicos", 45, 2);    
  