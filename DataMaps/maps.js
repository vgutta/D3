d3.csv('State_GDP.csv', function (d){
    return{
        state: d.Area,
        gdp: d.GDP
    };
}, function (data) {
    d3.select('body').style('background-color', 'black');

    const map = new DataMap({
        scope: 'usa',
        element: document.getElementById('mapContainer'),
        responsive: true,
        
    })
});