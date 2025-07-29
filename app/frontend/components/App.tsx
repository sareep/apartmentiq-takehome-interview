import axios from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    'Content-Type': 'application/json',
  },
})

const PROPERTIES_ENDPOINT = "/api/v1/properties"

interface Property {
  id: number,
  name: string,
  address: string,
  yearBuilt: number,
  websiteUrl: string
}

export default function App() {
  const [properties, setProperties] = useState<Property[]>([])
  
  useEffect(() => {
    api.get(PROPERTIES_ENDPOINT)
      .then(({data}) => setProperties(data as Property[]))
  }, [])
  
  
  return (
    <>
      <h1>
        Properties
      </h1>
      {properties.map(p => <div key={p.id}>{p.name}, {p.address}, {p.yearBuilt}, {p.websiteUrl}</div>)}
    </>
  );
}
