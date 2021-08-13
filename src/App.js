
import { useEffect, useState } from 'react';
import './App.css';
import Chart from './Chart';
import {  } from "react-chartjs-2";
import ChartBar from './ChartBar';
import TableWorld from './TableWorld';
import TableProvice from './TableProvice';
const licensePlates = {
    "Hà Nội" : [29, 30, 31, 32, 33, 40].join(','),
    "TP HCM" : [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 41].join(','),
    "Cao Bằng" : [11],
    "Lạng Sơn" : [12],
    "Quảng Ninh" : [14],
    "Hải Phòng" : [16],
    "Thái Bình" : [17],
    "Nam Định" : [18],
    "Phú Thọ" : [19],
    "Thái Nguyên" : [20],
    "Yên Bái" : [21],
    "Tuyên Quang" : [22],
    "Hà Giang" : [23],
    "Lào Cai" : [24],
    "Lai Châu" : [25],
    "Sơn La" : [26],
    "Điện Biên" : [27],
    "Hòa Bình" : [28],
    "Hải Dương" : [34],
    "Ninh Bình" : [35],
    "Thanh Hóa" : [36],
    "Nghệ An" : [37],
    "Hà Tĩnh" : [38],
    "Đà Nẵng" : [43],
    "ĐắkLak" : [47],
    "Đắc Nông" : [48],
    "Lâm Đồng" : [49],
    "Đồng Nai" : [39, 60].join(','),
    "Bình Dương" : [61],
    "Long An" : [62],
    "Tiền Giang" : [63],
    "Vĩnh Long" : [64],
    "Cần Thơ" : [65],
    "Đồng Tháp" : [66],
    "An Giang" : [67],
    "Kiên Giang" : [68],
    "Cà Mau" : [69],
    "Tây Ninh" : [70],
    "Bến Tre" : [71],
    "Vũng Tàu" : [72],
    "Quảng Bình" : [73],
    "Quảng Trị" : [74],
    "Huế" : [75],
    "Quảng Ngãi" : [76],
    "Bình Định" : [77],
    "Phú Yên" : [78],
    "Khánh Hòa" : [79],
    "Kon Tum" : [82],
    "Sóc Trăng" : [83],
    "Trà Vinh" : [84],
    "Ninh Thuận" : [85],
    "Bình Thuận" : [86],
    "Vĩnh Phúc" : [88],
    "Hưng Yên" : [89],
    "Hà Nam" : [90],
    "Quảng Nam" : [92],
    "Bình Phước" : [93], 
    "Bạc Liêu" : [94],
    "Hậu Giang" : [95],
    "Bắc Cạn" : [97],
    "Bắc Giang" : [98],
    "Bắc Ninh" : [99],
  }

const axios = require('axios');
function App() {
  const [apiVietName, setApiVietName] = useState([]);
  const [chart, setChart] = useState([]);

  async function getApi(){
    try {
      const response = await axios.get('https://tuoitre.io/covid-mix');
      setApiVietName(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    getApi();
  },[])


  const a = {...apiVietName[0]};


  function handleChart(index){
    setChart(apiVietName[index])
    window.scrollTo(0, 0);
  }

  return (
    <div className="App">
      <div class="container">
        <div className="content-title mt-8">
          { chart.length === 0 ? <TableWorld a={a} ></TableWorld> : <TableProvice a={chart}></TableProvice>}
          
        </div>
      </div>  
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-8 content-left d-flex justify-content-center">
              <div class="row">
                <div className="col-lg-6 col-sm-12 content-center">
                  <Chart a={a} chart={chart}></Chart>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <ChartBar a={a} chart={chart}></ChartBar>
                </div>
              </div>
            </div>
            <div class="col-lg-4 content-right">
              <div className="row">
              {
                  apiVietName.map((element,index) => index > 1 &&
                    <button key={index} onClick={()=>handleChart(index)} type="button" class="col-lg-3 btn btn-success ml-1 mr-1 mt-1">{element[1]}
                      <div>
                      Số Xe:  
                        {
                         ' '+ licensePlates[element[1]]
                        }
                      </div>
                    </button>)
              }      
              </div>
            </div>
          </div>
        </div>    
    </div>
  );
}

export default App;
