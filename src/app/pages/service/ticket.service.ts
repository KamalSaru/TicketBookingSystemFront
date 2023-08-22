import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ticket} from "../entity/ticket";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  //All logics are in service.ts and component ts--------------------
  url: string ='http://localhost:8080/customer'  //Connect data to the database--------------------------
  customerForm: any;
  customerService: any;
  constructor(private http : HttpClient){ }

  getAllTicket(): Observable<Ticket[]>{
    return this.http.get<(Ticket[])>(this.url)
  }
}
