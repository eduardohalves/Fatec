/* Instanciando objetos de uma classe
**
** Autor: Fabrício G. M. de Carvalho
*/

import {Cachorro, CachorroGrande} from "./classes"

var cachorro_1 = new Cachorro("Lhasa");
var cachorro_2 = new CachorroGrande("boxer",50);
console.log(cachorro_1.raca);
console.log(cachorro_1.latir());
console.log(cachorro_2.raca);
console.log(cachorro_2.peso);
console.log(cachorro_2.latir());
