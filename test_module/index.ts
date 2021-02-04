
// Обощение не пошло (нельзя вернуть string как T переданный стрингом )
// set get не пошло (не видит обьект this.db.set_name)

 import User from './User';
 import Admin from './Admin';
 import Guest from './Guest';

 import APeople from './APeople';// abstract class
 import IPeople from './IPeople';// interface

 let Tom = new User (1,"Tom","pass");
 let c = Tom.get_name() ;
 Tom.set_name("Tom2");

 //console.log(" name:" + Tom.name," type:" + Tom.getType());


 let Jeka = new Admin (2,"Jeka","pass");
 console.log(" name:" +Jeka.get_name()," type:" + Jeka.getType());

 let guest = new Guest (10,"Гость","pass");
 console.log(" name:" + guest.get_name()," type:" + guest.getType());


let objects: Array<APeople|IPeople>  = [];
objects.push(Tom);
objects.push(Jeka);
 objects.push(guest);

 for (let i = 0; i < objects.length; i++) {

     let temp: User|Admin|Guest = <User|Admin|Guest>objects[i];
     console.log(" name:" +temp.get_name()," type:" + temp.getType());

 }
