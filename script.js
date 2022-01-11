class transaction {
    constructor(isProfit, description, amount) {
        this.isProfit = isProfit;
        this.description = description;
        this.amount = amount;
    }
}

let transactions = [
    new transaction(true, 'Peníze od babičky 👵', 549),
    new transaction(false, 'KFC', 233),
    new transaction(true, 'Vyřízení reklamace', 999),
    new transaction(false, 'Nike', 982),
    new transaction(false, 'Albert', 99),
]

window.onload = function () {

    for (let i = 0; i < transactions.length; i++) {
        let li = document.createElement('li')
        li.className = 'list-group-item d-flex justify-content-between'

        let a = document.createElement('span')
        let b = document.createElement('span')
        let c = document.createElement('span')


        if (transactions[i].isProfit == true) a.innerHTML = `<i style="color: #18bc61; font-size: 26px;" class="fas fa-chevron-circle-up"></i>`
        else a.innerHTML = `<i style="color: #de4f4f; font-size: 26px;" class="fas fa-chevron-circle-down"></i>`
        b.innerText = transactions[i].description
        c.innerText = transactions[i].amount + ',-'

        li.appendChild(a)
        li.appendChild(b)
        li.appendChild(c)

        a.style.margin = 0
        b.style.margin = 0
        c.style.margin = 0

        a.style.lineHeight = 0

        document.getElementById('list').appendChild(li)

    }
}