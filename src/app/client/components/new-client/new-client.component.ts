import {Component, Inject, model, OnDestroy, WritableSignal} from '@angular/core';
import {ClientFormComponent} from '../client-form/client-form.component';
import {Client} from '../../models/client/client';
import {SERVICES_TOKEN} from '../../services/services-token';
import {ClientService} from '../../services/client/client.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {ClientServiceImpl} from '../../services/client/impl/client.service.impl';

@Component({
  selector: 'app-new-client',
  imports: [
    ClientFormComponent
  ],
  providers:[
    { provide: SERVICES_TOKEN.CLIENT, useClass: ClientServiceImpl}
  ],
  templateUrl: './new-client.component.html',
  styleUrl: './new-client.component.css'
})
export class NewClientComponent implements OnDestroy{

  client= {name:"", email:"", phone:""};
  private httpSubscription ?: Subscription;

  constructor(
    @Inject(SERVICES_TOKEN.CLIENT)
    private service: ClientService,
    private router: Router
  ) {
    //nothing for while
  }

  onSave(client: Client) {
    console.log(this.client);
    console.log(client);

    this.httpSubscription = this.service.save(client).subscribe({
      next: cli =>{
        this.client = cli;
       // this.router.navigate(['client']);
      },
      error: err=>alert(err)
    });
  }

  ngOnDestroy(): void {
    if (this.httpSubscription)
      this.httpSubscription.unsubscribe();
  }
}
