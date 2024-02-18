import React from "react";
import { Search as Srch } from "lucide-react";
import { Input } from "../ui/input";

interface SearchProps {
  placeholder: string;
}

const Search = ({ placeholder }: SearchProps) => {
  return (
    <div className="relative">
      <Srch className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input placeholder={placeholder} className="pl-8" />
    </div>
  );
};

export default Search;
