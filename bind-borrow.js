
// bind - borrow method from another object

const Kibria = {
    id: 101,
    money: 5000,
    name: 'Rj Kibria',
    treatDey: function(expense){
        this.money = this.money - expense;
        console.log(this);
        return this.money;
    }
}

const heroB = {
    id: 102,
    money: 6000,
    name: 'Hero Balam'
}
Kibria.treatDey(100);

// using bind 
const heroTreatDey = Kibria.treatDey.bind(heroB);
heroTreatDey(500);