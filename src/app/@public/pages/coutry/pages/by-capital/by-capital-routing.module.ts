import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalComponent } from './by-capital.component';

const routes: Routes = [{ path: '', component: ByCapitalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ByCapitalRoutingModule {}
