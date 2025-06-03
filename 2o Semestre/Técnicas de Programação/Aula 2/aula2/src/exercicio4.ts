    class Carro {
        marca: string = "";
        modelo: string = "";
        setMarca(marca: string): void {
        this.marca = marca;
        }
        setModelo(modelo: string): void {
        this.modelo = modelo;
        }
        print(): void {
        console.log(`${this.marca} ${this.modelo}`);
        }
        }

    const z1 = new Carro();
    z1.setMarca("VW")
    z1.setModelo("GOl")
    const z2 = new Carro();
    z2.setMarca("Fiat")
    z2.setModelo("Uno")
    z1.print()
    z2.print()