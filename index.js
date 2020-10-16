/*У нас є колекція данних. Наше завданя, перевірити чи є в юзера поля, де зберігаються масиви та дати можливість юзеру більш детально описати їх.

1. Вивести назви полів де є масиви. 
2. Зробити запит в юзера по кожному з них чи бажає він їх змінювати? 
3. Якщо так, то дати можливість юзеру записати більш детально по кожному пункту з масиву(перед цим також треба вивести які ключі в масиві є і чи хоче він їх змінювати послідовно). 
4 Якщо юзер хоче додати більше інформації - ми ці дані маємо зберегти в обєкті наступного вигляду:
{
    name: "Nature/change? ", 
    actual: true/false,  
    types: ["qwe", "qwe"], 
    closestTime: tomorrow/ 02.10.2020
}. 
Вивести фінальну колекцію після всіх змін.
*/
let users = [
    {
        name: "Yulian",
        age: 28,
        hobby: ["Nature", "Films", "Games", "traveling"],
        job: ["Softserve", "ITClusterAcademy"]
    },
    {
        name: "Olexander",
        age: 20,
        hobby: ["fishing", "hiking", "football"],
        job: null,
        dreams: []
    },
];

// 1. Вивести назви полів де є масиви. 
console.log('***task 1***');
for (let item of users) {
    for (let key in item) {
        if (Array.isArray(item[key])) 
        // console.log('yes', item[key], key);
        console.log(key, 'of' ,item.name );
    }
}
// 2. Зробити запит в юзера по кожному з них чи бажає він їх змінювати?
console.log('***task 2***');
// let changeArr = [];
// let notChangeArr = [];
for (let item of users) {
    for (let key in item) {
        if (Array.isArray(item[key])){
            let question = confirm(` Do you want to change ${key} of ${item.name}? `);
            if (question) {
                
            } else {
                
            }

            
        } else {};
        
    }
}