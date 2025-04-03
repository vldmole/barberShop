import {Client} from '../../models/client/client';

export interface SaveClientRequest extends Client{
  //nothing for while
}

export interface SaveClientResponse extends Client{
  id: number;
}

export interface UpdateClientRequest extends Client{
  //nothing for while
}

export interface UpdateClientResponse extends Client{
  id: number;
}

export interface ListClientResponse{
  clients: Client[];
}
