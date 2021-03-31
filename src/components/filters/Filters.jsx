import React from 'react';
import style from './Filters.module.css';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import { Cascader } from 'antd';




function Filters() {
    return(
        <div className={style.filters}>
            <div className={style.filterTitle}>
                <h2 className={style.title}>Filters</h2>
            </div>
            <div className={style.filterID}>
                <h2>ID</h2>
                <input name='id' placeholder='Enter value'/>
            </div>
            <div className={style.filterNumber}>
                <h2>Invoice number</h2>
                <input name='number' placeholder='Enter value'/>
            </div>
            <div className={style.filterTime}>
                <h2>Time of arrival for unloading</h2>
                <span>from <DatePicker onChange={onChange} className={style.DatePicker} /></span>
                <span>by <DatePicker onChange={onChange} className={style.DatePicker} /></span>
            </div>
            <div className={style.filterOrder}>
                <h2>Order type</h2>
                <div className='filterOrder-input'>
                <Cascader options={options} onChange={onChange} placeholder="RUED" className='filterOrder-input'/>
                </div>  
            </div>
        </div>
    )  
}

function onChange(date, dateString) {
    console.log(date, dateString);
  }

const options = [
    {
      value: 'RUED',
      label: 'RUED',
    },
    {
        value: 'RUEX',
        label: 'RUEX',
      },
      {
        value: 'RUSG',
        label: 'RUSG',
      }
]





export default Filters;