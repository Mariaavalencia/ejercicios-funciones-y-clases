class Carrera {
    constructor(nombre, pilotos) {
      this.nombre = nombre;
      this.pilotos = pilotos; 
    }
  
    mostrarPilotos() {
      console.log(`Carrera: ${this.nombre}`);
      this.pilotos.forEach((piloto, index) => {
        console.log(`${index + 1}. Piloto: ${piloto.nombre} (Cuota: ${piloto.cuota})`);
      });
    }
  }
  
  class Apuesta {
    constructor(usuario, carrera, tipo, seleccion, monto) {
      this.usuario = usuario;
      this.carrera = carrera;
      this.tipo = tipo;
      this.seleccion = seleccion;
      this.monto = monto;
    }
  
    calcularGanancias(resultado) {
      let ganancia = 0;
  
      if (this.tipo === "ganador" && this.seleccion === resultado.ganador) {
        ganancia = this.monto * this.carrera.pilotos.find(p => p.nombre === resultado.ganador).cuota;
      } else if (
        this.tipo === "posiciones" &&
        this.seleccion[0] === resultado.posiciones[0] &&
        this.seleccion[1] === resultado.posiciones[1]
      ) {
        ganancia = this.monto * 3; 
      }
  
      return ganancia;
    }
  }
  
  class Usuario {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    esMayorDeEdad() {
      return this.edad >= 18;
    }
  }
  
  function validarMonto(monto) {
    return monto >= 10000 && monto <= 1000000;
  }
  

  
  const carrera1 = new Carrera("Carrera 1", [
    { nombre: "Piloto A", cuota: 1.5 },
    { nombre: "Piloto B", cuota: 2.3 },
    { nombre: "Piloto C", cuota: 1.8 }
  ]);
  
  const usuario = new Usuario("Juan Pérez", 20);
  
  if (usuario.esMayorDeEdad()) {
    carrera1.mostrarPilotos();
  
    const montoApuesta = 50000;
  
    if (validarMonto(montoApuesta)) {
      const apuesta = new Apuesta(usuario, carrera1, "ganador", "Piloto B", montoApuesta);
  
      const resultadoCarrera = {
        ganador: "Piloto B",
        posiciones: ["Piloto B", "Piloto A"]
      };
  
      const ganancia = apuesta.calcularGanancias(resultadoCarrera);
      if (ganancia > 0) {
        console.log(`¡Felicidades! Has ganado $${ganancia.toFixed(2)}.`);
      } else {
        console.log("Lo siento, no has ganado esta vez.");
      }
    } else {
      console.log("El monto de la apuesta debe estar entre $10.000 y $1.000.000.");
    }
  } else {
    console.log("Debes ser mayor de edad para apostar.");
  }
  