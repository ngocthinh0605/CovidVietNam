import {useMemo} from 'react'
import { Doughnut } from "react-chartjs-2";

const Chart = ({a,chart,covidDay}) => {
    const vietNam = {...a};

    const speadChart = {...chart};
    console.log(speadChart);

    return (
        <>
            { 
                chart.length === 0 ?  
                        <Doughnut
                        data={{
                        labels: [
                            "Tổng Số Ca Trên Cả Nước",
                            "Số Ca Nhiễm Hôm Nay",
                            "Số Ca Nhiễm Hôm Qua",
                            "Số Ca Chữa Khỏi",
                        ],
                        datasets: [
                            {
                            label: "Ca Nhiễm Mới",
                            backgroundColor: [
                                "#3e95cd",
                                "red",
                                "#8e5ea2",
                                "#3cba9f",
                            ],
                            data: [vietNam[2], covidDay.today[1],covidDay.yesterday[1], vietNam[3]]
                            }
                        ]
                        }}
                        option={{
                        title: {
                            display: true,
                            text: ""
                        }
                        }}
                    /> : 
                        <Doughnut
                            data={{
                            labels: [
                                "Tổng Ca Nhiễm",
                                "Số Ca Nhiễm Mới",
                                "Vắc xin đã tiêm",
                            ],
                            datasets: [
                                {
                                label: "Ca Nhiễm Mới",
                                backgroundColor: [
                                    "#3e95cd",
                                    "#8e5ea2",
                                    "#3cba9f",
                                ],
                                data: [speadChart[2], speadChart[3], speadChart[4]]
                                }
                            ]
                            }}
                            option={{
                            title: {
                                display: true,
                                text: "Predicted world population (millions) in 2050"
                            }
                            }}
                        />
            }
           

            
        </>
    )
}

export default Chart
