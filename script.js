const data = await d3.csv("data.csv");
const position = await d3.json("position.json");

const width = 1600;
const height = 600;
const dx = 0.4
const dy = 0.4
const shiftx = width*0.6
const shifty = height*1.2
const rectwidth = 400
const rectheight = 100
const linecolor = "maroon"
const linewidth = 1.5
const rectradius = 8

let counter = 0;

function createRectWithWrappedText(svg, x, y, text,body,flag) {
  if(flag == 9){
    const foreignObject = svg.append("foreignObject")
    .attr("x", x)
    .attr("y", y)
    .attr("width", rectwidth)
    .attr("height", rectheight*1.8)
  
  svg.append("rect")
    .attr("x", x).attr("rx",rectradius)
    .attr("y", y).attr("ry",rectradius).classed(text,true)
    .attr("width", rectwidth)
    .attr("height", rectheight*1.8)
    .attr("fill", "none")
    .attr("stroke", "maroon")
    .attr("stroke-width", 3.5);

  // Create a foreignObject to embed HTML content (for wrapped text)

  // Add a div inside foreignObject for wrapped text
  const div = foreignObject.append("xhtml:section")
    .style("width", rectwidth)
    .style("height", rectheight*1.8)
    .style("overflow", "hidden")
    .style("text-align", "center")
    .style("font-size", "13px")
    .style("padding","2px").attr("class", text.split(" ")[0].split(".")[0] + counter++);


  // Add the wrapped text
  div.html(`<img style="margin-top:3px;margin-bottom:-3px;height:100px !important;" width="100" src="./assets/9.jpg"><h4 style="margin-bottom:0px; color: #800000;font-weight: bolder; font-size: 16px">${text}</h4><p style="margin-top:0px;font-style: italic;color: #800000; font-size: 13px">${body}</p>`);
  return
  }
  if(flag && flag!=1){
    const foreignObject = svg.append("foreignObject")
    .attr("x", x)
    .attr("y", y)
    .attr("width", rectwidth)
    .attr("height", rectheight)
  
  svg.append("rect")
    .attr("x", x).attr("rx",rectradius)
    .attr("y", y).attr("ry",rectradius).classed(text,true)
    .attr("width", rectwidth)
    .attr("height", rectheight)
    .attr("fill", "none")
    .attr("stroke", "maroon")
    .attr("stroke-width", 3.5);

  // Create a foreignObject to embed HTML content (for wrapped text)

  // Add a div inside foreignObject for wrapped text
  const div = foreignObject.append("xhtml:section")
    .style("width", rectwidth)
    .style("height", rectheight)
    .style("overflow", "hidden")
    .style("text-align", "center")
    .style("font-size", "13px")
    .style("padding","2px").attr("class", text.split(" ")[0].split(".")[0] + counter++);


  // Add the wrapped text
  div.html(`<img src="./assets/${flag}.jpg" width="80" height:"${rectheight}" style="float:left;margin:3px;"><h4 style="margin-bottom:0px; color: #800000;font-weight: bolder;margin-top:4px; font-size: 16px">${text}</h4><p style="margin-top:0px;font-style: italic;color: #800000; font-size: 13px">${body}</p>`);
  return
  }
  if(flag == 1){
    const foreignObject = svg.append("foreignObject")
    .attr("x", x)
    .attr("y", y-rectheight)
    .attr("width", rectwidth)
    .attr("height", rectheight*2)
  
  svg.append("rect")
    .attr("x", x).attr("rx",rectradius)
    .attr("y", y-rectheight).attr("ry",rectradius).classed(text,true)
    .attr("width", rectwidth)
    .attr("height", rectheight*2)
    .attr("fill", "none")
    .attr("stroke", "maroon")
    .attr("stroke-width", 3.5);

  // Create a foreignObject to embed HTML content (for wrapped text)

  // Add a div inside foreignObject for wrapped text
  const div = foreignObject.append("xhtml:section")
    .style("width", rectwidth)
    .style("height", rectheight*2)
    .style("overflow", "hidden")
    .style("text-align", "center")
    .style("font-size", "13px")
    .style("padding","2px").attr("class", text.split(" ")[0].split(".")[0] + counter++);


  // Add the wrapped text
  div.html(`<img style="margin-top:3px;margin-bottom:-3px;height:100px !important;" width="100" height="100" src="./assets/1.jpg"><h4 style="margin-bottom:0px; color: #800000;font-weight: bolder; font-size: 16px">${text}</h4><p style="margin-top:0px;font-style: italic;color: #800000; font-size: 13px">${body}</p>`);
  return
  }
  const foreignObject = svg.append("foreignObject")
    .attr("x", x)
    .attr("y", y)
    .attr("width", rectwidth)
    .attr("height", rectheight)
  
  svg.append("rect")
    .attr("x", x).attr("rx",rectradius)
    .attr("y", y).attr("ry",rectradius).classed(text,true)
    .attr("width", rectwidth)
    .attr("height", rectheight)
    .attr("fill", "none")
    .attr("stroke", "maroon")
    .attr("stroke-width", 3.5);

  // Create a foreignObject to embed HTML content (for wrapped text)

  // Add a div inside foreignObject for wrapped text
  const div = foreignObject.append("xhtml:section")
    .style("width", rectwidth)
    .style("height", rectheight)
    .style("overflow", "hidden")
    .style("text-align", "center")
    .style("font-size", "13px")
    .style("padding","2px").attr("class",text.split(" ")[0].split(".")[0] +  counter++);


  // Add the wrapped text
  div.html(`<h4 style="margin-bottom:0px; color: #800000;font-weight: bolder; font-size: 16px">${text}</h4><p style="margin-top:0px;font-style: italic;color: #800000; font-size: 13px">${body}</p>`);
  return
}

