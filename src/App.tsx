import SearchInput from "./components/SearchInput";
import Table from "./components/Table";
import CrimeMap from "./components/CrimeMap";
import { useEffect, useState } from "react";
import { getCrimeAtLocation } from "./api/getCrimeDateApi";
import { TableItem } from "./type/data";
function App() {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
    postcode: string | null;
  }>({
    latitude: 51.52,
    longitude: -0.1,
    postcode: null,
  });

  const [table, setTable] = useState<TableItem[] | null>([]);
  const handleLocationChange = (
    latitude: number,
    longitude: number,
    postcode: string,
  ) => {
    setLocation({ latitude, longitude, postcode });
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCrimeAtLocation(location);
      setTable(data);
    };

    fetchData();
  }, [location]);
  return (
    <>
      <div>
        <div className="absolute top-8 left-5 z-50 px-4 sm:px-6 lg:px-8  bg-white rounded">
          <SearchInput onLocationChange={handleLocationChange} />
          {table !== null && location.postcode !== null && (
            <Table postcode={location.postcode} tableData={table} />
          )}
        </div>

        <CrimeMap center={[location.longitude, location.latitude]} zoom={11} />
      </div>
    </>
  );
}

export default App;
