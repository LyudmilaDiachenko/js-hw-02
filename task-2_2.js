let credits = 23580
let price = 3000
let howMany = prompt("«Скільки телевізорів бажаєте придбати?»") 
let totalPrice

if (howMany === null) {
    console.log("«Операцію скасовано!»")
} else if (howMany < 1) {
    console.log("«Невірно введені дані!»")
} else {
    totalPrice = howMany * price
    if (totalPrice > credits) {
        console.log("«Недостатньо коштів на рахунку!»")
    } else {
        credits = credits - totalPrice
        console.log(`«Ви купили ${howMany} телевізорів, на рахунку залишилось ${credits} кредитів.»`)
    }
}