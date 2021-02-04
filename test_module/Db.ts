
import Db_sqlite from './Db_sqlite';
import Db_storage from './Db_storage';
import ADb from './ADb';
import config  from './config';



var DB:ADb ;

   if(config.DB.default == 'Db_sqlite'){
       DB = new Db_sqlite();
       console.log("Db_sqlite");
   } else if (config.DB.default == 'Db_storage'){
       DB = new Db_storage();
       console.log("Db_storage");
   }

 export default DB;