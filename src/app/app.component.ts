import { Component, HostListener, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { trigger,style,transition, animate,state} from '@angular/animations';
import { hostViewClassName } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
export class AppComponent  implements OnInit{
  title = 'proyecto-portafolio';
  _router:string;
  public load:Boolean=false;
  
  constructor(private router:Router){}
  
  routeIsActive(routePath: string) {
    return this.router.url == routePath;
}

ngOnInit():void{
setTimeout(()=>{
  this.load=true;
},2000);
}

/*animation navbar, chanche color*/
header_variable=false;

@HostListener ("document:scroll")
scrollfunction(){
  if(document.body.scrollTop>0 || document.documentElement.scrollTop>0){
    this.header_variable=true;
  }else{
    this.header_variable=false;
  }
}


}
