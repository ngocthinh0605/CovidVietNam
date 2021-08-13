import React from 'react'

const TableWorld = ({a}) => {

    return (
        <div>
        <h1>{a[1]}</h1>
          <table class="table">
              <thead>
                <tr>
                  <th scope="col">Tổng Số Ca Trên Cả Nước</th>
                  <th scope="col">Số Ca Nhiễm Hôm Nay</th>
                  <th scope="col">Số Ca Chữa Khỏi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{new Intl.NumberFormat('de-DE').format(a[2])}</td>
                  <td>+{new Intl.NumberFormat('de-DE').format(a[4])}</td>
                  <td>{new Intl.NumberFormat('de-DE').format(a[3])}</td>
                </tr>
              </tbody>
          </table>
        </div>
    )
}

export default TableWorld
