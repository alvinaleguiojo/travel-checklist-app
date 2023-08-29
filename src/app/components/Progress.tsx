"use client";
import React from "react";
import { Card, CardBody, Text, Progress } from "@chakra-ui/react";
import { checklistData } from "../utils/mock";

function ProgressComponent() {
  const totalSubtasks = checklistData.reduce(
    (total, list) => total + list.subList.length,
    0
  );

  const completedSubtasks = checklistData.reduce(
    (completed, list) =>
      completed + list.subList.filter((sub) => sub.subIsCompleted).length,
    0
  );

  const completionPercentage = (completedSubtasks / totalSubtasks) * 100;

  return (
    <Card>
      <CardBody>
        <Text>My Travel Checklist</Text>
        <Text>{completionPercentage.toFixed(2)}%</Text>
        <Progress value={completionPercentage} />
      </CardBody>
    </Card>
  );
}

export default ProgressComponent;
