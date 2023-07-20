const ADMIN_PASSWORD = 'jqueryismyjam'
const ask = prompt("Введіть пароль")
let message

if (ask === null) {
    message = 'Операцію скасовано!'
} else {
    if (ask === ADMIN_PASSWORD) {
        message = 'Ласкаво просимо!'
    } else {
        message = 'Доступ заборонено, невірний пароль!'
    }
}
alert(message)

