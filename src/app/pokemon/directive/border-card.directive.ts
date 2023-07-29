import { Directive , ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[pkmBorderCard]'
})
export class BorderCardDirective {
   private defaultColor : string ="green";
   private initialColor : string = "#f5f5f5";
   private initialHeigh : number = 200 ;
  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.initialHeigh);
}

@Input('pokemonBorderCard') borderColor: string ; //alias: permet detreminer par defaut les coulers dans l'interfaces component html
  
   @HostListener('mouseenter') 
   onMouseEnter(){
    this.setBorder(this.borderColor || this.defaultColor); // S'il n'y a pas de couleur definie on utilise #009688
   }

   @HostListener('mouseleave') 
   onMouseLeave(){
    this.setBorder(this.initialColor);
   }


  private setBorder(color: string) {
      let border = 'solid 4px ' + color;
      this.el.nativeElement.style.border = border;
  }

  private setHeight(height: number) {
      this.el.nativeElement.style.height = height + 'px';
  }
}
