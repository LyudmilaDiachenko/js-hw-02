let credits = 23580
let price = 3000
let howMany = prompt("«Скільки телевізорів бажаєте придбати?»")
let totalPrice = howMany * price
let balance = credits - totalPrice

if (howMany === null){
    console.log("«Операцію скасовано!»")
}else if (totalPrice > credits) {
    console.log("«Недостатньо коштів на рахунку!»")
}else{
    console.log(`«Ви купили ${howMany} телевізорів, на рахунку залишилось ${balance} кредитів.»`)
}