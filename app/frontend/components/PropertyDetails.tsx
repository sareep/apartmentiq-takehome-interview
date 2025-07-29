import axios from "axios";
import { useEffect, useState } from "react";
import { PROPERTIES_ENDPOINT, type Property } from "./App";

interface Props {
  propertyId: number | undefined;
  onClose: () => void;
}

export default function PropertyDetails(props: Props) {
  const [property, setProperty] = useState<Property>();

  useEffect(() => {
    axios
      .get<Property>(`${PROPERTIES_ENDPOINT}/${props.propertyId}`)
      .then((resp) =>
        resp.data.id ? setProperty(resp.data) : setProperty(undefined)
      );
  }, [props.propertyId]);

  if (!property) {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-2 ">
        <em>Select a property to see more details</em>
      </div>
    );
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-2 ">
      <div className="text-center text-xl mb-4">
        <strong>{property.name}</strong>
      </div>
      <div>
        <strong>Address: </strong>
        {property.address}
      </div>
      <div>
        <strong>Year Built: </strong>
        {property.year_built}
      </div>
      <div>
        <strong>Website: </strong>
        <a href={property.website_url} className="text-blue-500">
          {property.website_url}
        </a>
      </div>
      <div className="text-center text-gray-500 mt-4">
        <button
          className="cursor-default hover:cursor-pointer"
          onClick={props.onClose}
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}
