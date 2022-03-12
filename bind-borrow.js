
// bind - borrow method from another object

const Kibria = {
    id: 101,
    money: 5000,
    name: 'Rj Kibria',
    treatDey: function(expense){
        this.money = this.money - expense;
        return this.money;
    }
}