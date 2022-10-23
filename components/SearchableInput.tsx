import { useState } from "react";
import { Combobox } from "@headlessui/react";

const city = ["Istanbul", "Barcelona", "Paris", "London", "New York"];

function SearchableInput() {
  const [selectedPerson, setSelectedPerson] = useState(city[0]);
  const [query, setQuery] = useState("");

  const filteredCity =
    query === ""
      ? city
      : city.filter((city) => {
          return city.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <>
      <Combobox value={selectedPerson} onChange={setSelectedPerson}>
        <Combobox.Input
          onChange={(event) => setQuery(event.target.value)}
          className="rounded-l w-full h-12 md:h-16 lg:h-12 border border-black md:text-3xl"
        />
        <Combobox.Options className="absolute mt-52 bg-white overflow-hidden">
          {filteredCity.map((city) => (
            <Combobox.Option key={city} value={city} className="">
              {city}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </>
  );
}
export default SearchableInput;
