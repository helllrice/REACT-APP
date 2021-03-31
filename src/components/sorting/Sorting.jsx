import React from 'react';
import style from './Sorting.module.css';
import { Cascader } from 'antd';


function check() {
    if(document.getElementById('chbx').checked) {
        const imgMove = document.querySelectorAll('#imgMove')
        for(let i = 0; i < imgMove.length; i++) {
          imgMove[i].style.display='inline-block';
        }
    }
    else {
      const imgMove = document.querySelectorAll('#imgMove')
      for(let i = 0; i < imgMove.length; i++) {
        imgMove[i].style.display='';
      }
    }
  }



function Sorting() {
    return(
        <div className={style.sorting}>
            <div className={style.sortingInput}>
            <Cascader options={options} onChange={onChange} placeholder="Sorting" className={style.inputCascader}/>
            </div>
            <div className={style.sortingCheckbox}>
                <input type="checkbox" id="chbx" onClick={ check }/>
                <label>Enable drag and drop</label>
            </div>
            <button className={style.sortingButton}>Add</button>
        </div>
    )
};

function onChange(date, dateString) {
    console.log(date, dateString);
  }

const options = [
    {
      value: 'Sort by ID: ascending',
      label: 'Sort by ID: ascending',
    },
    {
      value: 'Sort by ID: descending',
      label: 'Sort by ID: descending',
      },
      {
        value: 'Sort by Date of creation: ascending',
        label: 'Sort by Date of creation: ascending',
      },
      {
        value: 'Sort by Date of creation: descending',
        label: 'Sort by Date of creation: descending',
      },
      {
        value: 'Sort by Date of creation: descending',
        label: 'Sort by Date of creation: descending',
      },
      {
        value: 'Sort by Order type: ascending',
        label: 'Sort by Order type: ascending',
      },
      {
        value: 'Sort by Order type: descending',
        label: 'Sort by Order type: descending',
      },
]


export default Sorting;