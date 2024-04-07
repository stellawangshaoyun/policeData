import SearchInput from "./components/SearchInput";
import Table from "./components/Table";
import CrimeMap from "./components/CrimeMap";

function App() {
  return (
    <>
      <div>
        <div>
          <SearchInput />
          <Table />
        </div>

        <CrimeMap center={[-74.5, 40]} zoom={7} />
      </div>
    </>
  );
}

export default App;
