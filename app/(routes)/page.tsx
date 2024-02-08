import FilterContent from "@/components/filter/filter";
import { getContents } from "@/lib/action/content/action";

export default async function Home() {
  const contents = await getContents();
  console.log("contents", contents);
  return (
    <div>
      <FilterContent />
    </div>
  );
}
