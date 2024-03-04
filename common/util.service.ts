import { Injectable } from "@nestjs/common";

@Injectable()
export class UtilService{
    static convertNameToUpperCase(name:string){
        return name.toUpperCase()
    }
}