import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { useState } from 'react';
import dayjs from 'dayjs';
import { Button } from '@mui/material';

const ProviderAvailability = () => {
    const today = dayjs();
    const [formDays, setFormDays] = useState("");
    const [formStartTime, setFormStartTime] = useState("");
    const [formEndTime, setFormEndTime] = useState("");



    return (
        <div>
            <FormControl fullWidth>
                <FormLabel id="demo-radio-buttons-group-label">Select Days</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    row
                    onChange={e => setFormDays(e.target.value)}
                >
                    <FormControlLabel value="ALL_DAYS" control={<Radio />} label="All Days" />
                    <FormControlLabel value="DATE_RANGE" control={<Radio />} label="Select Days" />
                </RadioGroup>
                {formDays == 'DATE_RANGE' && (
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DemoContainer components={['DateRangePicker']}>
                            <DateRangePicker
                                localeText={{ start: 'Check-in', end: 'Check-out' }}
                                minDate={today}
                                autoFocus
                                onChange={e => console.log(e[0]?.toDate(), e[1]?.toDate())}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                )}

                <div style={{display: 'flex', gap: '16px', marginBottom: '16px'}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['TimePicker']}>
                            <TimePicker label="Start Time" onChange={e => console.log(e.valueOf())}/>
                        </DemoContainer>
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['TimePicker']}>
                            <TimePicker label="End Time" />
                        </DemoContainer>
                    </LocalizationProvider>
                </div>

                <Button variant='contained' >Submit</Button>
            </FormControl>


        </div>
    );
}

export default ProviderAvailability