function getCoordinate(name) {
  const index = position.findIndex(d => d.name === name);
  return index !== -1 ? { x: position[index].x, y: position[index].y } : null;
}

const mysvg = d3.select("#container").append("svg").attr("width", 2400).attr("height", 3750);
const svg = mysvg.append("g")
position.forEach(element => {
  createRectWithWrappedText(svg,element.x*width*dx + shiftx,element.y*height*dy + shifty,element.name,element.body,element.flag)
});


// First set of lines (links1)
// First set of curved lines (links1)

const lineGenerator = d3.line()
    .x(d => d[0])
    .y(d => d[1])
    .curve(d3.curveBasis); 

const links1 = svg.selectAll(".links1")
  .data(data)
  .enter().append("path")
  .attr("class", "links1")
  .attr("d", d => {
    const sourceCoords = getCoordinate(d.source);
    const targetX = getCoordinate(d.target).x * width * dx + shiftx + rectwidth / 2
    const startX = sourceCoords.x * width * dx + shiftx + rectwidth / 2;
    const startY = sourceCoords.y * height * dy + shifty + rectheight;
    let endX = startX
    let controlX  = startX
    const endY = startY + 20;
    
    const controlY = startY + 10;
    return lineGenerator([[startX,startY],[controlX,controlY],[endX,endY]])
  })
  .attr("stroke", linecolor)
  .attr("stroke-width", linewidth).attr("fill","none");


// Second set of lines (links2)
const links2 = svg.selectAll(".links2")
  .data(data)
  .enter().append("line")
  .attr("class", "links2")
  .attr("x1", d => getCoordinate(d.source).x * width * dx + shiftx + rectwidth / 2)
  .attr("y1", d => getCoordinate(d.source).y * height * dy + shifty + rectheight + 20)
  .attr("x2", d => getCoordinate(d.target).x * width * dx + shiftx + rectwidth / 2)
  .attr("y2", d => getCoordinate(d.source).y * height * dy + shifty + rectheight + 20)
  .attr("stroke", linecolor)
  .attr("stroke-width", linewidth);

