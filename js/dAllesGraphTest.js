var fib = []; 
var screenWidth = window.innerWidth - 40;

/* generates a fibonacci sequence of end+1 elements. 
*  Start is 1 or 0. Traditionally a fibonacci sequence starts with 1, but modern applicaions
*  start at 0 so you can set it either way from the function call. */
function generateFibonacci(start,end){ 
	fib[0] = start;
	fib[1] = 1;

	console.log(fib[0]);
	console.log(fib[1]); // the console log below doesn't log the initial numnbers so added this.

	for(var i = 2; i<=end; i++)
	{
	    fib[i] = fib[i-2] + fib[i-1];
	    console.log(fib[i]);  // added log of the numbers as part of the coding test requirement
	}
}

generateFibonacci(1,49);

var x = d3.scale.linear()
    .domain([0, d3.max(fib)])
    .range([0, screenWidth]);

d3.select(".chart").selectAll("div").data(fib).enter().append("div")
    .style("width", function(d) { return x(d) + "px"; })
    .style("height", function(d) { return x(d/3) + "px"; })
    .text(function(d) { return d; });