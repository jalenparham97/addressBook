"use strict";

class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(info) {
    this.contacts.push(info);
  }
  deleteAt(index) {
    this.contacts.splice(index, 1);
  }
  deleteByName(name) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].name === name) {
        this.contacts.splice(i, 1);
      }
    } 
  }
  print() {
    for (let i = 0; i < this.contacts.length; i++) {
      console.log(this.contacts[i]);
    }
  }
}

class Contact {
  constructor(name, phone, email, relation) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.relation = relation;
  }
}

let book = new AddressBook();

book.add(new Contact("Jalen", "000-1111", "jalen@gmail.com", "son"));
book.add(new Contact("Lex", "000-2222", "lex@gmail.com", "mom"));
book.add(new Contact("John", "000-3333", "john@gmail.com", "dad"));
book.add(new Contact("Josh", "000-3333", "john@gmail.com", "dad"));
book.add(new Contact("Jeff", "000-3333", "john@gmail.com", "dad"));
book.add(new Contact("Joe", "000-3333", "john@gmail.com", "dad"));

while (true) {
  let userPrompt = prompt(`Add, Delete, Print, Quit`);
  if (userPrompt.toLowerCase() === "add") {
   book.add(new Contact(
    this.name = prompt(`Enter Name`),
    this.phone = prompt(`Enter Phone Number`),
    this.email = prompt(`Enter Email`),
    this.relation = prompt(`What is this persons relation to you?`))
  );
    console.log(book);
    console.log(`contact was added`);
  } else if (userPrompt.toLowerCase() === "delete") {
    let deleteContact = prompt(`Do you want to delete by name or by index? PLEASE ANSWER NAME OR INDEX!`)
      if (deleteContact.toLowerCase() === "name") {
        let contactName = prompt(`Enter a contact name to delete!`);
        book.deleteByName(contactName);
        console.log(book);
      } else if (deleteContact.toLowerCase() === "index") {
        let index = prompt(`Which index would you like to delete?`);
        book.deleteAt(index);
        console.log(book);
      } else {
        alert(`${index} is not a contact SORRY!`);
      }
    // book.delete(deleteContact);
    console.log(book);
  } else if (userPrompt.toLowerCase() === "print") {
    book.print();
  } else if (userPrompt.toLowerCase() === "quit") {
    alert(`YOU HAVE QUIT THE PROGRAM! PLEASE REFRESH THE PAGE TO RESTART!`)
    break;
  } else if (userPrompt.toLowerCase() === "update") {
    const update = prompt(`Which contact index would you like to update?`); 
    const updateItem = prompt(`Do you want to update the name, email, phone, or relation?`);
    const newValue = prompt(`Enter the new ${updateItem}`);
    book.contacts[update][updateItem] = newValue;
    console.log(book);
  } else {
    alert(`PLEASE ENTER A VALID ACTION!`);
    continue;
  }
}