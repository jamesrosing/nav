/**
 * This code was generated by Builder.io.
 */
import React from 'react';

interface DimensionInputProps {
  label: string;
  value: string;
}

const DimensionInput: React.FC<DimensionInputProps> = ({ label, value }) => {
  return (
    <div className="flex gap-4 mt-2.5 whitespace-nowrap">
      <label htmlFor={label.toLowerCase()} className="my-auto font-medium text-black">
        {label}
      </label>
      <input
        type="text"
        id={label.toLowerCase()}
        value={value}
        readOnly
        className="px-3 py-2 bg-white rounded-md border border-solid border-slate-300 leading-[143%] text-slate-900 max-md:pr-5"
      />
    </div>
  );
};

export default DimensionInput;