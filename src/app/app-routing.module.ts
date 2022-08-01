import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFilesComponent } from './pages/all-files/all-files.component';
import { SdlcComponent } from './pages/sdlc/sdlc.component';

const routes: Routes = [
  {path: '', component: SdlcComponent},
  {path: 'sdlc', component: SdlcComponent},
  {path: 'allFiles', component: AllFilesComponent},
  {path: '**', component: SdlcComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
