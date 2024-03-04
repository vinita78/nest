import { ArgumentMetadata, BadRequestException, Global, PipeTransform, createParamDecorator } from "@nestjs/common";
import { ExecutionContextHost } from "@nestjs/core/helpers/execution-context-host";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
@Global()
export class ValidationPipe implements PipeTransform<any> {
    async transform(value: any, { metatype }: ArgumentMetadata) {
        // if (!metatype || !this.toValidate(metatype)) {
        //   return value;
        // }
        const object = plainToInstance(metatype, value);
        const errors = await validate(object);
        console.log(`validation error ${errors[0]}`)
        if (errors.length > 0) {
            const errorMessage = this.buildErrorMessage(errors);
            console.log(`sssss ${errorMessage}`)
          throw new BadRequestException(errorMessage);
        }
        return value;


        
      }
    
      
      private buildErrorMessage(errors: any[]) {
        console.log(`buildErrorMessage ${JSON.stringify(Object.values(errors[0].constraints))}`)
      //  return errors.map(error => Object.values(error.constraints)).join('; ');
      const errors1 = Object.values(errors[0].constraints)[0]
      return errors1
      }



}