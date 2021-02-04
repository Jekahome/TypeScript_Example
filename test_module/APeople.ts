


 export default abstract class APeople {
        private readonly _type:string;
        protected foo:number = 1;

        protected id: number;
        protected name: string;

        public constructor(type:string,id:number,name:string) {
            this._type = type;
            this.id = id;
            this.name = name;

        }

        public getType(): string{
            return  this._type ;
        }

 }

