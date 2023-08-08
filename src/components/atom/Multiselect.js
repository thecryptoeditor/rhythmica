import React, {useState} from 'react';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const MultiselectAtom = () =>  {

    const [selectedOption, setSelectedOption] = useState([]);

    return (
        <div className="multi-select-container">
            <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                className="react-select-container"
                classNamePrefix="react-select"
                options={options}
            />

            <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                className="react-select-container"
                classNamePrefix="react-select"
                options={options}
            />
        </div>
    )
}

export default MultiselectAtom;