import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../components/atoms/Container';
import apiCall from '../utils/apiUtils';
import API_ENUM from '../enum/API_ENUM';

const colorPelette = ["#cdb4db", "#ffc8dd", "#ffafcc", "#bde0fe", "#a2d2ff"]

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
                { providerList.map((provider, idx) => <ProviderCard key={idx} idx={idx} name={provider.name} service={'testing'} price={'testing'} /> ) }
            </div>
        </Container>
  )
}

const ProviderCard = ({idx, name, service, price}: any) => {
    const nameBgColor = colorPelette[idx % 5];
    
    return (
        <div style={{display: "flex", justifyContent: "space-between", padding: "16px", borderRadius: "16px", marginBottom: "16px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
            <div style={{display: "flex", gap: "16px"}}>
                <div style={{fontSize: "38px", fontWeight: "bold", width: "48px", height: "48px", display: 'flex', justifyContent: "center", alignItems: "center", borderRadius: "50%", background: nameBgColor}}>
                    {name[0].toUpperCase()}
                </div>
                <div>
                    <p style={{fontSize: "22px", fontWeight: "bold"}}>{name}</p>
                    <p>{service}</p>
                </div>
            </div>
            <div style={{fontSize: "28px", fontWeight: "bold"}}>{price} /-</div>
        </div>
    )
}

export default Category
