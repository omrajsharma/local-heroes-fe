import { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button, TextField, Typography } from '@mui/material';
import apiCall from '../../../../../utils/apiUtils';
import API_ENUM from '../../../../../enum/API_ENUM';

const ServiceCategories = {
    HOME_SERVICES: 'Home Service',
    TECHNOLOGY_AND_ELECTRONICS: 'Technology and Electronics',
    BEAUTY_AND_GROOMING: 'Beauty and Grooming',
    EDUCATIONAL_SERVICES: 'Educational Services',
    MISCELLANEOUS_SERVICES: 'Miscellaneous Services',
};

const ProviderService = () => {
    const [serviceType, setServiceType] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleServiceTypeChange = (event: SelectChangeEvent) => {
        setServiceType(event.target.value as string);
    };

    const handleTitleChange = (ev: any) => {
        setTitle(ev.target.value);
    };

    const handlePriceChange = (ev: any) => {
        if (ev.target.value > 100000) return;
        setPrice(ev.target.value);
    };

    const handleDescriptionChange = (ev: any) => {
        setDescription(ev.target.value);
    };

    const handleFormSubmit = async () => {
        console.log('handlesubmit');
        const data = await apiCall(API_ENUM.PROVIDER_ADD_SERVICE, {serviceType, title, description, price});
        if (data?.success) {
            setServiceType("")
            setTitle("")
            setPrice("")
            setDescription("")
        }
    }

    return (
        <div style={{ marginTop: '16px', display: "flex", flexDirection: 'column' }}>
            <Typography
                variant="h5"
                align='center'
            >
                Add Service
            </Typography>
            <FormControl style={{ minWidth: '500px', margin: 'auto' }}>
                <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={serviceType}
                    label="Select Category"
                    onChange={handleServiceTypeChange}
                >
                    {Object.entries(ServiceCategories).map(([key, value]) => (
                        <MenuItem key={key} value={key}>
                            {value}
                        </MenuItem>
                    ))}
                </Select>
                <TextField
                    style={{ marginBottom: "10px" }}
                    type="text"
                    id="standard-basic"
                    label="Title"
                    variant="standard"
                    value={title}
                    onChange={handleTitleChange}
                />
                <TextField
                    style={{ marginBottom: "10px" }}
                    type="number"
                    id="standard-basic"
                    label="Price"
                    variant="standard"
                    value={price}
                    onChange={handlePriceChange}
                />
                <TextField
                    style={{ marginBottom: "10px" }}
                    type="text"
                    id="standard-basic"
                    label="Description"
                    variant="standard"
                    value={description}
                    onChange={handleDescriptionChange}
                />
                <Button variant='contained' onClick={handleFormSubmit}>
                    Add Service
                </Button>
            </FormControl>

        </div>
    )
}

export default ProviderService
