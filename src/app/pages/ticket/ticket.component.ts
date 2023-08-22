import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ticket } from '../entity/ticket';
import { TicketService } from '../service/ticket.service';

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

  getAllTicket():void{
    //@ts-ignore
    this.ticketService.getAllTicket().subscribe((ticket: any) => {
      this.ticketList=ticket;
      console.log(this.ticketList);
    })
  }

}
