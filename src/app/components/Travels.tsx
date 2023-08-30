"use client";
import React from "react";

//components
import Checklist from "./Checklist";
import ProgressComponent from "./Progress";

//hooks
import useCheckList from "../hooks/useCheckList";

function Travels() {
  const [refresh, setRefresh] = React.useState<boolean>(false);
  const { data: checklist } = useCheckList(refresh);

  return (
    <>
      <ProgressComponent checklist={checklist} />
      <Checklist checklist={checklist} />
    </>
  );
}

export default Travels;
