import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferComponent } from './offer/offer.component';
import { MenuComponent } from './menu/menu.component';
import { ItemComponent } from './item/item.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path:'Offer',component:OfferComponent},
  {path:'',component:MenuComponent},
  {path:'item',component:ItemComponent},
  {path:'howitworks',component:HowitworksComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'login',component:LoginComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
