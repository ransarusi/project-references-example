import { showMessage } from "../../../shared";
import { Animal } from "../../../shared/src/Models/Animal";

console.log(showMessage());

const animal = new Animal("Dog", 4);
console.log(animal.name);