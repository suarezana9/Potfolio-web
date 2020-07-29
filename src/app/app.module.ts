import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {Routing, appRoutingProviders} from './app.routing';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatDialogModule} from '@angular/material/dialog';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './components/about/about.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import {ImageService} from './image/shared/image.service';
import {ImageFilterPipe} from './image/shared/filter.pipe';
import { ImageDetailComponent } from './image/image-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './services/message.service';
import { BlogComponent } from './components/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServiciosComponent,
    PortafolioComponent,
    ContactoComponent,
    HomeComponent,
    GalleryComponent,
    ImageFilterPipe,
    ImageDetailComponent,
    BlogComponent
    
  ],
  imports: [
    BrowserModule,
    Routing,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ScrollToModule.forRoot(),
    ReactiveFormsModule
  ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  
  providers: [ 
    appRoutingProviders,
    ImageService,
    ImageFilterPipe,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
