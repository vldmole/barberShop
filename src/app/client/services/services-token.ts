import {InjectionToken} from '@angular/core';
import {ClientService} from './client/client.service';

export const SERVICES_TOKEN = {
  CLIENT: new InjectionToken<ClientService>('SERVICES_TOKEN.HTTP.CLIENT'),
}
