import { Component } from '@angular/core';
import { formatTitle } from '@happyorg/utils

@Component({
  selector: 'happyorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = formatTitle('admin');
}
