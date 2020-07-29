import { Injectable } from '@angular/core'    
@Injectable()    
export class ImageService {
    visibleImages = [];    
    
    getImages() {    
        return this.visibleImages = IMAGES.slice(0);    
    }    
    
    getImage(id: number) {    
        return IMAGES.slice(0).find(proyecto => proyecto.id == id)    
    } 
}
const IMAGES=[
    {"id":1, "category":"Design", "caption":"Single page Portfolio", "nameClient":"Luigi Gutierrez", "date":"23-03-2018", "liveDemo":"www.website.com", "status":"completed", "url": "../assets/img/proyecto1.jpeg"},
    {"id":2, "category":"Development", "caption":"Tempo Sushi", "nameClient":"Carol Bautista", "date":"20-05-2019", "liveDemo":"www.website.com", "status":"In progress",  "url": "../assets/img/proyecto2.jpeg"},
    {"id":3, "category":"Development", "caption":"Online store", "nameClient":"Patricia Uribe", "date":"15-01-2020", "liveDemo":"www.website.com", "status":"In progress", "url": "../assets/img/proyecto3.jpeg"},
    
]