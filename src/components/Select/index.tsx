import { Dispatch, FormEvent, SetStateAction } from "react";
import styles from "./styles.module.scss";

interface SelectProps {
  options: string[];
  defaultValue: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export const Select = ({
  options,
  defaultValue,
  value,
  setValue,
  ...props
}: SelectProps) => {
  return (
    <div className={styles.customSelect}>
      <select
        className={styles.select}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        {...props}
      >
        <option value="">{defaultValue}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
