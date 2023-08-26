import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ticket } from '../entity/ticket';
import { TicketService } from '../service/ticket.service';
import { Customer } from '../entity/customer';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit, OnDestroy {
  ticketList: Ticket[] = [];
  ticket: any;

  constructor(private ticketService: TicketService){
    console.log('Inside constructor.')
  }

  //---------------------------------------------------------------------
  ngOnInit(): void {
      console.log('component initialized.')
      this.getAllTicket();
  }
  ngOnDestroy(): void {
  }
  //----------------------------------------------------------------------

  //Get all the ticket details---------------------------------------------
  getAllTicket():void{
    //@ts-ignore
    this.ticketService.getAllTicket().subscribe((ticket: Customer[]) => {
      ticket.forEach((customer : Customer) => {
        customer.ticketList?.forEach((ticket: Ticket) =>{
          this.ticketList.push(ticket);
        })
      });
    })
  }

}
