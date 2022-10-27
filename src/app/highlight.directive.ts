import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[appHighlight]',
})

export class HighlightDirective {

    @Input() appHighlight = ''


    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.appHighlight)
    }
    @HostListener('mouseleave') onMouseleave() {
        this.highlight('')
    }

    constructor(private el: ElementRef) {
        el.nativeElement.style.backgroundColor = ''
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color
    }

}