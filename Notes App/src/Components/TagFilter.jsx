import React from "react";
import Select from "react-select";

const TagFilter = ({ options, selected, setSelected }) => {
  return (
    <div className="mb-6">
      <Select
        isMulti
        options={options}
        value={selected}
        onChange={setSelected}
        placeholder="🔍 Filter by tags..."
        className="text-sm"
      />
    </div>
  );
};

export default TagFilter;
