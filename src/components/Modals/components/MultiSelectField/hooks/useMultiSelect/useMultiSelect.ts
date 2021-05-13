export type TUseMultiSelectProps = {
  value: string[];
  onChange: (value: string[]) => void;
};

const useMultiSelect = ({ value, onChange }: TUseMultiSelectProps) => {
  const handleSelect = (newOption: string) => {
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
