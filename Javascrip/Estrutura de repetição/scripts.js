//for 

for (let i = 4; i < 21; i++){
    console.log(i)
}

for (let e = 50 ; e > 0; e--){
    if (e === 25 ){
        console.log(e)
    }
    
}

//while
let x = 0;

while (x < 20){
    console.log("layse")
    x++;

}

//for...of

let name = "italo"
let names = ['italo', 'layse']

for (let char of name){
    console.log(char)

}
for (let name of names){
    console.log(name)
}

//for in
let person ={
    name: 'layse',
    age: 23,
    peso: 45,
}
for (let property in person){
    console.log(property)
    console.log(person[property])
    //.name ["name"]
}
