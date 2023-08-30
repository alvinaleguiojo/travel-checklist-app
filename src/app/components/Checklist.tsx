"use client";
import React, { useState } from "react";
import {
  Card,
  CardBody,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  Checkbox,
} from "@chakra-ui/react";

function List({ ...props }: ChecklistSection) {
  const [completed, setCompleted] = useState(props.isCompleted);

  const handleCheckboxChange = async () => {
    setCompleted(!completed);
    await fetch("http://localhost:3000/api/checklist", {
      method: "PUT",
      body: JSON.stringify({
        id: props.id,
        isCompleted: !completed,
      }),
    });
  };

  // const completedSubtasksCount = props.subList.reduce(
  //   (count, sub) => count + (sub.subIsCompleted ? 1 : 0),
  //   0
  // );

  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left" gap={5} display="flex">
            <Checkbox
              size="lg"
              isChecked={completed}
              onChange={handleCheckboxChange}
            />
            {props.title}{" "}
            {/* {`(${completedSubtasksCount}/${props.subList.length})`} */}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        {props.content}
        {/* {props.subList.map((sub) => (
          <SubList
            sub_title={sub.sub_title}
            sub_content={sub.sub_content}
            subIsCompleted={sub.subIsCompleted}
            key={sub.sub_id}
          />
        ))} */}
      </AccordionPanel>
    </AccordionItem>
  );
}

function SubList({ ...props }: SubSection) {
  const [subIsCompleted, setSubIsCompleted] = useState(props.subIsCompleted);

  const handleCheckboxChange = () => {
    setSubIsCompleted(!subIsCompleted);
  };

  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left" gap={5} display="flex">
            <Checkbox
              size="lg"
              isChecked={subIsCompleted}
              onChange={handleCheckboxChange}
            ></Checkbox>
            {props.sub_title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>{props.sub_content}</AccordionPanel>
    </AccordionItem>
  );
}

function Checklist({ checklist }: { checklist: ChecklistSection[] }) {
  return (
    <Card>
      <CardBody>
        <Text>Checklist</Text>
        <Accordion allowMultiple>
          {checklist.map((list: ChecklistSection) => (
            <List
              id={list.id}
              title={list.title}
              content={list.content}
              isCompleted={list.isCompleted}
              subList={list.subList}
              key={list.id}
            />
          ))}
        </Accordion>
      </CardBody>
    </Card>
  );
}

export default Checklist;
