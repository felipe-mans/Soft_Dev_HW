
var data = [44,24,35,53,53,32,66,102,91,77,38,67,222,16,95,33,51,25,25,130,36,214,156,71,107,143];
var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(data);
var barEnter = barUpdate.enter().append("div");
var states = ["Iowa",
              "New Hampshire",
              "Nevada",
              "South Carolina",
              "Alabama",
              "Arkansas",
              "Colorado",
              "Georgia",
              "Massachusetts",
              "Minnesota",
              "Oklahoma",
              "Tennessee",
              "Texas",
              "Vermont",
              "Virginia",
              "Kansas",
              "Louisiana",
              "Nebraska",
              "Maine",
              "Michigan",
              "Mississippi",
              "Florida",
              "Illinois",
              "Missouri",
              "North Carolina",
              "Ohio"];


barEnter.style("width", function(d) { return d * 5 + "px"; });
barEnter.text( function(d, i) { return states[i] + " : " + d; });
