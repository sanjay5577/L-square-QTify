import * as React from 'react'
import { PropTypes } from 'prop-types'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import styles from "./BasicTabs.css"
import {  useState } from 'react'


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

CustomTabPanel.prototype = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function allyProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
export default function BasicTabs({ filteredData }) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        filteredData(newValue)
        setValue(newValue)
        console.log('new value is ' + newValue)
    }
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label='basic tabs' TabIndicatorProps={{
                    style: { backgroundColor: "#34c94b" ,color :"#ffffff"}
                }} textColor='#ffffff' className={styles.tabs}>
                    <Tab label="All" {...allyProps(0)} sx={{ textTransform: "none" ,color :"#ffffff"}}/>
                    <Tab label="Rock" {...allyProps(1)} sx={{ textTransform: "none" ,color :"#ffffff"}}/>
                    <Tab label="Pop" {...allyProps(2)} sx={{ textTransform: "none" ,color :"#ffffff"}}/>
                    <Tab label="Jazz" {...allyProps(3)} sx={{ textTransform: "none",color :"#ffffff" }}/>
                    <Tab label="Blues" {...allyProps(4)}sx={{ textTransform: "none",color :"#ffffff" }} />
                </Tabs>
            </Box>
        </Box>
    )
}