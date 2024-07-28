import React from 'react'
import { TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function searchBar() {

    const handleSearch = () => { }

    return (

        <div className='searchbar-section flex justify-start items-center'>
            <div className='w-1/2'>
                <TextField
                    placeholder="Search by artists, songs or albums"
                    variant="outlined"
                    size="small"
                    fullWidth
                    onChange={handleSearch}
                    InputProps={{
                        style: { color: "#1e1e1e", backgroundColor: "#1e1e1e", borderRadius: "16px" },
                        startAdornment: (
                            <SearchIcon style={{ color: 'gray' }} />
                        ),
                    }}
                />
            </div>
        </div>
    )
}
