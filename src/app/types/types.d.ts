type SubSection = {
  sub_id?: number;
  sub_title: string;
  sub_content: string;
  subIsCompleted: boolean;
};

type ChecklistSection = {
  id?: number;
  title: string;
  content: string;
  subList: SubSection[];
  isCompleted: boolean;
};
