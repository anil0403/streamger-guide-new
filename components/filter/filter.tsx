import * as React from "react";
import { Filter } from "lucide-react";
import FilterGenre from "./filter-genre";
import { getGenres } from "@/lib/action/genre/action";
import FilterYear from "./filter-year";

const FilterContent = async () => {
  const genres = await getGenres();
  return (
    <div className="flex items-center justify-between border-b py-2">
      <div className="text-muted-foreground flex space-x-2">
        <Filter /> <span className="text-xl font-bold">Filter</span>
      </div>
      <FilterGenre genres={genres} />
      <FilterYear />
    </div>
  );
};
export default FilterContent;
