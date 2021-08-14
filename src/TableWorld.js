import React from 'react'

const TableWorld = ({a,covidDay}) => {
    return (
        <div className="table-world">
        <h1>{a[1]}</h1>
          <table class="table">
              <thead>
                <tr>
                  <th scope="col">Tổng Số Ca Trên Cả Nước</th>
                  <th scope="col">Số Ca Nhiễm Hôm Nay</th>
                  <th scope="col">Số Ca Nhiễm Hôm Qua</th>
                  <th scope="col">Số Ca Chữa Khỏi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="table-detail">{new Intl.NumberFormat('de-DE').format(a[2])}</td>
                  <td className="table-detail"><span>+{new Intl.NumberFormat('de-DE').format(covidDay.today[1])}</span></td>
                  <td className="table-detail"><span>+{new Intl.NumberFormat('de-DE').format(covidDay.yesterday[1])}</span></td>
                  <td className="table-detail">{new Intl.NumberFormat('de-DE').format(a[3])}</td>
                </tr>
              </tbody>
          </table>
        </div>
    )
}

export default TableWorld
