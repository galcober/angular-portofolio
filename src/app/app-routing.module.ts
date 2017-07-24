import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Login Components
import {LoginComponent} from './components/app-login/login.component';
//Admin Components
import {AdminComponent } from './components/app-portal/admin/admin.component';
import {AppPortalComponent} from './components/app-portal/app-portal.component';
//Home Components
import { AppHomeComponent } from './components/app-home/app-home.component';
import { StartComponent } from './components/app-home/start/start.component';
import { BlogComponent } from './components/app-home/blog/blog.component';
import { ContactMeComponent } from './components/app-home/contactme/contactme.component';
import { KnowMeComponent } from './components/app-home/knowme/knowme.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: AppHomeComponent, children: [
        { path: '', redirectTo: 'inicio', pathMatch: 'full'},
        { path: 'inicio', component: StartComponent},
        { path: 'blog', component: BlogComponent},
        { path: 'contactame', component: ContactMeComponent},
        { path: 'conoceme', component: KnowMeComponent},
    ]},
    { path: 'portal', component: AppPortalComponent, children: [
        { path: '', redirectTo: 'admin', pathMatch: 'full'},
        { path: 'admin', component: AdminComponent },
    ]},
    { path: 'login', component: LoginComponent},
    { path: 'notfound', component: NotFoundComponent},
    { path: '**', redirectTo: '/notfound' },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    providers: []
})
export class AppRoutingModule {}
