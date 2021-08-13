import React from 'react'

const TableProvice = ({a}) => {
    return (
        <div className="table-world">
            <h1>{a[1]}</h1>
          <table class="table">
              <thead>
                <tr>
                  <th scope="col">Tổng Ca Nhiễm</th>
                  <th scope="col">Số Ca Nhiễm Hôm Nay</th>
                  <th scope="col">Vắc Xin đã tiêm</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="table-detail">{new Intl.NumberFormat('de-DE').format(a[2])}</td>
                  <td className="table-detail"><span>+{new Intl.NumberFormat('de-DE').format(a[3])}</span></td>
                  <td className="table-detail">{new Intl.NumberFormat('de-DE').format(a[4])}</td>
                </tr>
              </tbody>
          </table>
        </div>
    )
}

export default TableProvice
