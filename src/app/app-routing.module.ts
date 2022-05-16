import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletelistComponent } from './completelist/completelist.component';
import { HomeComponent } from './home/home.component';
import { HomenavComponent } from './homenav/homenav.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path: 'Home',component:HomeComponent},
  {path: 'HomeNav',component:HomenavComponent},
  {path: 'Wishlist',component:WishlistComponent},
  {path: 'Completelist',component:CompletelistComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,HomenavComponent,WishlistComponent,CompletelistComponent]