"use client";
import React from "react";
import { Card, CardBody, Text, Progress } from "@chakra-ui/react";

function ProgressComponent({ checklist }: { checklist: ChecklistSection[] }) {
  const totalSubtasks = checklist.reduce(
    (total, list) => total + list.sublist.length,
    0
  );

  const completedSubtasks = checklist.reduce(
    (completed, list) =>
      completed + list.sublist.filter((sub) => sub.subIsCompleted).length,
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
