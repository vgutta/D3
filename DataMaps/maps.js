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
        geographyConfig: {
            highlightOnHover: false,
            popupTemplate: function(geo) {
                function findState(state) {
                    return states.state === geo.id;
                }
                return ['<div class="hoverinfo"><strong>',
                        geo.properties.name,
                        ': $' + data.find(findState).GDP,
                        '</strong></div>'].join('');
            }
        } 
    })
});