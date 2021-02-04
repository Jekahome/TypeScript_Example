
import APeople from './APeople';
import IPeople from './IPeople';
import DB from './Db';


  export default class Admin   extends APeople   implements IPeople {
    private _password: string;
    private static  _type = "Admin";
    public db ;

    public constructor(userId: number, userName: string,password:string) {
            super(<any>Admin._type,userId,userName);

            this._password= password;
            this.db =  DB;
    }

      get_name():string{
          console.log("get_name!!!!",this.db);
          return this.db.get_name(this.id);
      }

      set_name(name:string){
          console.log("set_name!!!!",this.db);
          this.db.set_name(this.id,name);
      }

    public getInfo(): string {
        return    ("id:" + this.id + " name:" + this.name);
    }

 }
