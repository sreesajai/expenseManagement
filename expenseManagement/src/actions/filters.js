//SET-TEXT-FILTER
export const setTextFilter = (text) => ({
    type: 'SET_TEXTFILTER',
    text
});

//SORT-BY DATE AND AMOUNT
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

//SET START AND END DATE
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});