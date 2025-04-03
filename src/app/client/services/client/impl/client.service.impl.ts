import { Injectable } from '@angular/core';
import { Client } from '../../../models/client/client';
import {Observable} from 'rxjs';

import {
  ListClientResponse,
  SaveClientRequest,
  SaveClientResponse,
  UpdateClientRequest,
  UpdateClientResponse
} from '../request-response-dto';

import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment-dev';
import {ClientService} from '../client.service';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceImpl implements ClientService {

  private readonly baseUrl: string = environment.apiUrl+"/client";

  constructor(private httClient: HttpClient) { }

  save(request: SaveClientRequest): Observable<SaveClientResponse>
  {
    return new Observable<SaveClientResponse>(observer =>
    {
      console.log(this.baseUrl);
      console.log(request);
      this.httClient.post<SaveClientResponse>(this.baseUrl, request)
        .subscribe({
          next: value => observer.next(value),
          error: ()=> { throw new Error(`Ocorreu um erro ao tentar inserir: ${request}`) }
      })
    })
  }

  update(id: number, request: UpdateClientRequest): Observable<UpdateClientResponse>{
    return new Observable<UpdateClientResponse>(observer =>{
      this.httClient.put<UpdateClientResponse>(`${this.baseUrl}/${id}`, request)
        .subscribe({
          next: value => observer.next(value),
          error: () => {throw new Error(`Ocorreu um erro ao tentar atualizar o cliente: ${id}`)}
        })
    })
  }

  delete(id: number): Observable<void>{
    return new Observable<void>(observer =>{
      this.httClient.delete<void>(`${this.baseUrl}/${id}`)
        .subscribe({
          next: value=>observer.next(value),
          error: ()=>{throw new Error(`Ocorreu um erro ao tentar excluir o cliente: ${id}`)}
        })
    })
  }

  list(): Observable<ListClientResponse>{
    return new Observable<ListClientResponse>(observer =>{
      this.httClient.get<ListClientResponse>(this.baseUrl)
        .subscribe({
          next: value =>observer.next(value),
          error: ()=>{throw new Error(`Ocorreu um erro ao consultar a lista de clientes`)}
        })
    })
  }

  findById(id: number): Observable<Client>{
    return new Observable<Client>(observer =>{
      this.httClient.get<Client>(`${this.baseUrl}/${id}`)
        .subscribe({
          next: value=> observer.next(value),
          error: ()=> { throw new Error(`Ocorreu um erro a consultar pelo cliente: ${id}`)}
        })
    })
  }
}
