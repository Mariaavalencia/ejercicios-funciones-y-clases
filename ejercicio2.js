class Matricula {
    constructor(valorBase) {
      this.valorBase = valorBase;
      this.interesMensual = 0.02;
    }
  
    calcularPago(opcionPago) {
      let total = 0;
      switch (opcionPago) {
        case "pago_completo":
          total = this.valorBase * 0.95; 
          console.log(`Pago completo con 5% de descuento: $${total.toFixed(2)}`);
          break;
        case "2_cuotas":
          total = this.calcularCuotas(2);
          break;
        case "3_cuotas":
          total = this.calcularCuotas(3);
          break;
        default:
          console.log("Opción de pago inválida.");
          return;
      }
      console.log(`El valor total a pagar es: $${total.toFixed(2)}`);
    }
  
    calcularCuotas(numeroCuotas) {
      let saldo = this.valorBase;
      let total = 0;
      for (let i = 1; i <= numeroCuotas; i++) {
        let cuota = saldo / numeroCuotas;
        cuota += cuota * this.interesMensual;
        total += cuota;
        saldo -= cuota;
      }
      return total;
    }
  }

  const matricula = new Matricula(7000000);
  matricula.calcularPago("pago_completo"); 
  matricula.calcularPago("2_cuotas");      
  matricula.calcularPago("3_cuotas");      
  matricula.calcularPago("4_cuotas");      
  