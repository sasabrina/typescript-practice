console.log('hello world from typescript')

//TYPES
//se declara el tipo de valor que va a almacenar la variable, y ésta la va a interpretar de manera estricta.
var myString: string = 'oli';
myString = 22 + ""; //las comillas "transforman" el number a string (hashtag spanglish)

var myNumber: number = 33;
var myBool: boolean = true;
//"any" indica que la variable puede almacenar todo tipo de datos
var myVar: any = 'oli de nuevo';
myVar = false;

// ARRAYS

//de la misma manera que con las variables, se asigna qué tipo de dato va a contener el arreglo, colocando tipo + corchetes.
var stringArray: string[] = ["uno", "dos", "tres"];
// stringArray = [true, 2, 3]; esto da error pues la variable es de tipo string
var numberArray: number[] = [4, 5, 6];
var anyArray: any[] = [11, "oli", true, [], {}]

// TUPLE
//indica qué tipo de dato va a ser cada ítem del arreglo
var strNumbTuple: [string, number];
strNumbTuple = ["oli", 3];
// strNumbTuple = [3, "oli"] esto da error porque los tipos de datos no coinciden con la estructura del arreglo
// strNumbTuple = [oli, 3, "", 5] esto no da error porque solo se leen los dos primeros ítems, y los otros dos coinciden con la estructura del arreglo

// VOID, UNDEFINED, NULL
let myVoid: void = undefined
let myNull: null = null //o undefined
let myUndefined: undefined = undefined;

// FUNCIONES
//se indica qué tipo datos serán los parámetros y qué tipo de dato retornará la función
const getSum = (num1: number, num2: number): number => num1 + num2;

const mySum = (num1: number | string, num2: number | string): number => {
    if(typeof(num1) === 'string'){
        num1 = parseInt(num1)
    }
    if(typeof(num2) === 'string'){
        num2 = parseInt(num2)
    }

    return num1 + num2
}

//el signo de interrogación indica que el parametro es opcional, por lo tanto no da error si al invocar la función se le pasan todos los parámetros
const getName = (firstName: string, lastName?: string): string => {
    if(lastName === undefined){
        return firstName
    }
    return `${firstName} ${lastName}`
}

// console.log(getName("Sabrina", "Alvarez"))
// console.log(getName("Sabrina"))


// const voidFnc = (): void => "algo"; esto da error porque al declarar la función como void, estamos indicando que ésta no va a retornar nada, y la arrow function es un return implícito

// INTERFACES
// se indica que el parámetro que recibe la función es un objeto y qué tipo de dato es cada una de sus propiedades

const showTodo = (todo:{title: string, text: string}) => console.log(`${todo.title} ${todo.text}`);
showTodo({
    title: "Comprar", 
    text: "dolares, ahre."
})

// pero la forma correcta de hacerlo es la siguiente:
//convensionalmente se le agrega la letra I al principio del nombre
interface Itodo {
    title: string;
    text: string;
}

// y se indica que el tipo de dato del parámetro será una interface
const anotherTodo = (todo: Itodo) => console.log(`${todo.title} ${todo.text}`);

// creo una variable con la estructura de la interface, indicando que el tipo de valor será la interface (Itodo) y luego la paso como parámetro en la función anotherTodo
let myTodo: Itodo = {title: "Turno:", text: "sacar turno con el odontólogo"}
anotherTodo(myTodo)

// CLASES
// además de indicar qué tipo de dato tendrá una propiedad, también puedo declarar qué tipo de ALCANCE puede tener con los "modificadores" (public (default), private y protected)
class User {
    private name: string;
    public email: string;
    protected age: number;

    constructor(name: string, email: string, age: number){
        this.name = name;
        this.email = email;
        this.age = age
    }

    register(){
        console.log(`${this.name} is registered.`)
    }

    showAge(){
        return this.age;
    }

    payInvoice(){
        console.log(`${this.name} paid invoice`)
    }
}

let sabrina = new User("Sabrina", "jacky@sieras.com", 32)

console.log(sabrina.email)
console.log(sabrina.register())

class Member extends User {
    id: number;

    constructor(id: number, name: string, email: string, age: number){
        super(name, email, age)
        this.id = id
    }
}
