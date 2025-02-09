import { Component } from '@angular/core';
import { TextBlockWImage } from '../../building-blocks/text-block-w-image/text-block-w-image.component';

@Component({
    selector: 'app-landing-page',
    imports: [TextBlockWImage],
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
}
