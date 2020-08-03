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
    {"id":1, "category":"Design", "caption":"TechFit", "nameClient":"Luigi Gutierrez", "date":"23-03-2019", "liveDemo":"https://github.com/suarezana9", "status":"In progress", "description": "Web page design and development for a gym for healthy training and eating, using html, css, javascript, jquery technologies.", "url": "../assets/img/techfit.png"},

    {"id":2, "category":"Development", "caption":"Tempo Sushi", "nameClient":"Carol Bautista", "date":"20-06-2020", "liveDemo":"www.website.com", "status":"In progress", "description":"This project is inspired by a website for a Sushi business, with an exclusive design and adapted to customer needs. Here stands out the friendly design to publicize your products",  "url": "../assets/img/proyecto2.1.jpeg"},

    {"id":3, "category":"Development", "caption":"Online store", "nameClient":"Patricia Uribe", "date":"15-01-2020", "liveDemo":"www.website.com", "status":"In progress", "description": "website development for an accessories and underwear store, designed under customer requirements and a good user experience. This site is developed with html, css, javascript and bootstrap", "url": "../assets/img/proyecto3.jpeg"},
    
]