!function(e){var t={};function s(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="dist/",s(s.s=0)}([function(e,t,s){"use strict";s.r(t);class o{constructor(e,t,s){this.foo=1,this._type=e,this.id=t,this.name=s}getType(){return this._type}}class n{constructor(e){this._db=e}get db(){return this._db}}var l,r={DB:{Db_storage:{db:"test"},Db_sqlite:{db:"test.db"},default:"Db_storage"}};class a extends n{constructor(){super(a.class)}get_name(e){return console.log(`Db_sqlite get name id ${e}`),"Jeka"}set_name(e,t){console.log(`Db_sqlite set name ${t} for id ${e}`)}connect(){return console.log("connect"),window.localStorage.getItem(r.DB.Db_storage.db)}delete(){console.log("delete")}save(){console.log("save")}load(){console.log("load")}show(){console.log("show")}clear(){console.log("clear")}}a.class="Db_sqlite";class c extends n{constructor(){super(c.class),console.log("Db_storage constructor")}get_name(e){return console.log(`Db_storage get name id ${e}`),"db jeka"}set_name(e,t){console.log(`Db_storage set name ${t} for id ${e}`)}connect(){return console.log("connect"),window.localStorage.getItem(r.DB.Db_storage.db)}delete(){console.log("delete")}save(){console.log("save")}load(){console.log("load")}show(){console.log("show")}clear(){console.log("clear")}}c.class="Db_storage","Db_sqlite"==r.DB.default?(l=new a,console.log("Db_sqlite")):"Db_storage"==r.DB.default&&(l=new c,console.log("Db_storage"));var g=l;class i extends o{constructor(e,t,s){super(i._type,e,t),this._password=s,this.db=g,console.log("constructor this.db!!!!",this.db)}getInfo(){return"id:"+this.id+" name:"+this.name}get_name(){return console.log("get_name!!!!",this.db),this.db.get_name(this.id)}set_name(e){console.log("set_name!!!!",this.db),this.db.set_name(this.id,e)}db_test(){this.db.connect()}}i._type="User";class d extends o{constructor(e,t,s){super(d._type,e,t),this._password=s,this.db=g}get_name(){return console.log("get_name!!!!",this.db),this.db.get_name(this.id)}set_name(e){console.log("set_name!!!!",this.db),this.db.set_name(this.id,e)}getInfo(){return"id:"+this.id+" name:"+this.name}}d._type="Admin";class _ extends o{constructor(e,t,s){super(_._type,e,t),this._password=s}get_name(){return console.log("get_name guest"),"guest"}set_name(e){console.log("set_name guest")}getInfo(){return"id:"+this.id+" name:"+this.name}}_._type="Guest";let u=new i(1,"Tom","pass");u.get_name();u.set_name("Tom2");let m=new d(2,"Jeka","pass");console.log(" name:"+m.get_name()," type:"+m.getType());let b=new _(10,"Гость","pass");console.log(" name:"+b.get_name()," type:"+b.getType());let h=[];h.push(u),h.push(m),h.push(b);for(let e=0;e<h.length;e++){let t=h[e];console.log(" name:"+t.get_name()," type:"+t.getType())}}]);
//# sourceMappingURL=bundle.js.map