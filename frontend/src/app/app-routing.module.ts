import { EditaProdutoComponent } from "./components/produtos/edita-produto/edita-produto.component";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './components/produtos/cria-produto/create-product.component';
import { HomeComponent } from './views/home/home.component';
import { ProdutoCrudComponent } from './views/produto-crud/produto-crud.component';
import { DeletaProdutoComponent } from "./components/produtos/deleta-produto/deleta-produto.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'produtos', component: ProdutoCrudComponent },
  {
    path: 'produtos/create',
    component: CreateProductComponent,
  },
  {
    path: 'produtos/update/:id',
    component: EditaProdutoComponent,
  },
  {
    path: 'produtos/delete/:id',
    component: DeletaProdutoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
