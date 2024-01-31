import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import "./ProviderRequest.css";
import apiCall from "../../../../../utils/apiUtils";
import API_ENUM from "../../../../../enum/API_ENUM";

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

            <RequestList selectedTabIndex={selectedTabIndex} />
        </div>
    );
}

const RequestList = ({selectedTabIndex}: any) => {
    const [requestList, setRequestList] = useState<any[]>([]);

    useEffect(() => {
        apiCall(API_ENUM.PROVIDER_GET_REQUEST, undefined, `?status=${tabs[selectedTabIndex]}`)
        .then(response => {
            setRequestList(response?.data)
        })
    }, [selectedTabIndex])

    console.log('requestList', requestList);
    
    
    return (
        <div>
            <h1>REQUEST LIST</h1>
        </div>
    )
}

// const ProviderRequestCard = ({
//     userImg,
//     name,
//     phone,
//     status,
//     serviceType,
//     dateTime,
//     address
// }: any) => {
//     return (
//         <div className="provider-request-card">
//             <div className="provider-request-card-head">
//                 <div className="provider-request-card-head-left">
//                     <div className="provider-request-card-head-left-img">
//                         <img src={userImg} alt="" />
//                     </div>
//                     <div>
//                         <p>{name}</p>
//                         <p>{phone}</p>
//                         <p>{status}</p>
//                     </div>
//                 </div>
//                 <div className="provider-request-card-head-right">
                    
//                     <p>🎖️ {serviceType}</p>
//                     <p>⏰ {dateTime}</p>
//                     <p>🏠 {address}</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default ProviderRequest
