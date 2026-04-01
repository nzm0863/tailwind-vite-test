import { useState,useEffect } from "react";
import "./index.css";

function App() {
  const [fetchData,setFetchData] = useState("aa")
  useEffect(() => {
    fetch("http://100.115.89.32:5000/api")
      .then(res => res.json())
      .then(data => setFetchData(data))
  }, []);

  return (
    <> 
      <div className="text-green-500 m-20 text-xl font-bold flex justify-center pr-100 mt-100 ">{fetchData.message}</div>
      <div>{JSON.stringify(fetchData)}</div>
      <p className="text-red-300">
        Hello world!
      </p>
      <section className="relative">
        <ul className="flex justify-between w-100 absolute right-50 ">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <p className="flex absolute top-10 right-0 w-100">aaaa</p>
      </section>
    </>
  )
}
export default App