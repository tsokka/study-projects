let clients = [
    {
        firstName: "Александр",
        lastName: "Иванчук",
        date: "11-29-1990",
        phone: "8 (929) 988-90-09",
        amounts: [2546, 2098, 764, 7266]
    },
    {
        firstName: "Анатолий",
        lastName: "Стаценко",
        date: "02-12-1987",
        phone: null,
        amounts: [563, 8287, 889]
    },
    {
        firstName: "Марина",
        lastName: "Петрова",
        date: "07-26-1997",
        phone: "8 (899) 546-09-08",
        amounts: [6525, 837, 1283, 392]
    },
    {
        firstName: "Иван",
        lastName: "Караванов",
        date: "09-12-1999",
        phone: null,
        amounts: [7634, 283, 9823, 3902]
    },
    {
        firstName: "Оксана",
        lastName: "Абрамова",
        date: "01-24-2002",
        phone: "8 (929) 988-90-09",
        amounts: [2546, 2098, 764, 7266]
    }
]

let newClient = {};

newClient.firstName = prompt("Введите имя:");
newClient.lastName = prompt("Введите фамилию:");
newClient.date = prompt("Введите дату рождения в формате мм-дд-гггг (месяц-день-год):");
newClient.phone = prompt("Введите телефон:");
newClient.amounts = [];

// console.log(newClient);

while (confirm("Добавить покупку для клиента " + newClient.firstName + "?")) {
    let amount = prompt("Введите сумму покупки:");
    let amountNumber = Number(amount);
    if (amountNumber > 0) {
        newClient.amounts.push(amountNumber);
    } else {
        alert("Пожалуйста, введите корректную сумму.")
    }
}

console.log(newClient);

clients.push(newClient);

console.log(clients);


function fullName(client) {
    return client.firstName + " " + client.lastName;
}

// console.log(fullName(clients[0]));

function getBirthday(dateString) {
    let birthDate = new Date(dateString);
    let options = {
        day: 'numeric',
        month: 'long'
    };
    let formattedDate = birthDate.toLocaleString('ru-RU', options);
    let currentDate = new Date();
    if (
        birthDate.getMonth() === currentDate.getMonth() &&
        birthDate.getDate() === currentDate.getDate()
    ) {
        formattedDate += " (сегодня)";
    }
    return formattedDate;
}

// console.log(getBirthday(clients[0].date));

function getAllAmount(amounts) {
    let sum = 0;
    for (let amount of amounts) {
        sum += amount;
    }
    return sum;
}

// console.log(getAllAmount(clients[0].amounts));

function getAverageAmount(amounts) {
    let sum = 0;
    for (let amount of amounts) {
        sum += amount;
    }
    return (sum / amounts.length).toFixed(1);
}

// console.log(getAverageAmount(clients[1].amounts));

let showClients = (clients) => {
    clients.forEach((client) => {
        let name = fullName(client);
        let averageAmount = getAverageAmount(client.amounts);
        let birthday = getBirthday(client.date);
        console.log("Клиент " + name + " имеет среднюю сумму чека " + averageAmount + ". День рождения клиента: " + birthday);
    });
};

showClients(clients);

try {
    showClients();
} catch (error) {
    console.log("Вызвана функция без параметров");
    console.log(error.message);
}

let bestClients = [
    {
        firstName: "Екатерина",
        lastName: "Смирнова",
        date: "05-14-1985",
        phone: "8 (912) 345-67-89",
        amounts: [1200, 4500, 780, 2300]
    },
    {
        firstName: "Дмитрий",
        lastName: "Козлов",
        date: "08-22-1995",
        phone: null,
        amounts: [560, 3200, 1500]
    },
    {
        firstName: "Анна",
        lastName: "Морозова",
        date: "12-03-2000",
        phone: "8 (923) 456-78-90",
        amounts: [890, 670, 4300, 1200, 950]
    }
]

setTimeout(() => showClients(bestClients), 3000);

function whoSpentMore(clients) {
    let maxAmount = 0;
    let topClient = null;
    clients.forEach((client) => {
        let totalAmount = getAllAmount(client.amounts);
        if (totalAmount > maxAmount) {
            maxAmount = totalAmount;
            topClient = client;
        }
    });
    if (topClient) {
        console.log("Больше всех потратил(а) " + fullName(topClient) + ". Сумма покупок: " + maxAmount);
    } else {
        console.log("Нет данных о покупках.");
    }
}

whoSpentMore(clients);
whoSpentMore(bestClients);