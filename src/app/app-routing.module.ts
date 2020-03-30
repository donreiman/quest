import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchContainerComponent } from './search-container/search-container.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  { path: '', component: SearchContainerComponent },
  { path: 'details', component: DetailsComponent },
  { path: '**', component: SearchContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
