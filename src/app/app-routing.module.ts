import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import { LoginComponent } from './login/login.component';
import {CategoriesComponent} from "./home/categories/categories.component";
import {ListCategoriesComponent} from "./home/categories/list-categories/list-categories.component";
import {AddCategorieComponent} from "./home/categories/add-categorie/add-categorie.component";

const routes: Routes = [
  {path: "home", component : HomeComponent,
    children: [
      {path:'categories', component: CategoriesComponent,
        children:[
          {path:"list",component:ListCategoriesComponent},
          {path:"add",component:AddCategorieComponent}
        ]
      }
    ]
  },
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
