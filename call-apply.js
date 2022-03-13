
// call and apply

const Kibria = {
    id: 101,
    money: 5000,
    name: 'Rj Kibria',
    treatDey: function(expense, tip, tax){
        this.money = this.money - expense - tip - tax;
        console.log(this);
        return this.money;
    }
}

const heroB = {
    id: 102,
    money: 6000,
    name: 'Hero Balam'
}
// Kibria.treatDey(100);
// using bind 
// const heroTreatDey = Kibria.treatDey.bind(heroB);
// heroTreatDey(500);

// using call

Kibria.treatDey.call(heroB, 500, 100, 50);

// using apply (change is only use array inside apply)
Kibria.treatDey.apply(heroB, [500, 400, 200]);