type SubSection = {
  sub_id?: number;
  sub_title: string;
  sub_content: string;
};

type ChecklistSection = {
  id?: number;
  title: string;
  content: string;
  subList?: SubSection[];
};
