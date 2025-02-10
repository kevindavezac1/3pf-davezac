import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  standalone: false,
  
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  @Output() drawerToggle = new EventEmitter
}
