import ADb from './ADb';
import IDb from './IDb';
import config from './config';
import $ from 'jquery';


export default class Db_storage  extends ADb implements IDb {

    private static  class = "Db_storage";


    public constructor() {
        super(Db_storage.class);
        console.log(`Db_storage constructor`  );

    }

    public get_name(id:number):string{
        console.log(`Db_storage get name id ${id}`  );
        return "db jeka";
    }

    public set_name(id:number,name:string):void{
        console.log(`Db_storage set name ${name} for id ${id}`  );
    }


    public connect(){
        console.log("connect");
        return window.localStorage.getItem(config.DB.Db_storage.db);
    }



    public delete(){
        console.log("delete");
       /* var myJSON_Obj = window.localStorage.getItem("myJSON_Obj");
        myJSON_Obj = JSON.parse(myJSON_Obj);
        if(myJSON_Obj != null){

            delete myJSON_Obj[$(this).val()];

                myJSON_Obj = JSON.stringify(myJSON_Obj);
                window.localStorage.setItem("myJSON_Obj",myJSON_Obj);

        }*/
    }

    public save(){
        console.log("save");
       /* var myJSON_Obj = window.localStorage.getItem("myJSON_Obj");

        if(myJSON_Obj == null){
            myJSON_Obj={};
        }else{
            myJSON_Obj = JSON.parse(myJSON_Obj);
        }

        myJSON_Obj[$("#idKey").val()]=encodeURI($("#idValue").val());

            myJSON_Obj = JSON.stringify(myJSON_Obj);
            window.localStorage.setItem("myJSON_Obj",myJSON_Obj);*/
    }

    public load() {
        console.log("load");
       /* var myJSON_Obj = window.localStorage.getItem("myJSON_Obj");
        myJSON_Obj = JSON.parse(myJSON_Obj);
        $("#content").append("<ul>");
        for(var key in myJSON_Obj){
            $("#content").append("<li value='"+key+"'>"+encodeURI(myJSON_Obj[key])+"</li>");
        }
        $("#content").append("</ul>");*/

    }

    public show(){
        console.log("show");
        // Проход по всему хранилищу

        /* for(var f=0;f<window.localStorage.length;f++) {
             var keyword = window.localStorage.key(f);
             console.log(keyword);
             console.log(window.localStorage.getItem(keyword));
         }*/

    }

    public clear (){
        console.log("clear");
       // window.localStorage.clear();
        //$("#content").append("");
    }

}





