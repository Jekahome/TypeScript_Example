
export default interface IDb   {

     // methods
        connect();
        delete();
        save() ;
        load();
        show();
        clear();

        get_name(id:number):string;
        set_name(id:number,name:string):void;
 }

