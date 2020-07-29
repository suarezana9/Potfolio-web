import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name:'imageFilter'})

export class ImageFilterPipe implements PipeTransform {
    transform(items: any[], works: string): any {    
        if(works === 'all'){ return items } else    
        return items.filter(item =>{    
          return item.category === works;    
        });    
      }    
        
    } 