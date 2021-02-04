import ADb from './ADb';
import config from "./config";
import $ from 'jquery';
import IDb from "./IDb";

export default class Db_sqlite extends ADb implements IDb {
    private static  class = "Db_sqlite";

    public constructor() {
        super(Db_sqlite.class);

    }

    public get_name(id:number):string{
        console.log(`Db_sqlite get name id ${id}`  );
        return "Jeka";
    }

    public set_name(id:number,name:string):void{
     console.log(`Db_sqlite set name ${name} for id ${id}`  );
    }

    public connect(){
        console.log("connect");
        return window.localStorage.getItem(config.DB.Db_storage.db);
    }



    public delete(){
        console.log("delete");

    }

    public save(){
        console.log("save");

    }

    public load() {
        console.log("load");


    }

    public show(){
        console.log("show");


    }

    public clear (){
        console.log("clear");

    }
}