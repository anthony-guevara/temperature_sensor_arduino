var grafica = new Morris.Line({
    //  ID of the element in which to draw the chart.
    element: 'myfirstchart',
    
    //  Chart data records -- each entry in this array corresponds to a point on
    //  the chart.
    data: [{
            second: 1,
            temperatura: 20
        },
        {
            second: 2,
            temperatura: 10
        },
        {
            second: 3,
            temperatura: 5
        },
        {
            second: 4,
            temperatura: 5
        },
        {
            second: 5,
            temperatura: 20
        },
        {
            second: 6,
            temperatura: 20
        },
        {
            second: 7,
            temperatura: 20
        },
        {
            second: 8,
            temperatura: 20
        },
        {
            second: 9,
            temperatura: 10
        },
        {
            second: 10,
            temperatura: 12
        },
        {
            second: 11,
            temperatura: 20
        },
        {
            second: 12,
            temperatura: 20
        }


    ],
    //  The name of the data record attribute that contains x-Casoss.
    xkey: "second",
    xLabels: "second",
    parseTime: false, 
    xLabelFormat: function (x) { return "segundo";},
    //  A list of names of data record attributes that contain y-Casoss.
    ykeys: ['temperatura'],
    //  Labels for the ykeys -- will be displayed when you hover over the
    //  chart.
    labels: ['Grados Celcius'],
    lineColors: ['#f00', '#ff407b'],
    resize: true,
   
    gridTextColor:['#f4f4f4'],
    
    gridTextSize: '14px',



   





});


//ocultar alerta//
 


// Morris.Area({
//     element: 'area-example',
//     data: [
//         {
//             second: 1,
//             temperatura: 20
//         },

//         ,
//         {
//             second: 2,
//             temperatura: 10
//         },
//         {
//             second: 3,
//             temperatura: 5
//         },
//         {
//             second: 4,
//             temperatura: 5
//         },
//         {
//             second: 5,
//             temperatura: 20
//         },
//         {
//             second: 6,
//             temperatura: 20
//         },
//         {
//             second: 7,
//             temperatura: 20
//         },
//         {
//             second: 8,
//             temperatura: 20
//         },
//         {
//             second: 9,
//             temperatura: 10
//         },
//         {
//             second: 10,
//             temperatura: 12
//         },
//         {
//             second: 11,
//             temperatura: 20
//         },
//         {
//             second: 12,
//             temperatura: 20
//         }


      
//     ],
//     xkey: "second",
//     labels: ["second"],

//     parseTime: false, 
//     xLabelFormat: function (x) { return "segundo";},
//     //  A list of names of data record attributes that contain y-Casoss.
//     ykeys: ['temperatura'],
//     //  Labels for the ykeys -- will be displayed when you hover over the
//     //  chart.
//     labels: ['Grados Celcius'],
//     lineColors: ['#f00', '#ff407b'],
//     resize: true,
   
//     gridTextColor:['#f4f4f4'],
    
//     gridTextSize: '14px',




//     lineColors: ['#f00', '#ff407b'],
//     resize: true,
   
//     gridTextColor:['#f4f4f4'],
    
//     gridTextSize: '14px'
//   });






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
                second: i+1,
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



  }, 250);

// grafica.setData(dataMapael);