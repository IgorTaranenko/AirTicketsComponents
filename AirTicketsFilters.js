 
 import React from 'react';
 import FilterItem from './FilterItem.js'
 
 class AirTicketsFilters extends React.Component{
 
 constructor(props) {
 	super(props);
 	this.state = {
 		Filters: [
 		 {id: 0, checked: "", Name: "Без пересадок"},
 		 {id: 1, checked: "", Name: "1 пересадка"},
 		 {id: 2, checked: "", Name: "Есть свободные места"},
 		 {id: 3, checked: "", Name: "Люкс класс"},
 		],
 	}
 }
 
 setFilter = id => {
 	const { Filters } = this.state;
 	const index = this.state.Filters.map(Filters => Filters.id).indexOf(id);
 	(Filters[index].checked == "") ? Filters[index].checked = "true" : Filters[index].checked = "";
 	this.props.getFilter(index);
 }

 deleteFilters = () => {
 	const newFilter = this.state.Filters;
 	for (let i = 0; i < newFilter.length; i++) {
 		newFilter[i].checked = "";
 	}

 	this.setState({Filters: newFilter});
 	this.props.offFilter();
 }
 
 render() {
 	const { Filters } = this.state;
  return(
   <div className="Filters">
    <div className="Filters-Title"><h2>Фильтры:</h2></div>
    {Filters.map(Filter => {
   	return(<FilterItem key={Filter.id} Filter={Filter} setFilter={() => this.setFilter(Filter.id)} />);
    })}
    <div className="Filters-clear" onClick={this.deleteFilters}>Убрать фильтры</div>
   </div> 
  );
 }

 }

 export default AirTicketsFilters