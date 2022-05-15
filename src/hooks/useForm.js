import { useReducer } from 'react';

const actionTypes = {
  inputChange: 'INPUT CHANGE',
  clearState: 'CLEAR STATE',
  consentToggle: 'TOGGLE CONSENT',
  throwError: 'THROW ERROR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.inputChange:
      return { ...state, [action.name]: action.value };

    case actionTypes.clearState:
      return action.initialValue;

    case actionTypes.consentToggle:
      return { ...state, consent: !state.consent };

    case actionTypes.throwError:
      return { ...state, errorMessage: action.errorMessage };

    default:
      return state;
  }
};

export const useForm = (initialValue) => {
  const [formValues, dispatch] = useReducer(reducer, initialValue);

  const handleFieldChange = (e) => {
    dispatch({ type: actionTypes.inputChange, name: e.target.name, value: e.target.value });
  };

  const handleClearForm = () => {
    dispatch({ type: actionTypes.clearState, initialValue });
  };

  const handleConsentToggle = () => {
    dispatch({ type: actionTypes.consentToggle });
  };
  const handleThrowError = (errorValue) => {
    dispatch({ type: actionTypes.throwError, errorMessage: errorValue });
  };

  return { formValues, handleFieldChange, handleClearForm, handleConsentToggle, handleThrowError };
};
