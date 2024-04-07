import axios from "axios";
import { LatitudeLongtitude, TableItem } from "../type/data";

export const getCrimeAtLocation = async (
  LatitudeLongtitude: LatitudeLongtitude,
): Promise<TableItem[] | null> => {
  try {
    const response = await axios.get(
      `https://data.police.uk/api/crimes-at-location?date=2021-03&lat=${LatitudeLongtitude.latitude}&lng=${LatitudeLongtitude.longitude}`,
    );

    (await response.data) as [];
    if (response.data.length < 0) return [];
    return response.data;
  } catch (error) {
    console.error("Error crime data:", error);
    return null;
  }
};
export const getLatitudeLongitudeByPostcode = async (
  postcode: string,
): Promise<LatitudeLongtitude | null> => {
  try {
    const response = await axios.get(
      `https://api.getthedata.com/postcode/${postcode}`,
    );
    await response.data;

    if (response.data.data.latitude === null) return null;
    const locationData: LatitudeLongtitude = {
      latitude: response.data.data.latitude,
      longitude: response.data.data.longitude,
      postcode: response.data.data.postcode,
    };

    return locationData;
  } catch (error) {
    console.error("Error latitude and longtitude data:", error);
    return null;
  }
};
