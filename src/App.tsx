import SearchInput from "./components/SearchInput";
import Table from "./components/Table";
import CrimeMap from "./components/CrimeMap";
import { useState } from "react";

function App() {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  }>({
    latitude: 51.52,
    longitude: -0.1,
  });
  const handleLocationChange = (latitude: number, longitude: number) => {
    setLocation({ latitude, longitude });
  };
  console.log(location);
  return (
    <>
      <div>
        <div>
          <SearchInput onLocationChange={handleLocationChange} />
          <Table />
        </div>

        <CrimeMap center={[-74.5, 40]} zoom={7} />
      </div>
    </>
  );
}

export default App;
