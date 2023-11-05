import { InputHTMLAttributes, useState } from "react";

import { cn } from "@/utils";
import styles from "./SearchInput.module.css";
const p = 5;

export function SearchInput({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={cn(
        className,
        styles.wrapper,
        isActive && styles.wrapper__active
      )}
    >
      <input
        placeholder={isActive ? "" : "search ..."}
        className={cn(styles.input)}
        type="text"
        {...props}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      />
    </div>
  );
}
