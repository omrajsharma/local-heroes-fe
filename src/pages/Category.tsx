import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Container from '../components/atoms/Container';
import apiCall from '../utils/apiUtils';
import API_ENUM from '../enum/API_ENUM';
import { UserContext } from '../context/UserContext';
import { Box, Button, FormControl, FormControlLabel, FormLabel, Modal, Radio, RadioGroup, TextField, Tooltip, Typography } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import dayjs from 'dayjs';

const colorPelette = ["#cdb4db", "#ffc8dd", "#ffafcc", "#bde0fe", "#a2d2ff"]

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 4
};

const paramToCategoryEnum = (param: string | undefined) => {
    switch(param) {
        case "education": return "EDUCATIONAL_SERVICES";
        case "home": return "HOME_SERVICES";
        case "beauty": return "BEAUTY_AND_GROOMING";
        case "techonology": return "TECHNOLOGY_AND_ELECTRONICS";
        case "other-services": return "MISCELLANEOUS_SERVICES";
        default: return "MISCELLANEOUS_SERVICES";
    }
}

interface Availability {
    daysType: string;
    endDate: string | null;
    endTime: string;
    startDate: string | null;
    startTime: string;
  }
  
  interface Service {
    _id: string;
    category: string;
    description: string;
    price: number;
    title: string;
  }
  
  interface Provider {
    availability: Availability;
    createdAt: string;
    email: string;
    name: string;
    password: string;
    phone: string;
    services: Service[];
    updatedAt: string;
    userType: string;
    username: string;
    __v: number;
    _id: string;
  }
  
  interface ProviderList extends Array<Provider> {}  

const Category = () => {
    const {categoryName} = useParams()
    const [providerList, setProviderList] = useState<ProviderList>([]);
    console.log(providerList);
    

    const getProviders = async () => {
        const categoryEnum = paramToCategoryEnum(categoryName)
        const data = await apiCall(API_ENUM.PROVIDERS_BY_CATEGORY, undefined, `?category=${categoryEnum}`)
        setProviderList(data?.data?.providers)
    }

    useEffect(() => {
        getProviders();
    }, [])

  return (
        <Container maxWidth='sm'>
            <div>
                { providerList.map((provider, idx) => 
                    <ProviderCard 
                        key={idx} 
                        idx={idx} 
                        providerId={provider._id}
                        name={provider.name} 
                        phoneNumber={provider.phone} 
                        services={provider.services}
                        availability={provider.availability}
                    /> 
                )}
            </div>
        </Container>
  )
}

