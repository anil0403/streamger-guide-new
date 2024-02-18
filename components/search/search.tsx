// import React from "react";
// import { Search as Srch } from "lucide-react";
// import { Input } from "../ui/input";

// interface SearchProps {
//   placeholder: string;
// }

// const Search = ({ placeholder }: SearchProps) => {
//   return (
//     <div className="relative">
//       <Srch className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
//       <Input placeholder={placeholder} className="pl-8" />
//     </div>
//   );
// };

// export default Search;

"use client";
import React from "react";
// import { Input } from "./ui/input";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

interface SearchProps {
  placeholder?: string;
}

const Search = ({ placeholder }: SearchProps) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e: any) => {
    const params = new URLSearchParams(searchParams);
    if (e.target.value) {
      params.set("searchQuery", e.target.value);
      replace(`${pathname}?${params}`);
    } else {
      params.delete("searchQuery");
      replace(`${pathname}?${params}`);
    }
    // params.set("page","1");
  }, 200);
  // const set.params("page",1);

  return (
    <Input
      onChange={handleSearch}
      type="text"
      placeholder={`Filter ${placeholder}...`}
      className=""
    />
  );
};

export default Search;
