export interface LatitudeLongtitude {
  latitude: number;
  longitude: number;
  postcode: string | null;
}
export interface TableItem {
  month: string;
  category: string;
  location: {
    latitude: string;
    longitude: string;
    street: {
      id: number;
      name: string;
    };
  };
  outcome_status: {
    category: string;
    date: string;
  } | null;
}
