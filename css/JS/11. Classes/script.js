class User {
    constructor(first = 'förnamn', last = 'efternamn') {
        this.firstName = first;
        this.lastName = last;
        this.loggedIn = false;
    }
    login() {
        this.loggedIn = true;
        console.log(`${this.firstName} has logged in`);
        return this;
    }
    logout() {
        this.loggedIn = false;
        console.log(`${this.firstName} has logged out`);
        return this;
    }
    func() {
        console.log(`${this.firstName} gjorde precis något coolt`);
        return this;
    }
}

let userOne = new User('Frida', 'Johansson');
let userTwo = new User();
console.log(userOne);
console.log(userTwo);


//bra att lägga in


userOne.login();
userTwo.login();

userOne.login().func(); // för att den ska fungera med en användare måste vi lägga in return this


//class inheritance
//Funktion som User inte har rättigheter till.
class Admin extends User{
    removeUser(user){
        users = users.filter(u =>{
            return u.firstName != user.firstName;
        })
    }
}

let admin = new Admin('Admin', 'Johansson');
let users=[userOne, userTwo, admin];

admin.login();

console.log(users);
admin.removeUser(userTwo);
console.log(users);

// userOne.removeUser(admin); // funkar inte

//prototype

//Det här motsvarar construktor
function PrototypeUser(firstName, lastName){
    this.firstName= firstName;
    this.lastName=lastName;
    this.loggedIn=false;
    this.login=function(){
        this.loggedIn=true;
        console.log(`${this.firstName} has logged out`);
    }
}

PrototypeUser.prototype.logout= function(){
    this.loggedIn = false;
    console.log(`${this.firstName} has logged out`);
}

PrototypeUser.prototype.func= function() {
    console.log(`${this.firstName} gjorde precis något coolt`);
}

let userThree = new PrototypeUser('Arvid', 'Johansson');
userThree.login();

console.log(userThree);

userThree.logout();