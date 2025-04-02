/* Definindo classes 
**
** Autor: Fabrício G. M. de Carvalho
*/

class Cachorro{
    raca: string;
    constructor(raca: string){
        this.raca = raca;
    }
    latir(): string{        
        return "au au au";
    }
}

class CachorroGrande extends Cachorro{
    peso:number;
    constructor(raca:string, peso:number){
        super(raca);
        this.peso = peso;
    }
}

export { Cachorro, CachorroGrande}