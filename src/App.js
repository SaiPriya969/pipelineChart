import './App.css';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "./Data";
import { Bar } from "react-chartjs-2";
Chart.register(CategoryScale);
 
function App() {
  const [chartData] = useState({
    labels: Data.map((data) => data.year), 
    // labels:[1,2,3,4],
    datasets: [
   
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        // data:[80000],
        type:"bar",
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#E9B598",
          "#11C6F3",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "white",
        borderWidth: {top:0,right:1,left:1},
        barPercentage: 1,
        categoryPercentage: 1
      },
      // {
      //   label: "Users left",
      //   data: [89000,100900,75000,71000,50000,],
      //   // order:1,  
      //   borderColor:"#ffffff" ,
      //   borderWidth:{top:0,right:1,left:1},
      //   backgroundColor: '#D5D8DA',
      //   type:"bar",
      //   barPercentage: 1,
      //   categoryPercentage: 1  ,
        
          
      // },
      {
        type:"line",
        showLine:true,
        data:[
          [2016,180000],
          [2020,90000],
        ],
        fill:true,
        backgroundColor:'#D5D8DA',
        // xAxes:{
        //   min:0
        // }
      },
      {
        type:"line",
    
        data:[
          [0,0],
          [2020,90000]
          
        ],
        fill:true,
        backgroundColor:'#ffffff',
        // order:1,
      
      },
    ]
  });
 const chartOptions={
 
  plugins: {
    title: {
      display: true,
      text: "Users Gained between 2016-2020"
    },
    
  },
 
  scales: {
    x: {
      stacked: true,
    
    },
    y: {
      stacked: true,
    
    },
    // xAxes: [
    //   {
     
    //   },
    // ],
  },
  

}
  return (
    <div className="App">
     <Bar data={chartData} options={chartOptions}>
     </Bar>
    </div>
  );
}

export default App;
