import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'option1', label: 'Leisures Life' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' }
];

const defaultValue = options.find(option => option.value === 'option1');
  

const CustomDropdown = (props) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  return (
    <div className='rounded-full'>
        <Select
        className="rounded-full text-dark-blue"
        value={selectedOption}
        onChange={setSelectedOption}
        options={options}
        {...props}
        
      />
    </div>
  );
};

export default CustomDropdown;
