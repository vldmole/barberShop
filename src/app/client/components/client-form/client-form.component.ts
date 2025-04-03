import {Component, EventEmitter, input, Input, model, ModelSignal, output} from '@angular/core';
import {Client} from '../../models/client/client';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {NgxMaskDirective, provideNgxMask} from 'ngx-mask';

@Component({
  selector: 'app-client-form',
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    NgxMaskDirective,
  ],
  providers:[
    provideNgxMask(),
  ],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css'
})
export class ClientFormComponent {

  client= model.required<Client>();
  newClient: Client = {id:0, name:"", email:"", phone:""};

  saveEvent = output<Client>();

  onSubmit(){
    this.client.update(client =>this.newClient);
    this.saveEvent.emit(this.newClient);
  }

}
