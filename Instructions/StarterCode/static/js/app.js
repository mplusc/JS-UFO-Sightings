var tbody = d3.select("tbody");
var submit = d3.select("#filter-btn");

submit.on("click", function() {
    d3.event.preventDefault();
    tbody.html("")

    var dateInput = d3.select("#datetime");
    var dateValue = dateInput.property("value");
    var filteredData = data.filter(data => data.datetime === dateValue);
    filteredData.forEach(function(UFO) {
        console.log(filteredData)
        
        var row = tbody.append("tr");
        
        Object.entries(UFO).forEach(function([key, value]) {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });

});