import { Module } from "@nestjs/common";
import { UtilService } from "./util.service";
import { CustomExceptionFilter } from "./exceptions/exception.exceptionFilter";

@Module({
    providers:[UtilService,CustomExceptionFilter],
    exports:[UtilService,CustomExceptionFilter]
})
export class UtilModule{}