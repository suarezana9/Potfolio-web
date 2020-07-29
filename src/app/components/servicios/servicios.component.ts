import { Component, OnInit } from '@angular/core';
import { trigger,style,transition, animate,state} from '@angular/animations';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
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
export class ServiciosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
