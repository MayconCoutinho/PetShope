import { useState } from "react";

export const UseForm = (initialState) => {
  const [formValues, setFormValues] = useState({ initialState });
  const onChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const cleanFields = () => {
    setFormValues({});
  };

  const [formValuesB, setFormValuesB] = useState({ initialState });
  const onChangeB = (event) => {
    const { name, value } = event.target;
    setFormValuesB({ ...formValuesB, [name]: value });
  };
  const cleanFieldsB = () => {
    setFormValuesB({});
  };
  return {
    formValues,
    onChange,
    cleanFields,
    formValuesB,
    onChangeB,
    cleanFieldsB,
  };
};
