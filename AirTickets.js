 
 import React from 'react';
 import ReactDOM from 'react-dom';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import './css/AirTickets.css';
 import AirTicketsHeader from './AirTicketsHeader.js'
 import AirTicketsItem from './AirTicketsItem.js'
 import AirTicketsFilters from './AirTicketsFilters.js'
 
 class AirTickets extends React.Component{
 
 constructor() {
 	super();
 	this.state = {
 		Tickets: [
   {id: 0, startCity: "Kiev", endCity: "Minsk", transfers: 0, price: 120, class: "econom", freeplaces: 200},
   {id: 1, startCity: "Kiev", endCity: "Minsk", transfers: 0, price: 150, class: "business", freeplaces: 99},
   {id: 2, startCity: "Kiev", endCity: "Minsk", transfers: 0, price: 170, class: "luxe", freeplaces: 41},
   {id: 3, startCity: "Kiev", endCity: "Paris", transfers: 1, price: 300, class: "econom", freeplaces: 210},
   {id: 4, startCity: "Kiev", endCity: "Paris", transfers: 1, price: 370, class: "business", freeplaces: 165},
   {id: 5, startCity: "Kiev", endCity: "London", transfers: 2, price: 400, class: "econom", freeplaces: 24},
   {id: 6, startCity: "Kiev", endCity: "London", transfers: 2, price: 550, class: "luxe", freeplaces: 2},
   {id: 7, startCity: "Kiev", endCity: "London", transfers: 1, price: 600, class: "business", freeplaces: 142},
   {id: 8, startCity: "Kiev", endCity: "London", transfers: 1, price: 700, class: "luxe", freeplaces: 121},
   {id: 9, startCity: "Kiev", endCity: "Madrid", transfers: 2, price: 550, class: "business", freeplaces: 68},
   {id: 10, startCity: "Kiev", endCity: "Madrid", transfers: 1, price: 620, class: "luxe", freeplaces: 32},
 		],
    onFilters: [false, false, false, false],
 	}
 }

 getFilter = (index) => {
  let newOnFilters = this.state.onFilters;
  newOnFilters[index] ? newOnFilters[index] = false : newOnFilters[index] = true;
  this.setState({onFilters: newOnFilters});
 }

 offFilter = () => {
  let { onFilters } = this.state;
  for (let i = 0; i < onFilters.length; i++) {
    onFilters[i] = false;
  };
  this.setState({onFilters: onFilters});  
 }

 buildTicket = (Tickets) => {
  return Tickets.map(Ticket => {            
    return (<AirTicketsItem key={Ticket.id} Ticket={Ticket} />);
  })
 }

 showTickets = (Tickets) => {
   let { onFilters } = this.state;
   let returnTickets = Tickets;   

   if (onFilters.every((Filter) => {return !Filter})) {
    return this.buildTicket(Tickets);}
    else {
     if (onFilters[0]) {      
      returnTickets = returnTickets.filter(Ticket => {
        return Ticket.transfers == 0;
      });
     }
     if (onFilters[1]) {
      returnTickets = returnTickets.filter(Ticket => {
        return Ticket.transfers == 1;
      });
     } 
     if (onFilters[2]) {
      returnTickets = returnTickets.filter(Ticket => {
        return Ticket.freeplaces !== 0;
      });
     }
     if (onFilters[3]) {
      returnTickets = returnTickets.filter(Ticket => {
        return Ticket.class == "luxe";
      });
     }
     return this.buildTicket(returnTickets);     
    }   
 }
 

 render() {
  const { Tickets } = this.state;
  const message = ['Hello', 'world'];
  const message1 = ['Hello', 'world'];
  let message2;
  
  
  return(
   <div className="AirTicketsApp">
     <AirTicketsHeader></AirTicketsHeader>
     <div className="container">
       <div className="row">
         <div className="col-md-3"><AirTicketsFilters offFilter={this.offFilter} getFilter={this.getFilter} /></div>
         <div className="col-md-6">
           {this.showTickets(Tickets)}
         </div>
       </div>
     </div>
   </div>
   
  );
 }

 }

 export default AirTickets

  