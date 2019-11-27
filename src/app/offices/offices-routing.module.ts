import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfficesComponent } from './offices.component';
import { OfficesResolver } from './offices-resolver.service';


const routes : Routes = [{
    path: ':slug',
    component: OfficesComponent,
    resolve: {
        office: OfficesResolver
    }
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OfficesRoutingModule { }