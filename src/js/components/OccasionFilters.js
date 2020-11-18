import React from 'react';
import { connect } from 'react-redux';
import { filterText, startYear, endYear, sortBy } from '../actions/filters';

class OccasionFilters extends React.Component {
    constructor(props) {
        super(props);
        this.filterYear = this.filterYear.bind(this);
        console.log(props);
    }

    filterYear() {
        let start = (+this.startYear.value) !== 0 ? (+this.startYear.value) : undefined;
        let end = (+this.endYear.value) !== 0 ? (+this.endYear.value) : undefined;
        this.props.dispatch(startYear(start));
        this.props.dispatch(endYear(end));
    }

    render() {
        return (
            <div className="bg-white">
                <input type='text' placeholder='search'
                    value={this.props.filters.text}
                    onChange={(e) => {
                        this.props.dispatch(filterText(e.target.value));
                    }}></input>
 
                sorted By:
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        this.props.dispatch(sortBy(e.target.value));
                    }}>
                    <option value='none'>---</option>
                    <option value='title'>Title</option>
                    <option value='published'>Published</option>
                </select>
                <br /><br />
 
                <input type='number' placeholder='startYear' style={{ width: 80 }}
                    ref={el => this.startYear = el}></input>
                <input type='number' placeholder='endYear' style={{ width: 80 }}
                    ref={el => this.endYear = el}></input>
 
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={this.filterYear}>Filter</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(OccasionFilters);