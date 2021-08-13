
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
    "Đắk Lắk" : [47],
    "Đắk Nông" : [48],
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
    "Bà Rịa - Vũng Tàu" : [72],
    "Quảng Bình" : [73],
    "Quảng Trị" : [74],
    "Thừa Thiên Huế" : [75],
    "Quảng Ngãi" : [76],
    "Bình Định" : [77],
    "Phú Yên" : [78],
    "Khánh Hòa" : [79],
    "Gia Lai" : [81],
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
    "Bắc Kạn" : [97],
    "Bắc Giang" : [98],
    "Bắc Ninh" : [99],
  }

const axios = require('axios');
function App() {
  const [apiVietName, setApiVietName] = useState([]);
  const [chart, setChart] = useState([]);
  const [searchText, setSearchText] = useState('');

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


  function handleChart(index1){

    apiVietName.forEach((e,index) => e[0] === index1 &&  setChart(apiVietName[index]));
    // setChart(apiVietName[index])

    window.scrollTo(0, 0);
  }

  function handleSearch(text){

    setSearchText(text.charAt(0).toUpperCase() + text.slice(1));
  }


  return (
    <div className="App">
      <div class="container">
        <div className="content-title mt-8">
          { chart.length === 0 ? <TableWorld a={a} ></TableWorld> : <TableProvice a={chart}></TableProvice>}
          
        </div>
      </div>  
        <div class="container">
          <div class="row">
            <div class="col-lg-12 row ">
                <div className="col-lg-6  content-center">
                  <Chart a={a} chart={chart}></Chart>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <ChartBar a={a} chart={chart}></ChartBar>
                </div>
            </div>
            <div class="col-lg-12 content-right">
              <div className="search mt-4">
              <h3>Tìm Kiếm Thông Tin Thành Phố/Tỉnh Của Bạn!!</h3>
                <input onChange={(e)=> handleSearch(e.target.value)} value={searchText} type="text" placeholder="Nhập Tên......" />
              </div>
              <div className="row mt-4">
              {
                  apiVietName.filter(ele => {
                    if(searchText === '') return ele;
                    if(ele[1].indexOf(searchText) !== -1) return ele;
                  })
                  .map((element,index) => element[0] > 0 &&
                    <button key={element[0]} onClick={()=>handleChart(element[0])} type="button" class="col-lg-2 btn btn-success mr-2 mt-2 ml-2">{element[1]}
                      <h6>
                        Số Xe:  
                          {
                          ' '+ licensePlates[element[1]]
                          }
                      </h6>
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
