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
              {row.map((gu, idx) => {
                return (
                  <tr key={idx}>
                    <td>{gu.MSRSTE_NM}</td>
                    <td>{gu.PM10}</td>
                    <td>{gu.O3}</td>
                    <td>{gu.IDEX_NM}</td>
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
