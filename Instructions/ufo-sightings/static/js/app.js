var dataList = data;

var tbody = d3.select("tbody");
var filterButton = d3.select("#filter-btn");


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

    var datetimeValue = d3.select("#datetime").property("value");
    if (datetimeValue !== undefined && datetimeValue.trim() !== '') {
        filteredDataList = filteredDataList.filter(data => data.datetime === datetimeValue);
    }

    var cityValue = d3.select("#city").property("value");
    if (cityValue !== undefined && cityValue.trim() !== '') {
        filteredDataList = filteredDataList.filter(data => data.city === cityValue);
    }

    var stateValue = d3.select("#stateId").property("value");
    console.log("stateValue: [" + stateValue + "]");
    if (stateValue !== undefined && stateValue.trim() !== '') {
        filteredDataList = filteredDataList.filter(data => data.state === stateValue);
    }

    var countryValue = d3.select("#country").property("value");
    if (countryValue !== undefined && countryValue.trim() !== '') {
        filteredDataList = filteredDataList.filter(data => data.country === countryValue);
    }

    var shapeValue = d3.select("#shape").property("value");
    if (shapeValue !== undefined && shapeValue.trim() !== '') {
        filteredDataList = filteredDataList.filter(data => data.shape === shapeValue);
    }

    displayData(filteredDataList);
});
