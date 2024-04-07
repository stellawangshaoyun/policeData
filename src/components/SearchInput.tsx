import React, { useState } from "react";
import { getLatitudeLongitudeByPostcode } from "../api/getCrimeDateApi";
interface SearchInputProps {
  onLocationChange: (
    latitude: number,
    longitude: number,
    postcode: string,
  ) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onLocationChange }) => {
  const [postcode, setPostcode] = useState<string>("");
  const handlePostcodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostcode(event.target.value);
    if (event.target.value.length < 6) return;
    getLatitudeLongitudeByPostcode(event.target.value).then((location) => {
      if (location === null) return;
      if (location.postcode === null) return;
      onLocationChange(
        location.latitude,
        location.longitude,
        location.postcode,
      );
    });
  };

  return (
    <div className="my-4">
      <label
        htmlFor="search"
        className="block text-base font-semibold leading-6 text-gray-900"
      >
        Search crime data by postcodes
      </label>
      <div className="relative mt-2 flex items-center">
        <input
          type="text"
          name="search"
          id="search"
          className="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
          placeholder="Enter postcode"
          value={postcode}
          onChange={handlePostcodeChange}
        />
      </div>
    </div>
  );
};

export default SearchInput;
