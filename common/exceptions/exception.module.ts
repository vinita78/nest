import { Global, Module } from "@nestjs/common";
import { CustomException } from "./customException.Exception";
import { CustomExceptionFilter } from "./exception.exceptionFilter";
@Global()
@Module({
    providers:[CustomException,CustomExceptionFilter],
   // exports:[CustomException,CustomExceptionFilter]

})
export class ExceptionModule {}