import { Component, Input, AfterViewInit, PLATFORM_ID, Inject, ElementRef, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import katex from 'katex';

@Component({
  selector: 'app-latex-renderer',
  template: '<div #latexContainer></div>',
})
export class LatexRendererComponent implements AfterViewInit {
  @Input() latexExpression: string = '';
  @ViewChild('latexContainer', { static: true }) latexContainer!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.renderLatex();
    }
  }

  private renderLatex() {
    if (this.latexContainer?.nativeElement && this.latexExpression) {
      console.log('Rendering LaTeX:', this.latexExpression);
      katex.render(this.latexExpression, this.latexContainer.nativeElement, { throwOnError: false });
    }
  }
}
