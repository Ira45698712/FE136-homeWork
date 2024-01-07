class User{
    constructor(data){
        // this.id = data.id;
        // this.name = data.name;
        // this.email = data.email;
        // this.address = data.address;
        // this.phone = data.phone;
        this.data = data
    }
    get info(){
        return this.name + ' (' + this.email + ' - ' + this.address + ' - ' + this.phone + ')' 
    }
    edit(data) {
        Object.assign(this.data, data);
      }
}

class Contacts {
    constructor(){
        this.users = [];
        this.id = 0;
    }
    add(data){
        let user = new User(data);
        user.edit({id: this.id++})
        this.users.push(user);
    }
    remove(id){
        this.users = this.users.filter((users) => user.data.id !== id);
    }
    edit(id, data) {
        let user = this.users.find((user) => user.data.id === id);
        user.edit(data);
      }
      get info(){
        return this.users;
    }
    get store(){
        let data = localStorage.getItem('users');
        data = JSON.parse(data);
        return data;
    }
    set store(data){
        let string = JSON.stringify(data);
        localStorage.setItem('users', string);
    }
    get cookie() {
        let name = 'users'
        let matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? true : false;
      }
      set cookie(time) {

        let options = {
          path: '/',
          secure: true, 
          'max-age': time
        };
      
        if (options.expires instanceof Date) {
          options.expires = options.expires.toUTCString();
        }
      
        let updatedCookie = encodeURIComponent('users') + "=" + encodeURIComponent('');
      
        for (let optionKey in options) {
          updatedCookie += "; " + optionKey;
          let optionValue = options[optionKey];
          if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
          }
        }
      
        document.cookie = updatedCookie;
      }
}

class ContactApp extends Contacts{
    constructor(selector){
        super();
        this.root = document.querySelector(selector);
        this.contactsContainer = document.createElement('div');
        this.init();
    }
    init(){
        let form = document.createElement('form');
        let id = document.createElement('input');
        id.setAttribute("type", "number");
        let name = document.createElement("textarea");
        let address = document.createElement("textarea");
        let email = document.createElement('input');
        email.setAttribute("type", "email");
        let phone = document.createElement('input');
        phone.setAttribute("type", "phone");
        let send = document.createElement("button");
        send.setAttribute("type", "submit");
        send.innerText = 'Add';
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const data = {
              id: id.value,
              name: name.value,
              email: email.value,
              address: address.value,
              phone: phone.value,
              
            };
            this.add(data);
            id.value = "";
            name.value = "";
            email.value = "";
            address.value = "";
            phone.value = "";
            this.store = this.users;
            this.cookie = 30;
            this.render();
            //NoteController.prototype.add(data) - в функциях контрол
      
            //super.add(); в классах обращение к методам родителя
          });
          form.append(id, name, email, address, phone, send);
          this.root.append(form, this.contactsContainer);

          if(!this.cookie){
            localStorage.removeItem('users');
          }

          if(this.store){
            this.store.forEach(user => this.add(user.data));
            this.render();
          }
         
    }
    render(){
        this.contactsContainer.innerHTML = '';
        this.users.forEach(user => {
            let flag = false;
            const item = document.createElement('div');
            item.classList.add('user__item');
            const id = document.createElement('p');
            id.classList.add('user__id');
            id.innerText = user.data.id;
            const name = document.createElement('p');
            name.classList.add('user__name');
            name.innerText = user.data.name;
            const email = document.createElement('p');
            email.classList.add('user__eamil');
            email.innerText = user.data.email;
            const address = document.createElement('p');
            address.classList.add('user__address');
            address.innerText = user.data.address;
            const phone = document.createElement('p');
            phone.classList.add('user__phone');
            phone.innerText = user.data.phone;
            const edit = document.createElement('button');
            edit.classList.add('usere__edit');
            edit.innerText = 'Edit';
    
            const remove = document.createElement('button');
            remove.classList.add('user__remove');
            remove.innerText = 'Remove';
    
            remove.addEventListener('click', () => {
                this.remove(user.data.id);
                this.store = this.users;
                this.render();
            });


            item.append(id, name, email, address, phone);
            this.contactsContainer.append(item);
    
        }
    )}
}

// let fill = new User({id: 1, name: 'Fill', email: 'fill@gmail.com', address: 'repina-1/45', phone: '+375222222333'});
// console.log(fill);
// console.log(fill.info);
const users = new Contacts();

users.add({id: '1', name: 'Fill', email: 'fill@gmail.com', address: 'repina-1/45', phone: '+375222222333'});
users.add({id: '2', name: 'Bob', email: 'fill@gmail.com', address: 'repina-1/45', phone: '+375222222333'});
users.add({id: '3', name: 'Natali', email: 'fill@gmail.com', address: 'repina-1/45', phone: '+375222222333'});
users.add({id: '4', name: 'Katya', email: 'fill@gmail.com', address: 'repina-1/45', phone: '+375222222333'});
console.log(users);
new ContactApp('#root');