'use client'
import React from 'react'
import { DateRange, Range, RangeKeyDict } from 'react-date-range'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'

interface CalenderProps {
    value:Range;
    disabledDates?:Date [];
    onChange: (value: RangeKeyDict) => void;
    

}

const Calender:React.FC<CalenderProps> = ({value, onChange, disabledDates}: CalenderProps) => {
  return (
    <div  className=''>
        <DateRange 
         rangeColors={['#262626']}
         ranges={[value]}
         date={new Date()}
         onChange={onChange}
         direction='vertical'
         showDateDisplay={false}
         disabledDates={disabledDates}

        />
    </div>
  )
}

export default Calender