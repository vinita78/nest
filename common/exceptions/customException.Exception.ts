import { HttpException, HttpStatus } from "@nestjs/common";

export class CustomException extends HttpException{
    constructor(private messge:string,private statusCode:HttpStatus){super(messge,statusCode)}
}