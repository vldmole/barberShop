import {Component, Inject} from '@angular/core';
import {SERVICES_TOKEN} from '../../services/services-token';
import {ClientService} from '../../services/client/client.service';
import {ClientServiceImpl} from '../../services/client/impl/client.service.impl';

@Component({
  selector: 'app-client',
  imports: [],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
  providers:[
    {provide: SERVICES_TOKEN.CLIENT, useClass: ClientServiceImpl},
  ]
})
export class ClientComponent {

  constructor(@Inject(SERVICES_TOKEN.CLIENT) private readonly service: ClientService) {
  }
}
