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

function List({ title, content }: ChecklistItem) {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            <Checkbox size="lg"></Checkbox>
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>{content}</AccordionPanel>
    </AccordionItem>
  );
}

function Checklist() {
  return (
    <Card>
      <CardBody>
        <Text>Checklist</Text>
        <Accordion defaultIndex={[0]} allowMultiple>
          {checklistData.map((list: ChecklistItem) => (
            <List content={list.content} title={list.title} key={list.id} />
          ))}
        </Accordion>
      </CardBody>
    </Card>
  );
}

export default Checklist;
