import FilterContent from "@/components/filter/filter";
import { getContents } from "@/lib/action/content/action";
// import { useSession } from "next-auth/react";
interface FilterContentProps {
  searchParams?: Record<string, string | string[]>;
}

export default async function Home({searchParams}: FilterContentProps) {

  const genre = searchParams?.genre?.toString() || "";
  console.log("genre = ", genre);
  const contents = await getContents();
  console.log("contents from index = ", contents);
  return (
    <div className="min-h-screen">
      <FilterContent />
    </div>
  );
}
