"use client";
import React from "react";
import { Card, CardBody, Text, Progress } from "@chakra-ui/react";

function ProgressComponent() {
  return (
    <Card>
      <CardBody>
        <Text>My Travel Checklist</Text>
        <Text>80%</Text>
        <Progress value={80} />
      </CardBody>
    </Card>
  );
}

export default ProgressComponent;
