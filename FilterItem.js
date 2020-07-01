 
 import React from 'react';
 import ReactDOM from 'react-dom';
 
 class FilterItem extends React.Component{
  
  constructor(props) {
  	super(props);
  	this.state = {
  		isChecked: this.props.Filter.checked,
  	}

  }

 inputChange = (event) => {
 	const { isChecked } = this.state;
 	!isChecked ? this.setState({isChecked: "true"}) : this.setState({isChecked: ""})
 }
  
 
 render() {
 	const Filter = this.props.Filter;
  return(
   <div className="Filter">
    <label><input
     id={Filter.id} 
     checked={Filter.checked} 
     onClick={this.props.setFilter} 
     onChange={this.inputChange}
     type="checkbox" 
    />{Filter.Name}</label>
   </div>
  );
 }

 }

 export default FilterItem