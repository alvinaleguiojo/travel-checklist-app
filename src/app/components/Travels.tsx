"use client";
import React, { useContext } from "react";

//components
import Checklist from "./Checklist";
import ProgressComponent from "./Progress";

//hooks
import useCheckList from "../hooks/useCheckList";

//context
import MyContext from "../context/RefreshContext";
import { MyContextProvider } from "../context/RefreshContext";

function App() {
  // context
  const { state } = useContext(MyContext)!;

  const { data: checklist } = useCheckList(state);

  return (
    <>
      <ProgressComponent checklist={checklist} />
      <Checklist checklist={checklist} />
    </>
  );
}

// Wrap Travels component with MyContextProvider
function Travels() {
  return (
    <MyContextProvider>
      <App />
    </MyContextProvider>
  );
}

export default Travels;
