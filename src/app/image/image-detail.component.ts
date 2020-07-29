import { Component, OnInit } from '@angular/core';
import { ImageService} from './shared/image.service';
import {ActivatedRoute} from '@angular/router';
import { trigger,style,transition, animate,state} from '@angular/animations';


@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css'],
  animations:[
    trigger('enterState',[
      state('void', style({
           transform: 'translateX(-100%)',
           opacity:0
      })),
      transition(':enter',[
        animate(800, style({
          transform:'translatex(0)',
          opacity:1
        }))
      ])
  ]),
]
})
export class ImageDetailComponent implements OnInit {
  proyecto:any

  constructor(private imageService: ImageService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.proyecto= this.imageService.getImage(
      +this.route.snapshot.params['id']
    )
  }

}
