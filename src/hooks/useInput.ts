import { type ChangeEvent, useState } from 'react';

export default function useInput(initialValue: unknown, checkValue?: (value: unknown) => boolean) {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(true);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);

    setIsValid(checkValue ? checkValue(e.target.value) : true);
  }

  return { value, isValid: isValid, onChange: handleChange, setIsValid: setIsValid };
}
