import React, {useState, useEffect} from "react";
import {NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";


import styles from "./CountryPicker.module.css";
const Countries = ({ handleCountryChange})=>{
    const [Countries, setCountries] = useState([]);
    useEffect(()=>{
        const fetchAPI= async ()=>{
            setCountries(await fetchCountries());
        }
        fetchAPI();
    },[setCountries]);

    console.log(Countries);
    
    return (
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(event)=>{handleCountryChange(event.target.value)}}>
                    <option value="global">Global</option>
                    {Countries.map((country,index)=> <option key={index} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default Countries;