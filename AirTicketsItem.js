 
 import React from 'react';
 import ReactDOM from 'react-dom';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import './css/AirTickets.css';
 
 class AirTicketsItem extends React.Component{
 
 constructor(props) {
 	super(props);
 	
 }
  
 render() {
 	const Ticket = this.props.Ticket;
  return(
  
  		   <div className="Ticket">
        <div className="container">
        	<div className="row">

         		<div className="col-md-3">
          		 <span className="Ticket-Logo"></span>
         		</div>
           		
          	<div className="col-md-9">
          	  <div className="Ticket-Info">
               <ul>
               	<li>Место вылета: </li>
               	<li>Место назначения: </li>
               	<li>Количество пересадок:</li>
               	<li>Класс:</li>
               	<li>Цена:</li>
               	<li>Количество свободных мест:</li>
               </ul>
               <ul className="Ticket-Values">
               	<li><b>{Ticket.startCity}</b></li>
               	<li><b>{Ticket.endCity}</b></li>
               	<li className={(Ticket.transfers == 0) ? "GreenText" : ""}><b>{Ticket.transfers}</b></li>
               	<li className={(Ticket.class == "luxe") ? "GreenText" : ""}><b>{Ticket.class}</b></li>
               	<li><b>{Ticket.price}</b></li>
               	<li><b>{Ticket.freeplaces}</b></li>
               </ul>
           	 </div>
           </div>


         </div>
        </div>  		     
  		   </div>
  
  );
 }

 }

 export default AirTicketsItem