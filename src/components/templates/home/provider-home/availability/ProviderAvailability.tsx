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
import apiCall from '../../../../../utils/apiUtils';
import API_ENUM from '../../../../../enum/API_ENUM';

const ProviderAvailability = () => {
    const today = dayjs();
    const [daysType, setDaysType] = useState("");
    const [startDate, setStartDate] = useState<Date | undefined>();
    const [endDate, setEndDate] = useState<Date | undefined>();
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    const handleSubmit = async () => {
        const data = await apiCall(API_ENUM.PROVIDER_UPDATE_AVAILABILITY , {daysType, startDate, endDate, startTime, endTime})
    }

    return (
        <div style={{ marginTop: '16px', display: "flex", flexDirection: 'column' }}>
            <FormControl style={{ minWidth: '500px', margin: 'auto' }}>
                <FormLabel id="demo-radio-buttons-group-label">Select Days</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    row
                    onChange={e => setDaysType(e.target.value)}
                >
                    <FormControlLabel value="ALL_DAYS" control={<Radio />} label="All Days" />
                    <FormControlLabel value="DATE_RANGE" control={<Radio />} label="Select Days" />
                </RadioGroup>
                {daysType == 'DATE_RANGE' && (
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DemoContainer components={['DateRangePicker']}>
                            <DateRangePicker
                                localeText={{ start: 'Start Date', end: 'End Date' }}
                                minDate={today}
                                autoFocus
                                onChange={e => {
                                    setStartDate(dayjs(e[0]?.toDate()).toDate())
                                    setEndDate(dayjs(e[1]?.toDate()).toDate())
                                }}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                )}

                <div style={{display: 'flex', gap: '16px', marginBottom: '16px'}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['TimePicker']}>
                            <TimePicker 
                            label="Start Time" 
                            onChange={(newTime) => {
                                // Format the selected time in 24-hour format
                                const formattedTime = dayjs(newTime).format('HH:mm');
                                setStartTime(formattedTime)
                            }}/>
                        </DemoContainer>
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['TimePicker']}>
                            <TimePicker 
                            label="End Time"
                            disabled={startTime == "" ? true : false}
                            onChange={(newTime) => {
                                // Format the selected time in 24-hour format
                                const formattedTime = dayjs(newTime).format('HH:mm');
                                setEndTime(formattedTime)
                            }}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </div>

                <Button variant='contained' onClick={handleSubmit}>Submit</Button>
            </FormControl>
        </div>
    );
}

export default ProviderAvailability
