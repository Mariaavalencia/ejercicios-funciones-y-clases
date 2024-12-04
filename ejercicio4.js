class FabricaEscobas {
    constructor() {
      this.preciosBase = {
        "escoba dura": {
          sintetico: 8000,
          natural: 10000
        },
        cepillo: {
          sintetico: 12000,
          natural: 15000
        }
      };
      this.adicionales = {
        "mango largo": 2000,
        "gancho en punta": 500
      };
    }
  
    validarCantidad(cantidad) {
      return cantidad >= 3 && cantidad <= 30;
    }
  
    validarOpcionesAdicionales(opcion1, opcion2) {
      return !(opcion1 && opcion2); 
    }
  
    calcularPrecio(modelo, material, adicional, cantidad) {
      if (!this.preciosBase[modelo] || !this.preciosBase[modelo][material]) {
        console.log("Modelo o material inválido.");
        return;
      }
  
      if (!this.validarCantidad(cantidad)) {
        console.log("Cantidad inválida. Debe ser entre 3 y 30.");
        return;
      }
  
      if (adicional.length > 1 && !this.validarOpcionesAdicionales(...adicional)) {
        console.log("No se pueden combinar mango largo y gancho en punta.");
        return;
      }
  
      let precioBase = this.preciosBase[modelo][material];
      let precioAdicional = adicional.reduce((total, opcion) => total + this.adicionales[opcion], 0);
      let total = (precioBase + precioAdicional) * cantidad;
  
      console.log(`Modelo: ${modelo}, Material: ${material}`);
      console.log(`Adicionales: ${adicional.join(", ") || "Ninguno"}`);
      console.log(`Cantidad: ${cantidad}`);
      console.log(`Total a pagar: $${total}`);
    }
  }
  
  const fabrica = new FabricaEscobas();
  fabrica.calcularPrecio("escoba dura", "sintetico", ["mango largo"], 5); 
  fabrica.calcularPrecio("cepillo", "natural", ["gancho en punta"], 10);   
  fabrica.calcularPrecio("escoba dura", "natural", ["mango largo", "gancho en punta"], 4); 
  fabrica.calcularPrecio("cepillo", "natural", [], 2); 
  