const ProviderCard = ({idx, providerId, name, phoneNumber, services, availability}: any) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [showService, setShowService] = useState(false);
    const nameBgColor = colorPelette[idx % 5];
    // const availabilityEndDate = availability?.endDate == undefined ? undefined : new Date(availability?.endDate);
    const [bookingStep, setBookingStep] = useState(1);
    const [selectedService, setSelectedService] = useState<Service>()
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedStartTime, setSelectedStartTime] = useState("");
    const [selectedEndTime, setSelectedEndTime] = useState("");
    const [clientAddress, setClientAddress] = useState({
        addressLineOne: "",
        addressLineTwo: "",
        city: "",
        state: "",
        pincode: 0
    });
    const [paymentMode, setPaymentMode] = useState("");

    const handleUserServiceSelection = (service: any) => {
        setSelectedService(service)
        handleOpen();
    }

    const handleBookService = async () => {
        const response = await apiCall(API_ENUM.CLIENT_SERVICE_BOOKING, {
            providerId: providerId,
            providerServiceId: selectedService?._id,
            address: clientAddress.addressLineOne + ',' + clientAddress.addressLineTwo + ',' + clientAddress.city + ',' + clientAddress.state + ',' + clientAddress.pincode,
            date: (selectedDate ? `${selectedDate.getDate()}/${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}` : ''),
            startTime: selectedStartTime,
            endTime: selectedEndTime,
            paymentMode: paymentMode,
        })

        // empty the existing state
        if (response?.success) {

        }
    }

    return (
        <div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px", borderRadius: "16px", marginBottom: "16px", boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px", cursor: "pointer", color: "#464646"}}
                onClick={() => setShowService(!showService)}
            >
                <div style={{display: "flex", gap: "16px", alignItems: "center"}}>
                    <div style={{fontSize: "28px", fontWeight: "bold", width: "38px", height: "38px", display: 'flex', justifyContent: "center", alignItems: "center", borderRadius: "50%", background: nameBgColor}}>
                        {name[0].toUpperCase()}
                    </div>
                    <div>
                        <p style={{fontSize: "22px", fontWeight: "bold"}}>{name}
                            {   availability == undefined && 
                                <Tooltip title="Provider availability is not present in the system. Please contact and confirm" arrow>
                                    <span style={{fontSize: "16px", color: "#00f",}}> ⓘ</span>
                                </Tooltip>
                            }
                        </p>
                    </div>
                </div>
                <div style={{fontSize: "22px", fontWeight: "bold"}}>{phoneNumber} ☎️ </div>
            </div>

            {showService && services.map(( service: any, idx: number ) => 
                <ServiceCard 
                    key={idx} 
                    service={service}
                    handleUserServiceSelection={handleUserServiceSelection}
                />
            )}

            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {   availability == undefined ? (
                        <div>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Provider availability is not present
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ my: 2 }}>
                                Please confirm by contacting provider on this number <a href={"tel:" + phoneNumber}>{phoneNumber}</a>
                            </Typography>
                            <Button variant='contained' onClick={handleClose}>Close</Button>
                        </div>) :
                        (<div>
                            {   bookingStep == 1 && (
                                <>
                                    <Typography id="modal-modal-title" variant="h5" component="h2" fontWeight={500}>
                                        Select the time slot
                                    </Typography>
                                    <div style={{margin: "16px 0"}}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker 
                                                disablePast
                                                value={selectedDate}
                                                onChange={e => setSelectedDate(e)}
                                            />
                                        </LocalizationProvider>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['TimePicker']}>
                                                <TimePicker 
                                                label="Start Time" 
                                                onChange={(newTime: Date | null) => {
                                                    if (newTime) {
                                                        const formattedTime = dayjs(newTime).format('HH:mm');
                                                        setSelectedStartTime(formattedTime);
                                                    }
                                                }}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['TimePicker']}>
                                                <TimePicker 
                                                label="End Time"
                                                onChange={(newTime: Date | null) => {
                                                    if (newTime) {
                                                        const formattedTime = dayjs(newTime).format('HH:mm');
                                                        setSelectedEndTime(formattedTime);
                                                    }
                                                }}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                    <Button 
                                        variant='contained'
                                        disabled={selectedStartTime == "" || selectedEndTime == "" || selectedDate == undefined}
                                        onClick={() => setBookingStep(bookingStep + 1)}
                                    >
                                        Continue
                                    </Button>
                                </>
                            )}
                            {   bookingStep == 2 && (
                                <>
                                    <Typography id="modal-modal-title" variant="h5" component="h2" fontWeight={500}>
                                        Enter your address
                                    </Typography>

                                    <TextField
                                        fullWidth
                                        style={{ marginBottom: "10px" }}
                                        type="text"
                                        id="standard-basic"
                                        label="Address Line One"
                                        variant="standard"
                                        value={clientAddress.addressLineOne}
                                        onChange={(e:any) => setClientAddress({...clientAddress, addressLineOne: e.target.value})}
                                    />

                                    <TextField
                                        fullWidth
                                        style={{ marginBottom: "10px" }}
                                        type="text"
                                        id="standard-basic"
                                        label="Address Line Two"
                                        variant="standard"
                                        value={clientAddress.addressLineTwo}
                                        onChange={(e:any) => setClientAddress({...clientAddress, addressLineTwo: e.target.value})}
                                    />

                                    <TextField
                                        fullWidth
                                        style={{ marginBottom: "10px" }}
                                        type="text"
                                        id="standard-basic"
                                        label="City"
                                        variant="standard"
                                        value={clientAddress.city}
                                        onChange={(e:any) => setClientAddress({...clientAddress, city: e.target.value})}
                                    />

                                    <TextField
                                        fullWidth
                                        style={{ marginBottom: "10px" }}
                                        type="text"
                                        id="standard-basic"
                                        label="State"
                                        variant="standard"
                                        value={clientAddress.state}
                                        onChange={(e:any) => setClientAddress({...clientAddress, state: e.target.value})}
                                    />

                                    <TextField
                                        fullWidth
                                        style={{ marginBottom: "10px" }}
                                        type="number"
                                        id="standard-basic"
                                        label="Pincode"
                                        variant="standard"
                                        value={clientAddress.pincode}
                                        onChange={(e:any) => setClientAddress({...clientAddress, pincode: e.target.value})}
                                    />

                                    <Button 
                                        variant='contained'
                                        disabled={
                                            clientAddress.addressLineOne == '' || 
                                            clientAddress.addressLineTwo == '' ||
                                            clientAddress.city == '' ||
                                            clientAddress.state == '' 
                                        }
                                        onClick={() => setBookingStep(bookingStep + 1)}
                                    >
                                        Continue
                                    </Button>
                                </>
                            )}
                            {   bookingStep == 3 && (
                                <>
                                    <Typography id="modal-modal-title" variant="h5" component="h2" fontWeight={500}>
                                        Select payment mode
                                    </Typography>
                                    <FormControl fullWidth>
                                        <FormLabel id="demo-controlled-radio-buttons-group">Modes</FormLabel>
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            value={paymentMode}
                                            onChange={e => setPaymentMode(e.target.value)}
                                        >
                                            <FormControlLabel value="UPI" control={<Radio />} label="UPI" disabled />
                                            <FormControlLabel value="COD" control={<Radio />} label="At location" />
                                        </RadioGroup>
                                    </FormControl>
                                    <Button 
                                        variant='contained'
                                        disabled={paymentMode == ''}
                                        onClick={() => setBookingStep(bookingStep + 1)}
                                    >
                                        Continue
                                    </Button>
                                </>
                            )}
                            {   bookingStep == 4 && (
                                <>
                                    <Typography id="modal-modal-title" variant="h5" component="h2" fontWeight={500}>
                                        Billing Details
                                    </Typography>

                                    <div className='booking-details'>
                                        <div className="booking-details-row">
                                            <div className="booking-details-row-key">Service Type</div>
                                            <div className="booking-details-row-value"> {selectedService?.title} </div>
                                        </div>
                                        <div className="booking-details-row">
                                            <div className="booking-details-row-key">Date & Time</div>
                                            <div className="booking-details-row-value"> {selectedDate ? dayjs(selectedDate).format('YYYY-MM-DD') : ''}, {selectedStartTime + ' - ' + selectedEndTime} </div>
                                        </div>
                                        <div className="booking-details-row">
                                            <div className="booking-details-row-key">Address</div>
                                            <div className="booking-details-row-value"> {clientAddress.addressLineOne}, {clientAddress.addressLineTwo}, {clientAddress.city}, {clientAddress.state}, {clientAddress.pincode} </div>
                                        </div>
                                        <div className="booking-details-row">
                                            <div className="booking-details-row-key">Payment Mode</div>
                                            <div className="booking-details-row-value"> {paymentMode} </div>
                                        </div>
                                    </div>

                                    <Button 
                                        variant='contained'
                                        disabled={paymentMode == ""}
                                        onClick={handleBookService}
                                    >
                                        BOOK
                                    </Button>
                                </>
                            )}
                            
                        </div>)
                    }
                </Box>
            </Modal>
        </div>
    )
}

const ServiceCard = ({ service, handleUserServiceSelection }: any) => {
    const { userInfo } = useContext(UserContext);
    const [navigateState, setNavigateState] = useState(false);
    const navigate = useNavigate();

    if (navigateState)
        navigate("/login")

    const handleServiceCardClick = () => {
        if (userInfo.userId == '') {
            setNavigateState(!navigateState);
            return;
        }
        handleUserServiceSelection(service);
    }
    
    return (
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <div 
                style={{ width: '95%', display: 'flex', justifyContent: 'space-between', padding: '12px', marginBottom: '12px', boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px", cursor: "pointer"}}
                onClick={handleServiceCardClick}
            >
                <div>
                    <p style={{fontSize: '18px'}}>{service.title}</p>
                    <p style={{fontSize: '14px', color: '#565656'}}>{service.description}</p>
                </div>
                <div>{service.price}/-</div>
            </div>
        </div>
    )
}

export default Category
