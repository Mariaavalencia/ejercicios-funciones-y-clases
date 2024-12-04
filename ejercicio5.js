class Biblioteca {
    constructor() {
      this.tarifas = {
        bestsellers: 500,
        literatura: 100,
        academicos: 0
      };
    }
  
    validarCantidadLibros(cantidad) {
      return cantidad >= 1 && cantidad <= 5;
    }
  
    validarDiasPrestamo(dias) {
      return dias >= 1 && dias <= 30;
    }
  
    calcularCosto(categoria, dias) {
      let tarifaDiaria = this.tarifas[categoria.toLowerCase()] || null;
  
      if (tarifaDiaria === null) {
        console.log("Categoría inválida.");
        return 0;
      }
  
      let costo = tarifaDiaria * dias;
  
      
      if (dias > 10 && tarifaDiaria > 0) {
        costo *= 0.9;
      }
  
      return costo;
    }
  
    procesarPrestamo(libros, dias) {
      if (!this.validarDiasPrestamo(dias)) {
        console.log("Número de días inválido. Debe estar entre 1 y 30 días.");
        return;
      }
  
      if (!this.validarCantidadLibros(libros.length)) {
        console.log("Cantidad de libros inválida. Debe solicitar entre 1 y 5 libros.");
        return;
      }
  
      let costoTotal = 0;
      libros.forEach(libro => {
        const { titulo, categoria } = libro;
        let costo = this.calcularCosto(categoria, dias);
        console.log(`Libro: "${titulo}", Categoría: ${categoria}, Costo: $${costo.toFixed(2)}`);
        costoTotal += costo;
      });
  
      console.log(`Costo total del préstamo: $${costoTotal.toFixed(2)}`);
    }
  }
  
    
  const biblioteca = new Biblioteca();
  
  
  biblioteca.procesarPrestamo(
    [
      { titulo: "El arte de la guerra", categoria: "literatura" },
      { titulo: "Cálculo avanzado", categoria: "academicos" },
      { titulo: "Sapiens", categoria: "bestsellers" }
    ],
    12
  );
  
  
  biblioteca.procesarPrestamo(
    [
      { titulo: "Libro A", categoria: "literatura" },
      { titulo: "Libro B", categoria: "literatura" },
      { titulo: "Libro C", categoria: "literatura" },
      { titulo: "Libro D", categoria: "literatura" },
      { titulo: "Libro E", categoria: "literatura" },
      { titulo: "Libro F", categoria: "literatura" }
    ],
    5
  );
  
  
  biblioteca.procesarPrestamo(
    [{ titulo: "1984", categoria: "literatura" }],
    40
  );
  