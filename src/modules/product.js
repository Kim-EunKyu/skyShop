import { createAction, handleActions } from "redux-actions";
import { createRequestActionTypes } from "../lib/createRequestSaga";
import produce from "immer";

const COUNT_PLUS = "product/COUNT_PLUS";
const COUNT_MINUS = "product/COUNT_MINUS";

const INSERT_OPTION = "product/INSERT_OPTION";

// export const tempSetUser = createAction(TEMP_SET_USER, (user) => user);
// export const check = createAction(CHECK);

export const insertOption = createAction(INSERT_OPTION);

const initialState = {
  productdetail: {
    totalprice: 0,
    options: [],
  },
};

export default handleActions(
  {
    [INSERT_OPTION]: (state, { payload: options }) => ({
      ...state,
      productdetail: {
        ...state.productdetail,
        options,
      },
    }),

    // [CHECK_SUCCESS]: (state, { payload: user }) => ({
    //   ...state,
    //   user,
    //   checkError: null,
    // }),
    // [CHECK_FAILURE]: (state, { payload: error }) => ({
    //   ...state,
    //   user: null,
    //   checkError: error,
    // }),
    // [LOGOUT]: (state) => ({
    //   ...state,
    //   user: null,
    // }),
  },
  initialState
);
