import {
  ListClientResponse,
  SaveClientRequest,
  SaveClientResponse,
  UpdateClientRequest,
  UpdateClientResponse
} from './request-response-dto';
import {Observable} from 'rxjs';
import {Client} from '../../models/client/client';

export interface ClientService {
  save(request: SaveClientRequest): Observable<SaveClientResponse>;
  update(id: number, request: UpdateClientRequest): Observable<UpdateClientResponse>;
  delete(id: number): Observable<void>;
  list(): Observable<ListClientResponse>;
  findById(id: number): Observable<Client>
}
