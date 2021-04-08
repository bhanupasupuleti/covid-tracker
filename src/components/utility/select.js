import React from 'react';

export default ({className,value,options=[],setCountry,...rest})=>{

    return(       
        <select
          value={value}
          className={className}
          onChange={(e) => setCountry(e.target.value)}
      >
        <option value="">Global</option>
        {options.map((countryVal) => (
          <option value={countryVal.name} key={countryVal.name}>
            {countryVal.name}
          </option>
        ))}
      </select>
    )

}