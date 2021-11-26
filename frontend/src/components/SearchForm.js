import React from 'react'
import OptionBox from './OptionBox'
import Button from './Button'

const SearchForm = () => {
    return (
        <form id="search_form">

            <OptionBox title='Odkud' element_id = 'startStation' class="item" />
            <OptionBox title='Kam' element_id = 'endStation' class="item" />

            <input type="date" name="date" class="item"/>

            <input type="time" id="time" name="time" class="item"></input>

            <Button label='Hledat' link='/login'/>


        </form>
    )
}

export default SearchForm
