import { createAction, handleActions } from "redux-actions";

const COUNT_CHANGE = "product/COUNT_CHANGE";
const INSERT_OPTION = "product/INSERT_OPTION";
const DELETE_OPTION = "product/DELETE_OPTIONc";

export const countChange = createAction(COUNT_CHANGE);
export const insertOption = createAction(INSERT_OPTION);
export const deleteOption = createAction(DELETE_OPTION);

const initialState = {
  productdetail: {
    totalprice: 0,
    options: [],
  },
};

export default handleActions(
  {
    [COUNT_CHANGE]: (
      state,
      { payload: { optionName, count, price, index, totalPrice } }
    ) => ({
      ...state,
      productdetail: {
        ...state.productdetail,
        options: state.productdetail.options.map((option, idx) => {
          if (idx === index) {
            return {
              optionName,
              count,
              price,
              totalPrice,
            };
          } else {
            return option;
          }
        }),
      },
    }),
    [INSERT_OPTION]: (state, { payload: options }) => ({
      ...state,
      productdetail: {
        ...state.productdetail,
        options: [...state.productdetail.options, options],
      },
    }),
    [DELETE_OPTION]: (state, { payload: index }) => ({
      ...state,
      productdetail: {
        ...state.productdetail,
        options: state.productdetail.options.filter(
          (option, idx) => idx !== index
        ),
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
