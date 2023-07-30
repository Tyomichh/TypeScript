const isFatching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 4e2

const massage: string = "hello typescript!"

const numberArr: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArr2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const words: string[] = ["hello", " Ts", " !"]

// Tuple
const contact: [number, string] = [973424163, "Dimoon"]

// Any
let variable:any = 23
variable = "awqeqwe"
variable = [12, 32, 2, 1, 32, 3, 52, 4, 3, 45, 3]

// function
function saySomething(name: string):void {
    console.log(name)
}

saySomething('hhahahahahaha')

function throwError(massage: string):never {
    throw new Error(massage)
}

function infinite():never {
    while (true) {    
    }
}

// Type
type login = string

const wrd: login = "lol"
//const wrd2: login = 32 //can't

type ID = string | number

const id1: ID = 2
const id2: ID = "hahahahaha"
//const id3: ID = true //can't

type someType = string | null | undefined

