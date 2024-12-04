class Lavanderia {
    constructor() {
      this.servicios = {
        lavado: 5000,
        secado: 3000,
        planchado: 4000
      };
    }
  
    mostrarServicios() {
      console.log("Servicios disponibles:");
      for (const [servicio, precio] of Object.entries(this.servicios)) {
        console.log(`${servicio}: $${precio}`);
      }
    }
  
    calcularCosto(serviciosSeleccionados) {
      let total = 0;
      serviciosSeleccionados.forEach(servicio => {
        if (this.servicios[servicio]) {
          total += this.servicios[servicio];
        } else {
          console.log(`El servicio ${servicio} no está disponible.`);
        }
      });
      return total;
    }
  }
  
  const lavanderia = new Lavanderia();
  lavanderia.mostrarServicios();
  const costo = lavanderia.calcularCosto(["lavado", "planchado"]);
  console.log(`El costo total es: $${costo}`);
  
