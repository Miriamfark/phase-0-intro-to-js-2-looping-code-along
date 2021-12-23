const names = []

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        names.push(`Thank you ${names[i]} for your beautiful ${event} gift!`)
    }
return names
}

let countDown = 15
while (countDown > 0) {
    console.log(countDown--)
}