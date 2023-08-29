"use client";
import React from "react";
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
import { checklistData } from "../utils/mock";

function List({ ...props }: ChecklistSection) {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left" gap={5} display="flex">
            <Checkbox size="lg"></Checkbox>
            {props.title} {"(0/4)"}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        {props.content}
        {props.subList?.map((list: SubSection) => (
          <SubList
            sub_title={list.sub_title}
            sub_content={list.sub_content}
            key={list.sub_id}
          />
        ))}
      </AccordionPanel>
    </AccordionItem>
  );
}

function SubList({ ...props }: SubSection) {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left" gap={5} display="flex">
            <Checkbox size="lg"></Checkbox>
            {props.sub_title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>{props.sub_content}</AccordionPanel>
    </AccordionItem>
  );
}

function Checklist() {
  return (
    <Card>
      <CardBody>
        <Text>Checklist</Text>
        <Accordion defaultIndex={[0]} allowMultiple>
          {checklistData.map((list: ChecklistSection) => (
            <List
              content={list.content}
              title={list.title}
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
