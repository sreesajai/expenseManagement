import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';
import { DateRangePicker } from 'react-dates';
import { sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused: null,
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };
    render() {
        return (
            <div>
                <h4>Search your expenses here !</h4>
                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value));
                    }}>
                </input>
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if (e.target.value === "amount") {
                            this.props.dispatch(sortByAmount());
                        }
                        else if (e.target.value === "date") {
                            this.props.dispatch(sortByDate());
                        }
                    }}>
                    <option value="amount">amount</option>
                    <option value="date">date</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={2}
                    isOutsideRange={() => false}
                >

                </DateRangePicker>
            </div >
        )
    }

}
const mapStateToProps = (state) => {

    console.log(state);
    return {
        filters: state.filters
    };
};


export default connect(mapStateToProps)(ExpenseListFilters);

