import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoutryComponent } from './coutry.component';

const routes: Routes = [{ path: '', component: CoutryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoutryRoutingModule {}