// Third set of lines (links)
const links = svg.selectAll(".links")
  .data(data)
  .enter().append("line")
  .attr("class", "links")
  .attr("x1", d => getCoordinate(d.target).x * width * dx + shiftx + rectwidth / 2)
  .attr("y1", d => getCoordinate(d.source).y * height * dy + shifty + rectheight + 20)
  .attr("x2", d => getCoordinate(d.target).x * width * dx + shiftx + rectwidth / 2)
  .attr("y2", d => getCoordinate(d.target).y * height * dy + shifty)
  .attr("stroke", linecolor)
  .attr("stroke-width", linewidth)
  .attr("marker-end", "url(#arrow)");


svg.append("defs").append("marker")
  .attr("id", "arrow")
  .attr("viewBox", "0 0 10 10")
  .attr("refX", 8)
  .attr("refY", 5)
  .attr("markerWidth", 6)
  .attr("markerHeight", 6)
  .attr("orient", "auto-start-reverse")
  .append("path").attr("fill",linecolor)
  .attr("d", "M 0 0 L 10 5 L 0 10 z");


svg.append("line")
.attr("x1",getCoordinate("Peter Werenfels").x * width * dx + shiftx + rectwidth / 2 + 10)
.attr("y1",getCoordinate("Peter Werenfels").y * height * dy + shifty + rectheight)
.attr("x2",getCoordinate("Jacob Bernoulli").x * width * dx + shiftx + rectwidth / 2 + 10)
.attr("y2",getCoordinate("Jacob Bernoulli").y * height * dy + shifty)
.attr("stroke", linecolor)
  .attr("stroke-width", linewidth)
  .attr("marker-end", "url(#arrow)");

// svg.append("line")
// .attr("x1",getCoordinate("Johannes Kepler").x * width * dx + shiftx + rectwidth / 2 - 10)
// .attr("y1",getCoordinate("Johannes Kepler").y * height * dy + shifty + rectheight)
// .attr("x2",getCoordinate("Willebrord (Snel van Royen) Snellius").x * width * dx + shiftx + rectwidth / 2 - 10)
// .attr("y2",getCoordinate("Willebrord (Snel van Royen) Snellius").y * height * dy + shifty)
// .attr("stroke", linecolor)
//   .attr("stroke-width", linewidth)
//   .attr("marker-end", "url(#arrow)");

