export default abstract class ADb {

    private readonly _db:string;

    public constructor(db:string) {
        this._db = db;
    }

    protected get db(): string{
        return  this._db ;
    }

}