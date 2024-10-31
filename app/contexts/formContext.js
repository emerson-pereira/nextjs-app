"use client"

import { createContext, useContext, useReducer } from 'react';

const FormContext = createContext(null);
const FormDispatchContext = createContext(null);

export function FormProvider({ children }) {
  const [form, dispatch] = useReducer(
    formReducer,
    initialForm
  );

  return (
    <FormContext.Provider value={form}>
      <FormDispatchContext.Provider value={dispatch}>
        {children}
      </FormDispatchContext.Provider>
    </FormContext.Provider>
  );
}

export function useForm() {
  return useContext(FormContext);
}

export function useFormDispatch() {
  return useContext(FormDispatchContext);
}

function formReducer(form, action) {
  switch (action.type) {
    case 'addedFeeType': {
      return {
        ...form,
        feeType: action.feeType
      };
    }
    case 'toggledCount': {
      return {
        ...form,
        count: action.count
      };
    }
    case 'toggledAddFeePerLocation': {
      return {
        ...form,
        addFeePerLocation: action.addFeePerLocation
      }
    }
    case 'addedFeePerLocation': {
      return {
        ...form,
        feePerLocation: [
          ...form.feePerLocation,
          action.feePerLocation
        ]
      }
    }
    case 'deletedFeePerLocation': {
      return {
        ...form,
        feePerLocation: form.feePerLocation.filter(fpl => fpl !== action.feePerLocation)
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialForm = {
  feeType: '',
  count: false,
  addFeePerLocation: false,
  feePerLocation: []
};
