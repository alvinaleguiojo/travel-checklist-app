"use client";
import React, {
  useState,
  useEffect,
  useContext,
  memo,
  useCallback,
} from "react";
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
  useToast,
} from "@chakra-ui/react";
import MyContext from "../context/RefreshContext";

const List = memo(function ListComponent({ ...props }: ChecklistSection) {
  const [completed, setCompleted] = useState(props.isCompleted);

  // Update the main checkbox when all subtasks are completed
  useEffect(() => {
    const allSubtasksCompleted = props.sublist?.every(
      (sub) => sub.subIsCompleted
    );
    if (allSubtasksCompleted !== undefined) {
      setCompleted(allSubtasksCompleted);
    }
  }, [props.sublist]);

  const handleCheckboxChange = async () => {
    setCompleted(!completed);
    await fetch("/api/checklist", {
      method: "PUT",
      body: JSON.stringify({
        id: props.id,
        isCompleted: !completed,
      }),
    });
  };

  const completedSubtasksCount = (props.sublist || []).reduce(
    (count, sub) => count + (sub.subIsCompleted ? 1 : 0),
    0
  );

  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left" gap={5} display="flex">
            <Checkbox
              size="lg"
              isChecked={props.isCompleted}
              disabled={!completed}
              // onChange={handleCheckboxChange}
            />
            {props.title}{" "}
            {`(${completedSubtasksCount}/${props?.sublist?.length})`}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        {props.content}
        {props.sublist?.map((sub: SubSection) => (
          <SubList
            id={sub.id}
            sub_title={sub.sub_title}
            sub_content={sub.sub_content}
            subIsCompleted={sub.subIsCompleted}
            key={sub.id}
          />
        ))}
      </AccordionPanel>
    </AccordionItem>
  );
});

const SubList = React.memo(function SubListComponent({ ...props }: SubSection) {
  const [subIsCompleted, setSubIsCompleted] = useState(props.subIsCompleted);
  const toast = useToast();

  // context
  const { setState } = useContext(MyContext)!;

  const handleCheckboxChange = useCallback(async () => {
    setSubIsCompleted(!subIsCompleted);
    toast({
      title: "Updating",
      description: `Travel checklist ID: ${props.id}`,
      status: "loading",
      duration: 1000,
      isClosable: true,
    });
    await fetch("/api/checklist/sublist", {
      method: "PUT",
      body: JSON.stringify({
        id: props.id,
        subIsCompleted: !subIsCompleted,
      }),
    }).then(() => {
      toast({
        title: "Update Changes",
        description: `Travel checklist ID: ${props.id}`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setState((prevState) => !prevState);
    });
  }, [props.id, subIsCompleted, setState]);

  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left" gap={5} display="flex">
            <form>
              <Checkbox
                size="lg"
                isChecked={subIsCompleted}
                onChange={handleCheckboxChange}
              ></Checkbox>
            </form>
            {props.sub_title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>{props.sub_content}</AccordionPanel>
    </AccordionItem>
  );
});

function Checklist({ checklist }: { checklist: ChecklistSection[] }) {
  return (
    <Card>
      <CardBody>
        <Text as="b">Checklist</Text>
        <Accordion allowMultiple>
          {checklist?.map((list: ChecklistSection) => (
            <List
              id={list.id}
              title={list.title}
              content={list.content}
              isCompleted={list.isCompleted}
              sublist={list.sublist}
              key={list.id}
            />
          ))}
        </Accordion>
      </CardBody>
    </Card>
  );
}

export default Checklist;
