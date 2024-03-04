import {  BadGatewayException, BadRequestException, ExceptionFilter, HttpServer } from "@nestjs/common";
import { Request ,Response} from "express";
import { CustomException } from "./customException.Exception";
import { AbstractHttpAdapter, HttpAdapterHost } from "@nestjs/core";

// custom-exception.filter.ts
import { Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { ValidationError } from "class-validator";

// @Catch()
// export class CustomExceptionFilter extends BaseExceptionFilter {
//   catch(exception: unknown, host: ArgumentsHost) {
//     const ctx = host.switchToHttp();
//     const response = ctx.getResponse();

//     let status = 500;
//     let message = 'Internal server error';

//     if (exception instanceof HttpException) {
//       status = exception.getStatus();
//       message = exception.getResponse() as string;
//     } else if (exception instanceof BadRequestException) {
//       status = 400;
//       message = 'Invalid request parameters';
//     }

//     response.status(status).json({
//       statusCode: status,
//       message: message,
//       timestamp: new Date().toISOString(),
//     });
//   }
// }


@Catch()

export class CustomExceptionFilter extends BaseExceptionFilter{
   
   
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx  = host.switchToHttp()
        const request = ctx.getRequest<Request>()
        const response  = ctx.getResponse<Response>()

       
            console.log(`fff ${JSON.stringify(exception.message)}`)
      

       // console.log(`exception ${request.url} ${exception.cause} ${exception.message} ${JSON.stringify(errors)}`)

        interface IError {
            message:'string',
            path:'string'
        }
        response.status(exception.getStatus()).json({
            message:  exception.message,
            path:request.url
        })

    }
    

}