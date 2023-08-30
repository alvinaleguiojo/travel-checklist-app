export const MARK_ITEM_COMPLETED = "MARK_ITEM_COMPLETED";
export const MARK_SUBITEM_COMPLETED = "MARK_SUBITEM_COMPLETED";

export const markItemCompleted = ({
  id,
}: MarkItemCompletedPayload): MarkItemCompletedAction => ({
  type: MARK_ITEM_COMPLETED,
  payload: { id },
});

export const markSubitemCompleted = (
  payload: MarkSubitemCompletedPayload
): MarkSubitemCompletedAction => ({
  type: MARK_SUBITEM_COMPLETED,
  payload,
});
