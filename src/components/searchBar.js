import React from 'react'
import IconButton from "@mui/material/IconButton";
import { InputAdornment, FormControl, InputLabel, OutlinedInput } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function searchBar() {
    return (

        <div className='searchbar-section'>

            <FormControl>
                <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment = {
                        <InputAdornment position="start">
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Amount"
                />
            </FormControl>

        </div>
    )
}


