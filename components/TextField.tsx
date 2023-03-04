import classNames from "classnames";

import { TextFieldProps } from "@/types";

function TextField({
  label,
  name,
  unit,
  value,
  error,
  placeholder,
  onChange,
  onBlur,
}: TextFieldProps) {
  return (
    <div className="sm:col-span-2">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-semibold leading-6 text-gray-900 mb-2.5"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type="text"
          name={name}
          id={name}
          value={value || ""}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          className={classNames('block w-full min-w-[12rem] rounded-md border-0 py-2 px-3 pr-10 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6', {
            'ring-pink-700': error,
            'ring-gray-300': !error,
          })}
        />
        <div className="absolute inset-y-0 right-5 flex items-center">
          {unit}
        </div>
      </div>
      {error && <p className="text-xs text-red-700 mt-1">{error}</p>}
    </div>
  );
}

export default TextField;
