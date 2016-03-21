
var data = [53,20,85,32,546,66,70,31,214,102,34,27,135,92,44,33,61,51,25,118,91,127,77,34,64,27,25,35,24,142,43,291,104,23,141,38,74,210,33,53,25,67,122,37,16,95,118,37,96,18];
var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(data);
var barEnter = barUpdate.enter().append("div");
var states = ["Alabama",
	      "Alaska",
	      "Arizona",
	      "Arkansas",
	      "California",
	      "Colorado",
	      "Connecticut",
	      "Delaware",
	      "Florida",
	      "Georgia",
	      "Hawaii",
	      "Idaho",
	      "Illinois",
	      "Indiana",
	      "Iowa",
	      "Kansas",
	      "Kentucky",
	      "Louisiana",
	      "Maine",
	      "Maryland",
	      "Massachusetts",
	      "Michigan",
	      "Minnesota",
	      "Mississippi",
	      "Missouri",
	      "Montana",
	      "Nebraska",
	      "Nevada",
	      "New Hampshire",
	      "New Jersey",
	      "New Mexico",
	      "New York",
	      "North Carolina",
	      "North Dakota",
	      "Ohio",
	      "Oklahoma",
	      "Oregon",
	      "Pennsylvania",
	      "Rhode Island",
	      "South Carolina",
	      "South Dakota",
	      "Tennessee",
	      "Texas",
	      "Utah",
	      "Vermont",
	      "Virginia",
	      "Washington",
	      "West Virginia",
	      "Wisconsin",
	      "Wyoming"];

var alloted = [1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0];

barEnter.style("width", function(d,i) { 
    if (data[i] >= 60)
	return d * 3 + "px";
    else
	return d * 5 + "px"; });
barEnter.style("background-color", function(i) {
    if (alloted[i] == 0)
	return "grey";
    else
	return "steelblue"; });
barEnter.text( function(d, i) { return states[i] + " : " + d; });
