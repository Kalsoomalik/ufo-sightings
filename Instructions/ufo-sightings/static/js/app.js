var dataList = data;

var tbody = d3.select("tbody");
var filterButton = d3.select("#filter-btn");
var clearButton = d3.select("#clear-btn");


// Initial display
displayData(dataList);

// Function to display data in table
function displayData(dataList) {
    tbody.html("");
    dataList.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
}

// Event handlers for filter button
filterButton.on("click", function () {
    d3.event.preventDefault();
    var filteredDataList = dataList;
    var datetimeValue = d3.select("#datetimeId").property("value");
    var outputFormat = d3.timeFormat("%-m/%-d/%Y");
    var parseDate = d3.timeParse("%Y-%m-%d");

    if (datetimeValue !== undefined && datetimeValue.trim() !== '') {
        datetimeValue = outputFormat(parseDate(datetimeValue));
        filteredDataList = filteredDataList.filter(data => data.datetime === datetimeValue);
    }

    var cityValue = d3.select("#city").property("value");
    if (cityValue !== undefined && cityValue.trim() !== '') {
        filteredDataList = filteredDataList.filter(data => data.city === cityValue);
    }

    var stateValue = d3.select("#stateId").property("value");
    if (stateValue !== undefined && stateValue.trim() !== '---') {
        filteredDataList = filteredDataList.filter(data => data.state === stateValue);
    }

    var countryValue = d3.select("#country").property("value");
    if (countryValue !== undefined && countryValue.trim() !== '---') {
        filteredDataList = filteredDataList.filter(data => data.country === countryValue);
    }

    var shapeValue = d3.select("#shape").property("value");
    if (shapeValue !== undefined && shapeValue.trim() !== '---') {
        filteredDataList = filteredDataList.filter(data => data.shape === shapeValue);
    }

    displayData(filteredDataList);
});


// Event handlers for clear button
clearButton.on("click", function () {

    // Setting initial value based on available data
    // This would not filter data until filter button is pressed
    d3.select("#datetimeId").property("value", "2010-01-01");
    d3.select("#city").property("value", "");
    d3.select("#stateId").property("value", "---");
    d3.select("#country").property("value", "---");
    d3.select("#shape").property("value", "---");

    // display full data without filter
    displayData(dataList);

});
