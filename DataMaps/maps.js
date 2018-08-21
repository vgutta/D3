d3.csv('State_GDP.csv', function (d){
    console.log(d[0])
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
    });

    for(var i = 0; i < data.length; i++){
        let st = d3.select('.' + data[i].state);

        if(data[i].GDP < 40000){
            st.style('fill', '#97ED8A');
        } else if(data[i].GDP > 40000 && data[i].GDP < 45000){
            st.style('fill', '#8FE039');
        } else if(data[i].GDP > 45000 && data[i].GDP < 50000){
            st.style('fill', '#45BF55');
        } else if(data[i].GDP > 50000 && data[i].GDP < 55000){
            st.style('fill', '#1F9C10');
        } else if(data[i].GDP > 55000 && data[i].GDP < 60000){
            st.style('fill', '#167F39');
        } else if(data[i].GDP > 60000 && data[i].GDP < 65000){
            st.style('fill', '#044C29');
        } else if(data[i].GDP > 65000){
            st.style('fill', '#00261C');
        }
    }

    d3.select(window).on('resize', function (){
        map.resize();
    });
});