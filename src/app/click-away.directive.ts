import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickAway]'
})
export class ClickAwayDirective {
  private isListening = true; 

  constructor(private el: ElementRef) { }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const clickedInside = this.el.nativeElement.contains(event.target);
    const inputElement = this.el.nativeElement.querySelector('input');
    const inputValue = inputElement.value.trim();

    if (clickedInside) {
      this.isListening = true;
      this.el.nativeElement.classList.remove('clr-error');
    }

    if (!inputElement) {
      return; // Si no se encuentra un campo de entrada, no realizar más comprobaciones.
    }

    if (!clickedInside && inputValue === '') {
      if (!this.isListening) {
        return; 
      }
      
      // Agregar la clase clr-error al elemento
      this.el.nativeElement.classList.add('clr-error');
      
      
      // Deshabilitar la detección después de realizar la acción
      this.isListening = false;
    }
  }
}
