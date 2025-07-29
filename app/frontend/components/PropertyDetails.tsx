import type { Property } from "./App";

interface Props {
  property: Property | undefined;
  onClose: () => void;
}

export default function PropertyDetails(props: Props) {
  if (!props.property) {
    return <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-2 ">
      <em>Select a property to see more details</em>
      </div>
  }
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-2 ">
      <div className="text-center text-xl mb-4">
        <strong>{props.property.name}</strong>
      </div>
      <div>
        <strong>Address: </strong>
        {props.property.address}
      </div>
      <div>
        <strong>Year Built: </strong>
        {props.property.year_built}
      </div>
      <div>
        <strong>Website: </strong>
        <a href={props.property.website_url} className="text-blue-500">
          {props.property.website_url}
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
