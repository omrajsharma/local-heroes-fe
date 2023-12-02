import { Button } from "@mui/material";
import Container from "../../atoms/Container";
import { useState } from "react";
import ProviderRequest from "./provider-home/request/ProviderRequest";
import ProviderAvailability from "./provider-home/availability/ProviderAvailability";

const tabs = ["REQUEST", "AVAILABILITY", "SERVICE"];

const ProviderHome = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <Container>
      <div>
        <div className="provider-tabs"style={{display: "flex", gap: "12px", paddingBottom: "12px", borderBottom: "1px solid rgba(0, 0, 0, 0.12)"}} >
          {tabs.map((tab, index) => (
            <Button
              variant={selectedTabIndex == index ? "contained" : "outlined"}
              onClick={() => setSelectedTabIndex(index)}
            >
              {tab}
            </Button>
          ))}
        </div>

        <main className="provider-main">
            { 
              selectedTabIndex == 0 ? <ProviderRequest /> :
              selectedTabIndex == 1 ? <ProviderAvailability/> : null
            }
        </main>
      </div>
      
    </Container>
  );
};

export default ProviderHome;
