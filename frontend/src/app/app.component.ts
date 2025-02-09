import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskbarComponent } from './components/building-blocks/taskbar/taskbar.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, TaskbarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'xurgess-dot-com';
}
