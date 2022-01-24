import BaseModel from "./BaseModel.class";

export class LoginModel extends BaseModel{
    nombreUsuario: string = null;
    password:string = null;
    constructor(object: any){
        super();
        super.initialize(object);
    }
}
