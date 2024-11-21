import { useState } from 'react';

export function RadioGroup({name, options, onChange}){

    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (e) => { setSelectedValue(e.target.value);
                                  if (onChange) {
                                    onChange(e.target.value);
                                  }
                                };

    return (
        <>
            <div id="div1">
                {options.map((v,i)=>{
                    <label key= {i} style={v.isPopular?{border:"1px dashed red"}:null}>
                        {v.icon && <span>{v.icon} </span>}
                            <input type="radio" name={name}
                                   value={v.value}
                                   checked={selectedValue === v.value}
                                   onChange={handleChange}/>
                                {v.label}
                                {v.postfix && <em> {v.postfix}</em>}
                                {selectedValue === v.value && v.details}
                                {v.isPopular ? <strong>🔥 Popular!</strong> : null}
                    </label>
                })}
            </div>
        </>
    )
}