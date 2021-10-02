let userComp = prompt('Samsung,HP,Acer')
let userProc = prompt('Core i4, Core i5, Core i6')
let userMemory1 = prompt('AccessMemory8,AccessMemory12,AccessMemory16')
let userMemory2 = prompt('Memory800,Memory1000,Memory650')
let userScreen = prompt('FullHD,Medium,Mini')
let userColor = prompt('Black,Silver,Platinum')

let Samsung = {
    comp: 'Samsung',
    proc: 'Core i5',
    memory1: 'AccessMemory8',
    memory2: 'Memory800',
    screen: 'FullHD',
    color: 'Black'
}

if(userComp === Samsung.comp || userProc === Samsung.proc || userMemory1 === Samsung.memory1 || userMemory2 === Samsung.memory2 || userScreen === Samsung.screen || userColor === Samsung.color) {
    console.log(Samsung);
} else {
    console.log(`we don't have this kind of thing`);
}