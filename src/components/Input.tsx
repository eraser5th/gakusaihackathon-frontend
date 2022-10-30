import { useState } from "react";

export const Input: React.FC<{
  value: string;
  type: "text" | "password";
  required?: boolean;
  label: string;
  placeholder: string;
  onChange: (input: string) => void;
  id: string;
}> = ({ value, type, required = false, label, placeholder, onChange, id }) => {
  const [focused, setFocused] = useState(false);

  return (
    <label className="flex flex-col gap-2 text-[#555555]" htmlFor={id}>
      {label}
      <input
        type={type}
        required={required}
        className={`border-b-2 focus:border-b-aizuGreen focus:outline-none text-lg ${
          focused
            ? "invalid:border-b-red-500 invalid:placeholder:text-red-400 focus:invalid:border-b-red-500"
            : ""
        }`}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => setFocused(true)}
      />
    </label>
  );
};
