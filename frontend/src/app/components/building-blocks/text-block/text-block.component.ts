import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-block',
  imports: [],
  templateUrl: './text-block.component.html',
  styleUrl: './text-block.component.css'
})
export class TextBlockComponent {

  @Input() textInput: string = '';

}
