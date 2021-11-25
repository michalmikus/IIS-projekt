import React from 'react'

const SearchForm = () => {
    return (
            <form id="search_form">

                <label for="startStation" >Odkud</label>
                <select id="startStation" name="startStation" form="startStation" ></select>

                <label for="endStation" >Kam</label>
                <select id="endStation" name="endStation" form="endStation"></select>

                <input type="date" name="date" />
                <span class="date-button"></span>

                <label for="time"></label>
                <input type="time" id="time" name="time"></input>

                <button type="submit" value="Hledat">Hledat</button>

            </form>
    )
}

export default SearchForm
