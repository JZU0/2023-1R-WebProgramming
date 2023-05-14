import { useState, useEffect } from "react";

const TitleChange = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    return () => {
      document.title = "Vite + React";
    };
  }, [count]);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>count 올리기</button>
    </>
  );
};

export default TitleChange;
