import { useEffect, useState } from "react"

const App = () => {
  const url = "https://dummyjson.com/posts";
  let [dataa,setData]=useState([])

  const fetchData=async(url)=>{
    let res=await fetch(url);
    let data=await res.json();
    let actualData=data.posts
    setData(actualData)

    

  }

  useEffect(()=>{
    fetchData(url)
  },[])
  return (
    <>
      {
        dataa.map((el)=>{
          return(
            <div key={el.id}>{el.title}</div>
          )
        })
      }
    </>
  )
}

export default App