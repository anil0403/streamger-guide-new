"use client";

import * as React from "react";
import { Check, ChevronsUpDown, Filter } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const genres = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const FilterContent = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  console.log("value", value);

  return (
    <div className="flex items-center justify-between border-b py-2">
      <div className="text-muted-foreground flex space-x-2">
        <Filter /> <span className="text-xl font-bold">Filter</span>
      </div>
      <div>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {value
                ? genres.find((genre) => genre.value === value)?.label
                : "Select Genre ..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search Genre..." />
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {genres.map((genre) => (
                  <CommandItem
                    key={genre.value}
                    value={genre.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === genre.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {genre.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
export default FilterContent;
