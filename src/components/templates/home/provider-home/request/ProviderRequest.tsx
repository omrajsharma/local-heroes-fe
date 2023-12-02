import { Button, Card } from "@mui/material";
import { useState } from "react";
import "./ProviderRequest.css";

const tabs = ["ALL", "IN_PROGRESS", "COMPLETED", "CANCELLED"];

const ProviderRequest = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    return (
        <div>
            <div className="provider-request-tabs"style={{marginTop: "12px", paddingBottom: "12px", display: "flex", gap: "12px", flexWrap: "wrap"}} >
                {tabs.map((tab, index) => (
                    <Button
                    variant={selectedTabIndex == index ? "contained" : "outlined"}
                    onClick={() => setSelectedTabIndex(index)}
                    >
                    {tab}
                    </Button>
                ))}
            </div>
            
            <ProviderRequestCard
                userImg="https://omrajsharma.github.io/assets/images/omraj-sharma.png"
                name="Omraj Sharma"
                phone="1234567890"
                status="Active"
                serviceType="Learning"
                dateTime="Nov 25, 8:00 AM"
                address="New Delhi, Delhi"
            />
        </div>
    );
}

const ProviderRequestCard = ({
    userImg,
    name,
    phone,
    status,
    serviceType,
    dateTime,
    address
}: any) => {
    return (
        <div className="provider-request-card">
            <div className="provider-request-card-head">
                <div className="provider-request-card-head-left">
                    <div className="provider-request-card-head-left-img">
                        <img src={userImg} alt="" />
                    </div>
                    <div>
                        <p>{name}</p>
                        <p>{phone}</p>
                        <p>{status}</p>
                    </div>
                </div>
                <div className="provider-request-card-head-right">
                    
                    <p>🎖️ {serviceType}</p>
                    <p>⏰ {dateTime}</p>
                    <p>🏠 {address}</p>
                </div>
            </div>
        </div>
    )
}

export default ProviderRequest
