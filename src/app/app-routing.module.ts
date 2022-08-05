import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { ListBookComponent } from './list-book/list-book.component';
import { ViewBookComponent } from './view-book/view-book.component';

const routes: Routes = [
  {path:'addbook', component:AddBookComponent},
  {path:'books', component: ListBookComponent},
  {path:'viewbook', component:ViewBookComponent},
  {path:'', redirectTo:'books', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
