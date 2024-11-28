import React from "react";

const SelectComponent = ({ label, options, onChange, value }) => {
  return (
    <div className="w-[300px] ml-14">
      <select
        className="text-[#2c2c2cc4] hidden lg:block w-full px-4 py-3 border border-[#2c2c2cc4] rounded-2xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        onChange={onChange}
        value={value}
      >
        <option value="" disabled hidden>
          {label}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;
