
import APeople from './APeople';
import IPeople from './IPeople';


export default class Guest   extends APeople  implements IPeople{
    private _password: string;
    private static  _type = "Guest";


    public constructor(userId: number, userName: string,password:string) {
        super(<any>Guest._type,userId,userName);
        this._password= password;
    }

    get_name():string{
        console.log("get_name guest");
        return "guest";
    }

    set_name(name:string){
        console.log("set_name guest");
    }

    public getInfo(): string {
        return   "id:" + this.id + " name:" + this.name;
    }

}