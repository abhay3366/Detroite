import { useEffect, useState } from "react"
import {  VStack, StackDivider, Text ,Center} from "@chakra-ui/react";
const App = () => {
  const url = "https://dummyjson.com/posts";
  let [dataa,setData]=useState([])

  const fetchData=async(url)=>{
    let res=await fetch(url);
    let data=await res.json();
    let actualData=data.posts
    console.log("🚀 ~ file: App.jsx ~ line 11 ~ fetchData ~ actualData", actualData)
    setData(actualData)
  }

  useEffect(()=>{
    fetchData(url)
  },[])
  return (
    <>
      {
        dataa.map((el)=>{
          return (
            <div key={el.id}>
              <Center h="40px" bg="tomato" m={2}>
                {el.title}
              </Center>
            </div>
          );
        })
      }
    </>
  )
}

export default App