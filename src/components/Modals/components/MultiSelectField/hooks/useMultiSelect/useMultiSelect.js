

const useMultiSelect = ({ value, onChange }) => {
  const handleSelect = (newOption) => {
    const index = value.indexOf(newOption);

    if (!value.includes(newOption) && newOption) {
      value.push(newOption);
    } else {
      value.splice(index, 1);
    }
    onChange(value);
  };

  return {
    handleSelect,
  };
};

export default useMultiSelect;
