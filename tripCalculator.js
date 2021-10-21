// Person array with name and amount spent 
const amount = [
    {
        name: 'John',
        amountSpent: 5000,
    },
    {
        name: 'Sam',
        amountSpent: 3000,
    },
    {
        name: 'Louis',
        amountSpent: 7000,
    },
    {
        name: 'Gill',
        amountSpent: 5500,
    },
    {
        name: 'Maxwell',
        amountSpent: 200,
    },
];



// Add their sum of amountSpent
const sumOfAmountSpent = amount.reduce((sum, currentValue) => {
    return sum + currentValue.amountSpent;
}, 0);

console.log(" total amount spent by all during trip is", sumOfAmountSpent);

let amountSpentEachPerson = sumOfAmountSpent / amount.length;
console.log(" amount divided to each ", amountSpentEachPerson);


for (let i = 0; i < amount.length; i++) {
    const element = amount[i];
    if (element.amountSpent) {
        if (element.amountSpent >= amountSpentEachPerson) {
            let x = (element.amountSpent - amountSpentEachPerson)
            //    console.log(x);
            let w = `${element.name} is getting ${x} from others`;
            console.log(w);
            //    console.log(x,w);

        }
        else {
            (amountSpentEachPerson >= element.amountSpent)
            let Z = (amountSpentEachPerson - element.amountSpent)
            //   console.log(Z)
            let C = `${element.name} has to give ${Z} to others`
            console.log(C);

        }
    }

}