import { Component, OnInit } from '@angular/core';
import { trigger,style,transition, animate,state} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
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
export class AboutComponent implements OnInit {

  public etiquetaIn: string;
  public etiquetaOut:string;

  constructor() {
    this.etiquetaIn="<about>";
    this.etiquetaOut="</about>"
   }

  ngOnInit(): void {
  }

}
