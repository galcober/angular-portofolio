import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  ChartModule, PanelModule, FieldsetModule, InputTextModule, DropdownModule,
  InputTextareaModule, ButtonModule, SharedModule, DataTableModule, DialogModule, CalendarModule, InputSwitchModule, EditorModule,
  DataListModule, TooltipModule, AutoCompleteModule, ProgressBarModule, RadioButtonModule, CheckboxModule, FileUploadModule, ToolbarModule, TabViewModule
} from 'primeng/primeng';
import {MdSidenavModule} from '@angular/material';

import { AppComponent } from './app.component';
import { AdminComponent } from './components/app-portal/admin/admin.component';
import { LoginComponent } from './components/app-login/login.component';
import { AppPortalComponent } from './components/app-portal/app-portal.component';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { BlogComponent } from './components/app-home/blog/blog.component';
import { ContactMeComponent } from './components/app-home/contactme/contactme.component';
import { KnowMeComponent } from './components/app-home/knowme/knowme.component';
import { StartComponent } from './components/app-home/start/start.component';
import { FooterComponent } from './components/app-home/common/footer/footer.component';
import { HeaderComponent } from './components/app-home/common/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    AppPortalComponent,
    AppHomeComponent,
    FooterComponent,
    HeaderComponent,
    BlogComponent,
    ContactMeComponent,
    KnowMeComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ChartModule,
    PanelModule,
    FieldsetModule,
    InputTextModule,
    DropdownModule,
    InputTextareaModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    MdSidenavModule,
    DialogModule,
    CalendarModule,
    InputSwitchModule,
    EditorModule,
    DataListModule,
    TooltipModule,
    AutoCompleteModule,
    ProgressBarModule,
    RadioButtonModule,
    CheckboxModule,
    FileUploadModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
