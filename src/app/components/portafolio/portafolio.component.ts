import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { trigger,style,transition, animate,state} from '@angular/animations';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css'],
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
export class PortafolioComponent implements OnInit {


  ngOnInit(): void {
    
}
}
  
  


