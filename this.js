
// In JavaScript, the this keyword refers to an object.

// Which object depends on how this is being invoked (used or called).

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
};