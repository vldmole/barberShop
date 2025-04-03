import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NewClientComponent} from './client/components/new-client/new-client.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewClientComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'barber-shop-ui';
}
