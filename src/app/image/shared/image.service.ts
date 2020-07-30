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
    {"id":1, "category":"Design", "caption":"Single page Portfolio", "nameClient":"Luigi Gutierrez", "date":"23-03-2018", "liveDemo":"www.website.com", "status":"completed", "description": "Design and development of a portfolio for a web developer. under html, css, javascript, angular, node.js, express and mongoDB technologies.", "url": "../assets/img/proyecto1.jpeg"},

    {"id":2, "category":"Development", "caption":"Tempo Sushi", "nameClient":"Carol Bautista", "date":"20-05-2019", "liveDemo":"www.website.com", "status":"In progress", "description":"This project is inspired by a website for a Sushi business, with an exclusive design and adapted to customer needs. Here stands out the friendly design to publicize your products",  "url": "../assets/img/proyecto2.1.jpeg"},

    {"id":3, "category":"Development", "caption":"Online store", "nameClient":"Patricia Uribe", "date":"15-01-2020", "liveDemo":"www.website.com", "status":"In progress", "description": "building a personal blog using html and css technologies. A design was implemented under customer expectations", "url": "../assets/img/proyecto3.jpeg"},
    
]