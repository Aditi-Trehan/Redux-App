import React, { Component } from "react";
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';

class Footer extends Component {
    render() {
        return (
            <div>
                <p>Show:
                </p>
                <FilterLink filter={VisibilityFilters.SHOW_ALL}>
                    All
        </FilterLink>
                
                <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
                    Active
        </FilterLink>
                <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
                    Completed
        </FilterLink>

            </div>
        );
    }
}

export default Footer;