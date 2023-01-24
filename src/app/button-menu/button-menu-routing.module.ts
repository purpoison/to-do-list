import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
// import {AppModule} from '../app.module';
import { BiggestAirplaneComponent } from '../biggest-airplane/biggest-airplane.component';
import { BiggestCarComponent } from '../biggest-car/biggest-car.component';
import { BiggestShipComponent } from '../biggest-ship/biggest-ship.component';


const routes: Routes = [
  {path: 'Airplane', component: BiggestAirplaneComponent},
  {path: 'Car', component: BiggestCarComponent},
  {path: 'Ship', component: BiggestShipComponent}
]

@NgModule({
  declarations: [
    BiggestAirplaneComponent,
    BiggestCarComponent,
    BiggestShipComponent
  ],
  imports: [
    BrowserModule,
    // AppModule,
    RouterModule.forRoot(routes)
  ],
  // exports: [RouterModule]
})
export class ButtonMenuRoutingModule { }
