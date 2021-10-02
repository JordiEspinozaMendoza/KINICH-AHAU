import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
export const Search = ({ center, changeLocation }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: {
        lat: () => center.lat,
        lng: () => center.lng,
      },
      radius: 200 * 1000,
    },
  });
  const handleInput = (e) => {
    setValue(e.target.value);
  };
  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      changeLocation(lat, lng);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Search a location"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ id, description }) => (
              <ComboboxOption
                key={id}
                value={description}
                className="search_item"
              />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};
