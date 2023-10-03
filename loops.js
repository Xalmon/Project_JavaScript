let array = [5, 6, 3, 6, 8, 3, 6]

for (let i in array){
    console.log(i);
}
for (let i of array){
    Process.stdout.write(`${i}`)
}

let obj = {
        id: 1,
        available: Boolean,
        count: 3,
        name: "CzMillie",
        author: "Machala"
    }

let objVAL = Object.values(OBJ);
let objKey = Object.keys(OBJ);
console.log()
for(let i of objKey){
    Process.stdout.write(`${i}`)
}
