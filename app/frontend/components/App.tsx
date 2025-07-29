import axios from "axios";
import { useEffect, useState } from "react";
import PropertiesTable from "./PropertiesTable";

const PROPERTIES_ENDPOINT = "/api/v1/properties"

export interface Property {
  id: number;
  name: string;
  address: string;
  yearBuilt: number;
  websiteUrl: string;
}

export default function App() {
  const [properties, setProperties] = useState<Property[]>([])
  
  useEffect(() => {
    axios.get(PROPERTIES_ENDPOINT)
      .then(({data}) => setProperties(data as Property[]))
  }, [])
  
  
  return (
    <>
      <h1>Properties</h1>
      <PropertiesTable properties={properties} />
    </>
  );
}
