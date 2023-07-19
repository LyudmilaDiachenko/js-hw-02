const ADMIN_PASSWORD = 'jqueryismyjam'
let message = prompt("Введіть пароль")

if (message === ADMIN_PASSWORD) {
    alert('Ласкаво просимо!')
}else if (message === null) {
    alert('Операцію скасовано!')
}else if (message !== ADMIN_PASSWORD){
    alert('Доступ заборонено, невірний пароль!')
}

