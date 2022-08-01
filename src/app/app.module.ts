import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/material/material.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './pages/sdlc/navigation/navigation.component';
import { PhasesNavComponent } from './pages/sdlc/phases-nav/phases-nav.component';
import { SdlcComponent } from './pages/sdlc/sdlc.component';
import { AllFilesComponent } from './pages/all-files/all-files.component';
import { ProjectInitFormComponent } from './pages/sdlc/project-init-form/project-init-form.component';
import { RequirmentsFormComponent } from './pages/sdlc/requirments-form/requirments-form.component';
import { DesignFormComponent } from './pages/sdlc/design-form/design-form.component';
import { ProjectInitViewComponent } from './pages/sdlc/project-init-view/project-init-view.component';
import { RequiremetViewComponent } from './pages/sdlc/requiremet-view/requiremet-view.component';
import { DesginViewComponent } from './pages/sdlc/desgin-view/desgin-view.component';
import { DialogComponent } from './pages/sdlc/dialog/dialog.component';
import { UpdateDesginFormComponent } from './pages/sdlc/update-desgin-form/update-desgin-form.component';
import { UpdateProjectInitFormComponent } from './pages/sdlc/update-project-init-form/update-project-init-form.component';
import { UpdateRequirmentsFormComponent } from './pages/sdlc/update-requirments-form/update-requirments-form.component';
import { NavigateComponent } from './pages/all-files/navigate/navigate.component';
import { DesginPhaseImgViewComponent } from './pages/all-files/desgin-phase-img-view/desgin-phase-img-view.component';
import { ReqPhaseImgViewComponent } from './pages/all-files/req-phase-img-view/req-phase-img-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    PhasesNavComponent,
    SdlcComponent,
    AllFilesComponent,
    ProjectInitFormComponent,
    RequirmentsFormComponent,
    DesignFormComponent,
    ProjectInitViewComponent,
    RequiremetViewComponent,
    DesginViewComponent,
    DialogComponent,
    UpdateDesginFormComponent,
    UpdateProjectInitFormComponent,
    UpdateRequirmentsFormComponent,
    NavigateComponent,
    DesginPhaseImgViewComponent,
    ReqPhaseImgViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
