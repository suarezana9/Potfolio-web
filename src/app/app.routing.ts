//importar modulos del router de angular
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ServiciosComponent} from './components/servicios/servicios.component';
import {PortafolioComponent} from './components/portafolio/portafolio.component';
import {ContactoComponent} from './components/contacto/contacto.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ImageDetailComponent} from './image/image-detail.component';
import {BlogComponent} from './components/blog/blog.component';

const appRoutes: Routes= [
    
    {path:'', component: HomeComponent},
    {path:'', component: AppComponent},
    {path:'sobre-mi', component: AboutComponent},
    {path:'servicios', component: ServiciosComponent},
    {path:'portafolio', component: PortafolioComponent},
    {path:'contacto', component: ContactoComponent},
    {path:'gallery', component: GalleryComponent},
    {path:'portafolio/proyecto/:id', component: ImageDetailComponent},
    {path:'proyecto/:id', component: ImageDetailComponent},
    {path:'blog', component: BlogComponent},
    {path:'**', component: HomeComponent},


];

export const appRoutingProviders: any[]=[];
export const Routing: ModuleWithProviders= RouterModule.forRoot(appRoutes);

imports: [RouterModule.forRoot(appRoutes, { useHash: true })]