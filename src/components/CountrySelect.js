import React from 'react';

import Select from './utility/select';

function CountrySelect({value,setCountry,options}){
    return(
        <div className='country-select'>
            <Select 
                value={value} 
                setCountry={setCountry} 
                options={options}
                className="country__select"
            />
        </div>
    )
}

export default CountrySelect;