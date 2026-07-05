import { WorkList } from "@/components/work-list";
import { jobs } from "@/lib/work";
import { readProjectAssets } from "@/lib/assets";

export default function WorkPage() {
  const logos: Record<string, string | null> = {};
  for (const job of jobs) {
    logos[job.slug] = job.logo ? readProjectAssets(job.logo).logo : null;
  }
  return <WorkList logos={logos} />;
}
