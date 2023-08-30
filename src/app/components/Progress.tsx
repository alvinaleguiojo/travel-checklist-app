"use client";
import React from "react";
import { Card, CardBody, Text, Progress } from "@chakra-ui/react";

function ProgressComponent({ checklist }: { checklist: ChecklistSection[] }) {
  const totalSubtasks = checklist?.reduce(
    (total, list) => total + (list.sublist ? list.sublist.length : 0),
    0
  );

  const completedSubtasks = checklist?.reduce(
    (completed, list) =>
      completed +
      (list.sublist
        ? list.sublist.filter((sub) => sub.subIsCompleted).length
        : 0),
    0
  );

  // Handle the case where totalSubtasks is zero
  const completionPercentage =
    totalSubtasks > 0 ? (completedSubtasks / totalSubtasks) * 100 : 0;

  return (
    <Card>
      <CardBody>
        <Text fontSize="lg" as="b">
          My Travel Checklist
        </Text>
        <Text>
          {totalSubtasks > 0
            ? `${completionPercentage.toFixed(2)}%`
            : "No tasks"}
        </Text>
        <Progress value={completionPercentage} />
      </CardBody>
    </Card>
  );
}

export default ProgressComponent;
