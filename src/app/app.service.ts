import { Injectable } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
 
@Injectable()
export class AppService {
 
  constructor(private scrollToService: ScrollToService) { }
 
  triggerScrollTo() {
    
    const config: ScrollToConfigOptions = {
      target: '#about'
    };
 
    this.scrollToService.scrollTo(config);
  }
}