import { combineReducers } from "redux";
import { MARK_ITEM_COMPLETED, MARK_SUBITEM_COMPLETED } from "./actions";
import { checklistData } from "../utils/mock";

// Define the initial state
const initialState = {
  checklistData: checklistData,
};

// Reducer for updating the completion status of items and subitems
const checklistReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case MARK_ITEM_COMPLETED:
      const updatedChecklistData = state.checklistData.map((item) => {
        if (item.id === action.payload.itemId) {
          return {
            ...item,
            isCompleted: true,
          };
        }
        return item;
      });

      return {
        ...state,
        checklistData: updatedChecklistData,
      };

    case MARK_SUBITEM_COMPLETED:
      const updatedSubitems = state.checklistData.map((item) => {
        if (item.id === action.payload.itemId) {
          const updatedSubList = item.subList.map((subitem) => {
            if (subitem.sub_id === action.payload.subitemId) {
              return {
                ...subitem,
                subIsCompleted: true,
              };
            }
            return subitem;
          });

          return {
            ...item,
            subList: updatedSubList,
          };
        }
        return item;
      });

      return {
        ...state,
        checklistData: updatedSubitems,
      };

    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  checklist: checklistReducer,
});

export default rootReducer;
