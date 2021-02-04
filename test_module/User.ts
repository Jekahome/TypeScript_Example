
import APeople from './APeople';
import IPeople from './IPeople';
import DB from './Db';


 export default class User  extends APeople implements IPeople{
        private _password: string;
        private static  _type = "User";

        public   db ;

        public constructor(userId: number, userName: string,password:string) {

            super(<any>User._type,userId,userName);

            this._password= password;

             this.db =  DB;
            console.log("constructor this.db!!!!",this.db);
        }

        public getInfo(): string {
            return   "id:" + this.id + " name:" + this.name;
        }

        get_name():string{
            console.log("get_name!!!!",this.db);
           return this.db.get_name(this.id);
        }

        set_name(name:string){
            console.log("set_name!!!!",this.db);
            this.db.set_name(this.id,name);
        }

        public db_test(){
            this.db.connect();
        }

    }


