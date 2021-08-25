import React from 'react';
import MySelect from "./select/MySelect";
import MyInput from "./input/MyInput";




function ProductFilter({filter,setFilter}) {
    return (
        <div>
        <MyInput
        value={filter.query} 
        onChange={e=>setFilter({...filter, query:e.target.value})}
        placeholder='search'
        />
        <MySelect
          value={filter.sort}
          onChange={selectedSort=>setFilter({...filter, sort:selectedSort})}
          defaultValue='sort by'
          options ={[
            {value:'title', name:'Name'},
            {value:'body', name:'Body'}

          ]}
        />    
      </div>
    );
}

export default ProductFilter;