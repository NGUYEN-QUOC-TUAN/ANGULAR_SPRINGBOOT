import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { HomeComponent } from './app/home/home.component';
import { OrderComponent } from './app/order/order.component';
import { OrderComfirmComponent } from './app/order-comfirm/order-comfirm.component';

bootstrapApplication(HomeComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(OrderComponent, appConfig)
  .catch((err) => console.error(err));
  bootstrapApplication(OrderComfirmComponent, appConfig)
  .catch((err) => console.error(err));
