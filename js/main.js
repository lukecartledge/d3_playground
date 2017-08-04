var data = [
      { date: '2014-01-01', amount: 10 },
      { date: '2014-02-01', amount: 20 },
      { date: '2014-03-01', amount: 40 },
      { date: '2014-04-01', amount: 80 }
    ];

var y = d3.scaleLinear()
          .domain(d3.extent(data, func†ion(d) { return d.amount }))
          .range([200, 0]);
