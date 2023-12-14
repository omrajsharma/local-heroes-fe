import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '../components/atoms/Container';

const colorPelette = ["#cdb4db", "#ffc8dd", "#ffafcc", "#bde0fe", "#a2d2ff"]

const providers = [
    {
        name: "Shyam sharma",
        service: "Testing on earth",
        price: 500
    },
    {
        name: "Shyam sharma",
        service: "Testing on earth",
        price: 500
    },
    {
        name: "Shyam sharma",
        service: "Testing on earth",
        price: 500
    },
    {
        name: "Shyam sharma",
        service: "Testing on earth",
        price: 500
    },
    {
        name: "Shyam sharma",
        service: "Testing on earth",
        price: 500
    },
    {
        name: "Shyam sharma",
        service: "Testing on earth",
        price: 500
    },
    {
        name: "Shyam sharma",
        service: "Testing on earth",
        price: 500
    },
    {
        name: "Shyam sharma",
        service: "Testing on earth",
        price: 500
    },
    {
        name: "Shyam sharma",
        service: "Testing on earth",
        price: 500
    },
]

const Category = () => {
    const {categoryName} = useParams()
  return (
        <Container maxWidth='sm'>
            <div>
                { providers.map((provider, idx) => <ProviderCard key={idx} idx={idx} name={provider.name} service={provider.service} price={provider.price} /> ) }
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
