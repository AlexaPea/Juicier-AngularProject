import { Directive, Input, ElementRef, ChangeDetectorRef } from '@angular/core';

@Directive({
  selector: '[appAuthOnly]'
})
export class AuthOnlyDirective {

  @Input() isVerified: boolean = false;

  constructor(private el: ElementRef, private cdRef: ChangeDetectorRef) { }

  //called when we call appAuthOnly
  ngOnInit() {
    this.updateVisibility();
  }

  private updateVisibility() {
    if (this.isVerified) {
      //show the element
      this.el.nativeElement.style.display = '';
    } else {
      //Hide the element
      this.el.nativeElement.style.display = 'none';
    }
    
  }

  ngOnChanges() {//executes whenever anything changes
    this.updateVisibility();
    // Trigger change detection
    this.cdRef.detectChanges;
  }

}
