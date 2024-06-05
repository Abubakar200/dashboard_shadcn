import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
type Props={
    title: string, 
    count: number,
    icon: React.ReactElement<LucideIcon>
}
const DashboardCard = ({
    count,
    icon,
    title
}: Props) => {
  return (
    <Card className="bg-slate-100 dark:bg-slate-800 p-4 pb-0">
      <CardContent>
        <h3 className="text-3xl text-center font-bold mb-4 text-slate-500 dark:text-slate-200">
          {title}
        </h3>
        <div className="flex justify-center items-center gap-5">
          {icon}
          <h3 className="text-3xl text-center font-semibold text-slate-500 dark:text-slate-200">
            {count}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
