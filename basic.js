function load(){
	// about the scale in D3.js
	//1. linear scale
	/*var src_data = [0.3,0.5,0.8,0.9,1.8]
	var min_val = d3.min(src_data);
	var max_val = d3.max(src_data);
	var linear_scale = d3.scale.linear().domain([min_val,max_val]).range([0,100]);
	
	for(var i=0;i<src_data.length;i++){
		console.log('src data'+src_data[i]);
		console.log('linear scaled data'+linear_scale(src_data[i]))
	}
	
	//2. ordinal scale 
	var ord_src = [0,1,2,3,4]
	var ord_ran = ['red','blue','white']
	var ordinal_scale = d3.scale.ordinal().domain(ord_src).range(ord_ran);
	for(var i=0;i<ord_src.length;i++){
		console.log('src data'+ord_src[i]);
		console.log('ordinal data'+ordinal_scale(ord_src[i]));
	}*/
	
	//axis
	var margin = {'left':100,'top':20,'bottom':20,'right':20};
	var body = d3.select('body');
	var svg = body.append('svg').attr('width',200).attr('height',200).style('margin-left',margin.left+'px').style('margin-top',margin.top+'px').style('padding',20).style('background-color','yellow');
	var min_val = 0;
	var max_val = 40;
	// domain shows the ticks value and range shows the length(px) of the axis
	var linear_scale = d3.scale.linear().domain([min_val,max_val]).range([0,200]);
	var axis = d3.svg.axis().scale(linear_scale).orient('bottom').ticks(6);
	
	svg.append('g').call(axis);// add the axis
	
}