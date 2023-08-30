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

type MarkItemCompletedPayload = {
  id: number;
};

type MarkSubitemCompletedPayload = {
  itemId: number;
  subitemId: number;
};

type MarkItemCompletedAction = {
  type: typeof MARK_ITEM_COMPLETED;
  payload: MarkItemCompletedPayload;
};

type MarkSubitemCompletedAction = {
  type: typeof MARK_SUBITEM_COMPLETED;
  payload: MarkSubitemCompletedPayload;
};
