import AnalyticsChart from "@/components/chart";
import DashboardCard from "@/components/dashboard-card";
import PostTable from "@/components/table";
import { Folders, MessageCircle, Newspaper, User } from "lucide-react";

export default function Home() {
  return (
    <>
    <div className=" flex flex-col justify-between gap-5 mb-5 md:flex-row">
      <DashboardCard title="Posts" count={100} icon={<Newspaper className="text-slate-500 dark:text-slate-200" size={72} />} />

      <DashboardCard title="Categories" count={12} icon={<Folders className="text-slate-500 dark:text-slate-200" size={72} />} />

      <DashboardCard title="Users" count={679} icon={<User className="text-slate-500 dark:text-slate-200" size={72} />} />

      <DashboardCard title="Comments" count={1200} icon={<MessageCircle className="text-slate-500 dark:text-slate-200" size={72} />} />
    </div>
    <AnalyticsChart />
    <PostTable title="Latest Posts" limit={5}/>
    </>
  );
}
