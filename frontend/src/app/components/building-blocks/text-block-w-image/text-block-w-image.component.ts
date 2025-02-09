import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-block-w-image',
  templateUrl: './text-block-w-image.component.html',
  styleUrls: ['./text-block-w-image.component.css']
})
export class TextBlockWImage {
  @Input() imageUrl: string = '';
  @Input() text: string = '';
}
