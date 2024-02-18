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
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const FilterYear = () => {
  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from(
    { length: currentYear - 1989 },
    (_, index) => ({
      value: (1990 + index).toString(),
      label: (1990 + index).toString(),
    })
  );
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  console.log("value = ", value);
  React.useEffect(() => {
    if (value === "none") {
      params.delete("year");
      replace(`${pathname}?${params}`);
    } else {
      params.set("year", value);
      replace(`${pathname}?${params}`);
    }
  }, [value]);

  return (
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
              ? yearOptions.find((item: any) => item.value === value)?.label
              : "Select Year ..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] h-[500px] p-0">
          <Command>
            <CommandInput placeholder="Search Year..." />
            <CommandEmpty>No year found.</CommandEmpty>
            <CommandGroup>
              {yearOptions.map((item: any) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};
export default FilterYear;
