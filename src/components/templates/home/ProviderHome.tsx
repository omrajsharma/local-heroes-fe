import { Button } from "@mui/material";
import Container from "../../atoms/Container";
import { useState } from "react";

const tabs = ["REQUEST", "AVAILABILITY", "SERVICE"];

const ProviderHome = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <Container>
      <div className="provider-tabs">
        {tabs.map((tab, index) => (
          <Button
            variant={selectedTabIndex == index ? "contained" : "outlined"}
            onClick={() => setSelectedTabIndex(index)}
          >
            {tab}
          </Button>
        ))}
      </div>
      
    </Container>
  );
};

export default ProviderHome;
