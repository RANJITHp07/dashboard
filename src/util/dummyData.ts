export const installedApps=[
    {
        name:"Zepplin",
        amount:686.00,
        status: 'Active',
        user_id:114423,
        joined: 'October',
        group:' Design',
        image:'/zepplin.jpg'
    },
    {
        name:"Figma",
        amount:864.00,
        status: 'Pending',
        user_id: 76223,
        joined: 'June',
        group:'Finance',
        image:'/figma.png'
    },
    {
        name:"Meta",
        amount:176.00,
        status: 'Cancelled',
        user_id: 89453,
        joined: 'March',
        group:'Coding',
        image:'/meta.webp'
    },
    {
        name:"Angular",
        amount:49.00,
        status: 'Active',
        user_id:11467,
        joined: 'Feburary',
        group:' Marketing',
        image:'/angular.png'
    },
    {
        name:"Vue",
        amount:999.00,
        status: 'Active',
        user_id: 67835,
        joined: 'October',
        group:' Finance',
        image:'/vue.png'
    },
    
]

export const chartData={
    series: [
      {
        name: 'Instagram',
        data: [150,270,180,130,230,100,250]
      },
      {
        name: 'Facebook',
        data: [250,400,350,170,350,200,180]
      }
    ],
    options: {
      chart: {
        id:'area',
        height: 350,
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        categories: [
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thurs",
          "Fri",
          "Sat"
        ]
      },
      yaxis:{
       tickAmount: 4, // Set the number of ticks on the y-axis
        min: 0, // Set the minimum value for y-axis
        max: 400 // Set the maximum value for y-axis
      }
    }
  }