svg.append("line")
.attr("x1",getCoordinate("Pierre-Simon Laplace").x * width * dx + shiftx + rectwidth / 2 - 10)
.attr("y1",getCoordinate("Pierre-Simon Laplace").y * height * dy + shifty + rectheight)
.attr("x2",getCoordinate("Siméon Denis Poisson").x * width * dx + shiftx + rectwidth / 2 - 10)
.attr("y2",getCoordinate("Siméon Denis Poisson").y * height * dy + shifty)
.attr("stroke", linecolor)
  .attr("stroke-width", linewidth)
  .attr("marker-end", "url(#arrow)");


      svg.append("line")
    .attr("x1",getCoordinate("Oscar Carl Wilhelm Hermann Knoblauch").x * width * dx + shiftx + rectwidth / 2)
    .attr("y1",getCoordinate("Oscar Carl Wilhelm Hermann Knoblauch").y * height * dy + shifty + rectheight+20)
    .attr("x2",getCoordinate("Max Jakob").x * width * dx + shiftx + rectwidth / 2)
    .attr("y2",getCoordinate("Oscar Carl Wilhelm Hermann Knoblauch").y * height * dy + shifty + rectheight+20)
    .attr("stroke", linecolor)
      .attr("stroke-width", linewidth).attr("stroke-dasharray", "5,5");
      
      svg.append("line")
      .attr("x1",getCoordinate("Gottfried Wilhelm Leibniz").x * width * dx + shiftx + rectwidth / 2)
      .attr("y1",getCoordinate("Gottfried Wilhelm Leibniz").y * height * dy + shifty + rectheight)
      .attr("x2",getCoordinate("Nicolas Malebranche").x * width * dx + shiftx + rectwidth / 2)
      .attr("y2",getCoordinate("Nicolas Malebranche").y * height * dy + shifty)
      .attr("stroke", linecolor)
      .attr("stroke-width", linewidth).attr("stroke-dasharray", "5,5").attr("marker-end", "url(#arrow)");
      
      svg.append("line")
    .attr("x1",getCoordinate("Max Jakob").x * width * dx + shiftx + rectwidth / 2)
    .attr("y1",getCoordinate("Oscar Carl Wilhelm Hermann Knoblauch").y * height * dy + shifty + rectheight+20)
    .attr("x2",getCoordinate("Max Jakob").x * width * dx + shiftx + rectwidth / 2)
    .attr("y2",getCoordinate("Max Jakob").y * height * dy + shifty)
    .attr("stroke", linecolor)
      .attr("stroke-width", linewidth).attr("stroke-dasharray", "5,5").attr("marker-end", "url(#arrow)");

      svg.append("line")
      .attr("x1",getCoordinate("Tycho (Tyge Ottesen) Brahe").x * width * dx + shiftx + rectwidth / 2 + 10)
      .attr("y1",getCoordinate("Tycho (Tyge Ottesen) Brahe").y * height * dy + shifty + rectheight)
      .attr("x2",getCoordinate("Tycho (Tyge Ottesen) Brahe").x * width * dx + shiftx + rectwidth / 2 + 10)
      .attr("y2",getCoordinate("Tycho (Tyge Ottesen) Brahe").y * height * dy + shifty + rectheight + 10)
      .attr("stroke", linecolor)
        .attr("stroke-width", linewidth).attr("stroke-dasharray", "5,5");
      svg.append("line")
      .attr("x1",getCoordinate("Tycho (Tyge Ottesen) Brahe").x * width * dx + shiftx + rectwidth / 2 + 10)
      .attr("y1",getCoordinate("Tycho (Tyge Ottesen) Brahe").y * height * dy + shifty + rectheight + 10)
      .attr("x2",getCoordinate("Willebrord (Snell van Royen) Snellius").x * width * dx + shiftx + rectwidth / 2 - 10)
      .attr("y2",getCoordinate("Tycho (Tyge Ottesen) Brahe").y * height * dy + shifty + rectheight + 10)
      .attr("stroke", linecolor)
        .attr("stroke-width", linewidth).attr("stroke-dasharray", "5,5");

      svg.append("line")
      .attr("x1",getCoordinate("Willebrord (Snell van Royen) Snellius").x * width * dx + shiftx + rectwidth / 2 - 10)
      .attr("y1",getCoordinate("Tycho (Tyge Ottesen) Brahe").y * height * dy + shifty + rectheight+10)
      .attr("x2",getCoordinate("Willebrord (Snell van Royen) Snellius").x * width * dx + shiftx + rectwidth / 2 - 10)
      .attr("y2",getCoordinate("Willebrord (Snell van Royen) Snellius").y * height * dy + shifty)
      .attr("stroke", linecolor)
        .attr("stroke-width", linewidth).attr("stroke-dasharray", "5,5").attr("marker-end", "url(#arrow)");

      svg.append("line")
      .attr("x1",getCoordinate("Johannes Kepler").x * width * dx + shiftx + rectwidth / 2 + 10)
      .attr("y1",getCoordinate("Johannes Kepler").y * height * dy + shifty + rectheight)
      .attr("x2",getCoordinate("Johannes Kepler").x * width * dx + shiftx + rectwidth / 2 + 10)
      .attr("y2",getCoordinate("Johannes Kepler").y * height * dy + shifty + rectheight + 10)
      .attr("stroke", linecolor)
        .attr("stroke-width", linewidth).attr("stroke-dasharray", "5,5");
      svg.append("line")
      .attr("x1",getCoordinate("Johannes Kepler").x * width * dx + shiftx + rectwidth / 2 + 10)
      .attr("y1",getCoordinate("Johannes Kepler").y * height * dy + shifty + rectheight + 10)
      .attr("x2",getCoordinate("Willebrord (Snell van Royen) Snellius").x * width * dx + shiftx + rectwidth / 2 - 10)
      .attr("y2",getCoordinate("Johannes Kepler").y * height * dy + shifty + rectheight + 10)
      .attr("stroke", linecolor)
        .attr("stroke-width", linewidth).attr("stroke-dasharray", "5,5");

      svg.append("line")
      .attr("x1",getCoordinate("Willebrord (Snell van Royen) Snellius").x * width * dx + shiftx + rectwidth / 2)
      .attr("y1",getCoordinate("Johannes Kepler").y * height * dy + shifty + rectheight+10)
      .attr("x2",getCoordinate("Willebrord (Snell van Royen) Snellius").x * width * dx + shiftx + rectwidth / 2)
      .attr("y2",getCoordinate("Willebrord (Snell van Royen) Snellius").y * height * dy + shifty)
      .attr("stroke", linecolor)
        .attr("stroke-width", linewidth).attr("stroke-dasharray", "5,5").attr("marker-end", "url(#arrow)");
      

      svg.append("line")
    .attr("x1",getCoordinate("Carl Paul Gottfried von Linde").x * width * dx + shiftx + rectwidth / 2)
    .attr("y1",getCoordinate("Carl Paul Gottfried von Linde").y * height * dy + shifty + rectheight)
    .attr("x2",getCoordinate("Carl Paul Gottfried von Linde").x * width * dx + shiftx + rectwidth / 2)
    .attr("y2",getCoordinate("Carl Paul Gottfried von Linde").y * height * dy + shifty + rectheight+20)
    .attr("stroke", linecolor)
      .attr("stroke-width", linewidth).attr("stroke-dasharray", "5,5");

      svg.append("line")
    .attr("x1",getCoordinate("Carl Paul Gottfried von Linde").x * width * dx + shiftx + rectwidth / 2)
    .attr("y1",getCoordinate("Carl Paul Gottfried von Linde").y * height * dy + shifty + rectheight+20)
    .attr("x2",getCoordinate("Oscar Carl Wilhelm Hermann Knoblauch").x * width * dx + shiftx + rectwidth / 2-20)
    .attr("y2",getCoordinate("Carl Paul Gottfried von Linde").y * height * dy + shifty + rectheight+20)
    .attr("stroke", linecolor)
      .attr("stroke-width", linewidth).attr("stroke-dasharray", "5,5");

      svg.append("line")
    .attr("x1",getCoordinate("Oscar Carl Wilhelm Hermann Knoblauch").x * width * dx + shiftx + rectwidth / 2-20)
    .attr("y1",getCoordinate("Carl Paul Gottfried von Linde").y * height * dy + shifty + rectheight+20)
    .attr("x2",getCoordinate("Oscar Carl Wilhelm Hermann Knoblauch").x * width * dx + shiftx + rectwidth / 2-20)
    .attr("y2",getCoordinate("Oscar Carl Wilhelm Hermann Knoblauch").y * height * dy + shifty)
    .attr("stroke", linecolor)
      .attr("stroke-width", linewidth).attr("stroke-dasharray", "5,5").attr("marker-end", "url(#arrow)");


      svg.append("line")
    .attr("x1",getCoordinate("Gustav Anton Zeuner").x * width * dx + shiftx + rectwidth / 2)
    .attr("y1",getCoordinate("Gustav Anton Zeuner").y * height * dy + shifty + rectheight)
    .attr("x2",getCoordinate("Gustav Anton Zeuner").x * width * dx + shiftx + rectwidth / 2)
    .attr("y2",getCoordinate("Gustav Anton Zeuner").y * height * dy + shifty + rectheight+20)
    .attr("stroke", linecolor)
      .attr("stroke-width", linewidth);

      svg.append("line")
    .attr("x1",getCoordinate("Gustav Anton Zeuner").x * width * dx + shiftx + rectwidth / 2)
    .attr("y1",getCoordinate("Gustav Anton Zeuner").y * height * dy + shifty + rectheight+20)
    .attr("x2",getCoordinate("Carl Paul Gottfried von Linde").x * width * dx + shiftx + rectwidth / 2-10)
    .attr("y2",getCoordinate("Gustav Anton Zeuner").y * height * dy + shifty + rectheight+20)
    .attr("stroke", linecolor)
      .attr("stroke-width", linewidth);

      svg.append("line")
    .attr("x1",getCoordinate("Carl Paul Gottfried von Linde").x * width * dx + shiftx + rectwidth / 2-10)
    .attr("y1",getCoordinate("Gustav Anton Zeuner").y * height * dy + shifty + rectheight+20)
    .attr("x2",getCoordinate("Carl Paul Gottfried von Linde").x * width * dx + shiftx + rectwidth / 2-10)
    .attr("y2",getCoordinate("Carl Paul Gottfried von Linde").y * height * dy + shifty)
    .attr("stroke", linecolor)
      .attr("stroke-width", linewidth).attr("marker-end", "url(#arrow)");


      svg.append("line")
    .attr("x1",getCoordinate("Franz Reuleaux").x * width * dx + shiftx + rectwidth / 2)
    .attr("y1",getCoordinate("Franz Reuleaux").y * height * dy + shifty + rectheight)
    .attr("x2",getCoordinate("Franz Reuleaux").x * width * dx + shiftx + rectwidth / 2)
    .attr("y2",getCoordinate("Franz Reuleaux").y * height * dy + shifty + rectheight+20)
    .attr("stroke", linecolor)
      .attr("stroke-width", linewidth);

      svg.append("line")
    .attr("x1",getCoordinate("Franz Reuleaux").x * width * dx + shiftx + rectwidth / 2)
    .attr("y1",getCoordinate("Franz Reuleaux").y * height * dy + shifty + rectheight+20)
    .attr("x2",getCoordinate("Carl Paul Gottfried von Linde").x * width * dx + shiftx + rectwidth / 2+10)
    .attr("y2",getCoordinate("Franz Reuleaux").y * height * dy + shifty + rectheight+20)
    .attr("stroke", linecolor)
      .attr("stroke-width", linewidth);

      svg.append("line")
    .attr("x1",getCoordinate("Carl Paul Gottfried von Linde").x * width * dx + shiftx + rectwidth / 2+10)
    .attr("y1",getCoordinate("Franz Reuleaux").y * height * dy + shifty + rectheight+20)
    .attr("x2",getCoordinate("Carl Paul Gottfried von Linde").x * width * dx + shiftx + rectwidth / 2+10)
    .attr("y2",getCoordinate("Carl Paul Gottfried von Linde").y * height * dy + shifty)
    .attr("stroke", linecolor)

      .attr("stroke-width", linewidth).attr("marker-end", "url(#arrow)");

      svg.append("line")
      .attr("x1",getCoordinate("Gottfried Wilhelm Leibniz").x * width * dx + shiftx * 0.777+ rectwidth / 2)
      .attr("y1",getCoordinate("Gottfried Wilhelm Leibniz").y * height * dy + shifty + rectheight + 10)
      .attr("x2",getCoordinate("Gottfried Wilhelm Leibniz").x * width * dx + shiftx + rectwidth / 2)
      .attr("y2",getCoordinate("Gottfried Wilhelm Leibniz").y * height * dy + shifty + rectheight + 10)
    .attr("stroke", linecolor)
    .attr("stroke-width", linewidth).attr("stroke-dasharray", "5,5").attr("marker-end", "url(#arrow)");
  

    svg.append("rect")
    .attr("width", rectwidth/1.3).attr("rx",rectradius)
    .attr("height", rectheight/2).attr("ry",rectradius)
    .attr("fill","none")
    .attr("stroke", linecolor)
    .attr("stroke-width", linewidth+1)
    .attr("x", getCoordinate("Carl Paul Gottfried von Linde").x*width*dx+shiftx+rectwidth/2+10)
    .attr("y", getCoordinate("Carl Paul Gottfried von Linde").y*height*dy+shifty+rectheight+30);


  const foreignObject = svg.append("foreignObject")
    .attr("x", getCoordinate("Carl Paul Gottfried von Linde").x*width*dx+shiftx+rectwidth/2+10)
    .attr("y", getCoordinate("Carl Paul Gottfried von Linde").y*height*dy+shifty+rectheight+30)
    .attr("width", rectwidth/1.3)
    .attr("height", rectheight/2);
  
    const div = foreignObject.append("xhtml:section")
    .style("width", rectwidth/1.3)
    .style("height", rectheight/2)
    .style("overflow", "hidden")
    .style("text-align", "center")
    .style("font-size", "13px")
    .style("padding","5px");

    div.html("Founded Inst. of Technical Physics TUM <a href='/reference.html'>[2]</a> <br>Hired Oscar Knoblauch as the first director")

    svg.append("line")
    .attr("x1",getCoordinate("Carl Paul Gottfried von Linde").x*width*dx+shiftx+rectwidth+10)
    .attr("y1",getCoordinate("Carl Paul Gottfried von Linde").y*height*dy+shifty+rectheight+30)
    .attr("x2",getCoordinate("Carl Paul Gottfried von Linde").x*width*dx+shiftx+rectwidth+10)
    .attr("y2",getCoordinate("Carl Paul Gottfried von Linde").y*height*dy+shifty+rectheight + 20)
    .attr("stroke", linecolor)
      .attr("stroke-width", linewidth).attr("stroke-dasharray", "5,5").attr("marker-end", "url(#arrow)");
      
      svg.append("rect")
      .attr("width", rectwidth/2).attr("rx",rectradius)
      .attr("height", rectheight/2).attr("ry",rectradius)
      .attr("fill","none")
      .attr("stroke", linecolor)
      .attr("stroke-width", linewidth+1)
      .attr("x", getCoordinate("Carl Paul Gottfried von Linde").x*width*dx+shiftx+rectwidth/2+45)
      .attr("y", getCoordinate("Carl Paul Gottfried von Linde").y*height*dy+shifty+rectheight*2.5);
      
      
      const foreignObject1 = svg.append("foreignObject")
      .attr("x", getCoordinate("Carl Paul Gottfried von Linde").x*width*dx+shiftx+rectwidth/2+45)
      .attr("y", getCoordinate("Carl Paul Gottfried von Linde").y*height*dy+shifty+rectheight*2.5)
      .attr("width", rectwidth/2)
      .attr("height", rectheight/2);
      
      const div1 = foreignObject1.append("xhtml:section")
      .style("width", rectwidth/2)
      .style("height", rectheight/2)
      .style("overflow", "hidden")
      .style("text-align", "center")
      .style("font-size", "13px")
      .style("padding","5px");
      
      div1.html("Post-doctoral student of Oscar Knoblauch <a href='/reference.html'>[3]</a>")
      
      svg.append("line")
      .attr("x1",getCoordinate("Carl Paul Gottfried von Linde").x*width*dx+shiftx+rectwidth*0.75+45)
      .attr("y1",getCoordinate("Carl Paul Gottfried von Linde").y*height*dy+shifty+rectheight*3)
      .attr("x2",getCoordinate("Carl Paul Gottfried von Linde").x*width*dx+shiftx+rectwidth*0.75+45)
      .attr("y2",getCoordinate("Carl Paul Gottfried von Linde").y*height*dy+shifty+rectheight*3 + 10)
      .attr("stroke", linecolor)
        .attr("stroke-width", linewidth).attr("stroke-dasharray", "5,5").attr("marker-end", "url(#arrow)");
        
        svg.append("rect")
        .attr("width", rectwidth/2).attr("rx",rectradius)
        .attr("height", rectheight/2).attr("ry",rectradius)
        .attr("fill","none")
        .attr("stroke", linecolor)
        .attr("stroke-width", linewidth+1)
        .attr("x", getCoordinate("Gottfried Wilhelm Leibniz").x*width*dx+shiftx - rectheight*1.5 - 65)
        .attr("y", getCoordinate("Gottfried Wilhelm Leibniz").y*height*dy+shifty+rectheight*0.6 + 30);
        
        
        const foreignObject2 = svg.append("foreignObject")
        .attr("x", getCoordinate("Gottfried Wilhelm Leibniz").x*width*dx+shiftx - rectheight*1.5 - 65)
        .attr("y", getCoordinate("Gottfried Wilhelm Leibniz").y*height*dy+shifty+rectheight*0.6 + 30)
        .attr("width", rectwidth/2)
        .attr("height", rectheight/2);
        
        const div2 = foreignObject2.append("xhtml:section")
        .style("width", rectwidth/2)
        .style("height", rectheight/2)
        .style("overflow", "hidden")
        .style("text-align", "center")
        .style("font-size", "13px")
        .style("padding","5px");
        
        div2.html("Personal correspondence and discussions on maths <a href='/reference.html'>[4]</a>")
        svg.append("line")
        .attr("x1",getCoordinate("Johannes Kepler").x*width*dx+shiftx + rectheight*2.5 - 25)
        .attr("y1",getCoordinate("Johannes Kepler").y*height*dy+shifty+rectheight*0.7 + 60)
        .attr("x2",getCoordinate("Johannes Kepler").x*width*dx+shiftx + rectheight*2.5 - 25)
        .attr("y2",getCoordinate("Johannes Kepler").y*height*dy+shifty+rectheight*0.7 + 40)
        .attr("stroke", linecolor)
          .attr("stroke-width", linewidth).attr("stroke-dasharray", "5,5").attr("marker-end", "url(#arrow)");

    svg.append("rect")
  .attr("width", rectwidth/2).attr("rx",rectradius)
  .attr("height", rectheight/3).attr("ry",rectradius)
  .attr("fill","none")
  .attr("stroke", linecolor)
  .attr("stroke-width", linewidth+1)
  .attr("x", getCoordinate("Johannes Kepler").x*width*dx+shiftx + rectheight*0.6 - 25)
  .attr("y", getCoordinate("Johannes Kepler").y*height*dy+shifty+rectheight*0.7 + 60);


  const foreignObject3 = svg.append("foreignObject")
    .attr("x", getCoordinate("Johannes Kepler").x*width*dx+shiftx + rectheight*0.6 - 25)
    .attr("y", getCoordinate("Johannes Kepler").y*height*dy+ shifty+ rectheight*0.7 + 60)
    .attr("width", rectwidth/2)
    .attr("height", rectheight/3);
  
    const div3 = foreignObject3.append("xhtml:section")
    .style("width", rectwidth/2)
    .style("height", rectheight/2)
    .style("overflow", "hidden")
    .style("text-align", "center")
    .style("font-size", "13px")
    .style("padding","5px");

    div3.html("Worked in their lab <a href='/reference.html'>[4]</a>")



    // const footer = svg.append("foreignObject")
    // .attr("x", getCoordinate("Richard Jay Goldstein").x*width*dx+shiftx)
    // .attr("y", getCoordinate("Richard Jay Goldstein").y*height*dy+shifty)
    // .attr("width", rectwidth)
    // .attr("height", rectheight);

    // const ff = footer.append("footer").style("width", rectwidth/1.3)
    // .style("height", rectheight/2)
    // .style("overflow", "hidden")
    // .style("text-align", "center")
    // .style("font-size", "13px")
    // .style("padding","5px");

    // ff.html('Developed by Sameer Yadav and Naman Jaiswal (IIT Kanpur)')


  //   const zoom = d3.zoom()
//   .scaleExtent([0.6, 1]) 
//   .extent([[0,0],[2400,3600]])// Set the zoom scale limits (adjust as needed)
//   .on("zoom",zoomed );

// svg.call(zoom);

// function zoomed(event) {
//   const transform = event.transform;
//   // Apply the transformation to all elements
//   svg.attr("transform", transform);

//   // document.querySelector("svg").scrollIntoView()
// }


const zoom = d3.zoom()
  .scaleExtent([0.97, 1])
  .on("zoom", zoomed);

svg.call(zoom);

// Set initial zoom transformation
// const initialTransform = d3.zoomIdentity.scale(window.innerWidth/2400+0.2);
// document.querySelector(".Nicolaus17").scrollIntoView()
// svg.call(zoom).call(zoom.transform, initialTransform);

function zoomed(event) {
  const transform = event.transform;
  svg.attr("transform", transform);
}
