// getVisibleOccasions
export default (occasions, { text, sortBy, startYear, endYear }) => {
    return occasions.filter(occasion => {
        const textMatch =
            occasion.title.toLowerCase().includes(text.toLowerCase()) ||
            occasion.description.toLowerCase().includes(text.toLowerCase());
 
        const startYearMatch = typeof startYear !== 'number' || startYear <= occasion.manufacture_date;
        const endYearMatch = typeof endYear !== 'number' || occasion.manufacture_date <= endYear;
 
        return textMatch && startYearMatch && endYearMatch;
    }).sort((occasion1, occasion2) => {
        if (sortBy === 'title') {
            return occasion1.title.localeCompare(occasion2.title);
        } else if (sortBy === 'manufacture_date') {
            return occasion1.manufacture_date < occasion2.manufacture_date ? -1 : 1;
        }
    });
}