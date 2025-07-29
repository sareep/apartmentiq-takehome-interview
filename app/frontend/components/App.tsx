import axios from "axios";
import { useEffect, useState } from "react";
import PropertiesTable from "./PropertiesTable";
import PropertyDetails from "./PropertyDetails";

const PROPERTIES_ENDPOINT = "/api/v1/properties";

export interface Property {
  id: number;
  name: string;
  address: string;
  year_built: number;
  website_url: string;
}

export default function App() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [selectedPropertyId, setSelectedPropertyId] = useState<number>();

  useEffect(() => {
    axios
      .get(PROPERTIES_ENDPOINT)
      .then(({ data }) => setProperties(data as Property[]));
  }, []);

  return (
    <>
      <h1 className="text-4xl mb-2 text-center">Properties</h1>
      <div className="flex m-2 gap-4">
        <div className="ml-2 w-full">
          <PropertiesTable
            properties={properties}
            setSelectedPropertyId={setSelectedPropertyId}
          />
        </div>
        <div className="ml-2 w-full">
          <PropertyDetails
            property={properties.find((p) => p.id == selectedPropertyId)}
            onClose={() => setSelectedPropertyId(undefined)}
          />
        </div>
      </div>
    </>
  );
}
