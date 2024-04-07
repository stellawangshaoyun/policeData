import axios from "axios";
import { LatitudeLongtitude } from "../type/data";

export const getLatitudeLongitudeByPostcode = async (
  postcode: string,
): Promise<LatitudeLongtitude | null> => {
  try {
    const response = await axios.get(
      `https://api.getthedata.com/postcode/${postcode}`,
    );
    await response.data;
    console.log(response.data.data);
    if (response.data.data.latitude === null) return null;
    const locationData: LatitudeLongtitude = {
      latitude: response.data.data.latitude,
      longitude: response.data.data.longitude,
    };
    return locationData;
  } catch (error) {
    console.error("Error latitude and longtitude data:", error);
    return null;
  }
};
