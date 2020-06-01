import React from "react";
import "./search-box.styles.css";
import FilterItem from '../filterItem/FilterItem';
import Zoom from "@material-ui/core/Zoom";
//import CustomButton from '../custom-button/custom-button.component';

function SearchBox(props) {
  function createFilterItem(filterItem, index) {
    return(
      <FilterItem 
       text={filterItem}
       onClick={props.removeFilter}
       id={index}
       key={index}
      />
    );
  }

  return (
    <Zoom in={true} out={true}>
      <div className="row filter">
        <div className="col-sm-auto">
         <ul className="list-group list-group-horizontal flex-wrap filter-items">
          {props.filterItems.map(createFilterItem)}
          </ul>
        </div>
        <button className="btn clear"
        type="button"
        name="clear"
        onClick={props.clear}
        >
        Clear Filters
        </button>
      </div>


    </Zoom>

  )

}

export default SearchBox;
