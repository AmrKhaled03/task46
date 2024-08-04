import React, { createContext, useEffect, useState,useMemo } from "react";
import image from "../imgs/User Avatar Vector Design Images, User Vector Avatar, Human Clipart, Female User, Icon PNG Image For Free Download.jpg";
export const myContext = createContext();
const ContextApi = (props) => {
    const times = useMemo(() => [
        { id: 0, name: "Ahmed Tarek Moustafa", age: 23, img: image },
        { id: 1, name: "Alaa Khaled Marey", age: 21, img: image },
        { id: 2, name: "Amr Khaled Marey", age: 21, img: image },
        { id: 3, name: "Mohamed Tarek Moustafa", age: 20, img: image },
        { id: 4, name: "Omar Mohamed", age: 15, img: image },
        { id: 3, name: "Esslam Mohamed", age: 12, img: image },
        { id: 3, name: "Ahmed Mohamed", age: 12, img: image },
        { id: 3, name: "Ehab Mohamed", age: 9, img: image },
      ], []); // Empty dependency array means it will only be created once
    
  const[loader,setLoader]=useState(true);
  const [dates, setDates] = useState([]);
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setDates(times);
      setLoader(false);
    }, 2000); // Simulate a loader for 2 seconds

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, [times]); // Add 'times' to the dependency array

  const values = {
    dates,
    loader,
    setDates,
    times
  };
  return (
    <myContext.Provider value={values}>{props.children}</myContext.Provider>
  );
};

export default ContextApi;
