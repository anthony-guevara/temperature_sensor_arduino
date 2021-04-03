var grafica = new Morris.Line({
    //  ID of the element in which to draw the chart.
    element: 'myfirstchart',
    //  Chart data records -- each entry in this array corresponds to a point on
    //  the chart.
    data: [{
            time: '2020-11-01',
            temperatura: 20
        },
        {
            time: '2020-02-02',
            temperatura: 10
        },
        {
            time: '2020-03-03',
            temperatura: 5
        },
        {
            time: '2020-04-04',
            temperatura: 5
        },
        {
            time: '2020-05-05',
            temperatura: 20
        },
        {
            time: '2020-06-06',
            temperatura: 20
        },
        {
            time: '2020-07-07',
            temperatura: 20
        },
        {
            time: '2020-08-08',
            temperatura: 20
        },
        {
            time: '2020-09-09',
            temperatura: 10
        },
        {
            time: '2020-10-10',
            temperatura: 12
        },
        {
            time: '2020-11-11',
            temperatura: 20
        },
        {
            time: '2020-12-12',
            temperatura: 20
        }


    ],
    //  The name of the data record attribute that contains x-Casoss.
    xkey: 'time',
    //  A list of names of data record attributes that contain y-Casoss.
    ykeys: ['temperatura'],
    //  Labels for the ykeys -- will be displayed when you hover over the
    //  chart.
    labels: ['Grados Celcius'],

});



var intervalId = window.setInterval(function(){

    /// call your function here

    //Llamado AJAX

$.ajax({
    url: "http://localhost:8000/",
    method: "GET",
    dataType: "json",
    success: function (res) {
        //console.log(res);

        let info = [];
        for (let i = 0; i < res.length; i++) {

            info.push({
                time: i+1,
                temperatura: res[i].temperatura
            })
        }

        console.log(info);

        grafica.setData(info);
    },
    error: function (error) {
        console.error(error);
    }
})



  }, 3000);

// grafica.setData(dataMapael);