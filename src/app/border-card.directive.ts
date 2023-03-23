import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[pkmnBorderCard]",
})
export class BorderCardDirective {
  private initialColor: string = "#F5F5F5";
  private defaultColor: string = "#88665D";
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
  }

  @Input("pkmnBorderCard") borderColor: string;

  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = height + "px";
  }

  private setBorder(color: string) {
    let border = "solid 4px" + color;
    this.el.nativeElement.style.border = border;
  }
}
