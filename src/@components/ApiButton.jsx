import { useState, useEffect } from "react";

const ApiTable = () => {
  const [check, setCheck] = useState(false);
  const [row, setRow] = useState([]);

  useEffect(() => {
    fetch(
      "http://openapi.seoul.go.kr:8088/4b755079416a683937335161556b61/json/RealtimeCityAir/1/25/"
    ).then((res2) => {
      res2.json().then((res3) => {
        setRow(res3.RealtimeCityAir.row);
      });
    });
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setCheck(true);
        }}
      >
        Api 불러오기
      </button>
      {check ? (
        <>
          <table>
            <thead>
              <tr>
                <th>이름</th>
                <th>PM10</th>
                <th>O3</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              {row.map(function (obj, idx) {
                return (
                  <tr key={idx}>
                    <td>{obj.MSRSTE_NM}</td>
                    <td>{obj.PM10}</td>
                    <td>{obj.O3}</td>
                    <td>{obj.IDEX_NM}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ApiTable;
