export class Client {
    // atributos estáticos
    static clients = []

    // atributos - não precisa especificar tipo
    _name 
    _age
    _email
    _password
    //#clients = [] #atributo = privado, porém não funciona em todas as versões. Por convenção, atributos privados são escritos _atributo (apenas indicação)

    // método construtor
    constructor (name, password) {
        this._name = name
        this._password = password
        Client.clients.push({name: this._name, password: this._password, age: this._age, email: this._email})
    }

    // métodos acessores
    get name() {
        return this._name
    }

    get age() {
        return this._age
    }

    get email() {
        return this._email
    }

    get password() {
        return this._password
    }

    get clients() {
        Client.clients.forEach(function(object, i) {
            return `Cliente: ${Client.clients[i].name}\nIdade: ${Client.clients[i].age}\nE-mail: ${Client.clients[i].email}`
        })
    }

    set name(name) {
        this._name = name
    }

    set age(age) {
        this._age = age
    }

    set email(email) {
        this._email = email
    }

    set password(password) {
        this._password = password
    }
}