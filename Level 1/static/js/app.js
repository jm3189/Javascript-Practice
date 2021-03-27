var tableData = data;

// YOUR CODE HERE!
// Starter Code

// Creating References
var tbody = d3.select("tbody");


function buildTable(data){
    tbody.html("");


// Inputing data for HTML
    data.forEach((dataRow) =>{
        const row = tbody.append("tr");

        Object.values(dataRow).forEach((val) =>{
            let cell = row.append("td");
                cell.text(val);
        }
        )    
    });
}  

//click function for filter
function handleClick(){
    const date = d3.select("#datetime"). property("value");
    let filteredData = tableData;


    if (date){
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    // rebuild table if filtered data is used
    buildTable(filteredData);
}

d3.selectAll("#filter-btn").on("click", handleClick);

//build data for loading
buildTable(tableData);

