import { Module,DynamicModule, Provider } from "@nestjs/common";
import { Controller } from "@nestjs/common/interfaces";
import { UserModule } from "src/user/user.module";
import { userProvider } from "src/user/user.provider";


@Module({})
export class DummyModule{
    static forRoot(x:string):DynamicModule{
        
        const dynamicProvider :Provider = {
            provide : 'DYNAMIC_PROVIDER',
            useValue:x,
            
        }
        

        return {
            module:DummyModule,
            providers:[dynamicProvider],
            exports:[dynamicProvider,DummyModule]
            
        }
    }
}