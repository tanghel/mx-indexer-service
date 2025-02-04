import { Module } from "@nestjs/common";
import { DynamicModuleUtils } from "src/utils/dynamic.module.utils";
import { AuthController } from "./auth/auth.controller";
import { EndpointsServicesModule } from "./endpoints.services.module";
import { ExampleController } from "./example/example.controller";
import { HealthCheckController } from "./health-check/health.check.controller";
import { TokensController } from "./tokens/token.controller";
import { UsersController } from "./users/user.controller";
import { IndexerModule } from './indexer/indexer.module';
import { IndexerController } from './indexer/indexer.controller';

@Module({
  imports: [
    EndpointsServicesModule,
    IndexerModule,
  ],
  providers: [
    DynamicModuleUtils.getNestJsApiConfigService(),
  ],
  controllers: [
    AuthController, ExampleController, HealthCheckController, UsersController, TokensController, IndexerController,
  ],
})
export class EndpointsControllersModule { }
