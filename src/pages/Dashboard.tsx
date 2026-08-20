import { Helmet } from "react-helmet-async";
import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";
import TodoList from "../components/TodoList";

const stats = [
  { label: "Total Users", value: "1,234" },
  { label: "Revenue", value: "$56,789" },
  { label: "Orders", value: "789" },
];

export default function Dashboard() {
  return (
    <>
      <Helmet>
        <title>Dashboard | ReactApp</title>
        <meta name="description" content="View your project metrics and manage tasks in the ReactApp dashboard." />
      </Helmet>

      <div className="flex-1 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <SectionTitle
            title="Dashboard"
            subtitle="Here's an overview of your project metrics."
          />

          {/* Stats */}
          <div className="grid gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <Card key={stat.label}>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  {stat.label}
                </p>
                <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                  {stat.value}
                </p>
              </Card>
            ))}
          </div>

          {/* Task Management */}
          <div className="mt-16">
            <div className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Task Management
              </h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Manage your tasks. Click a task to mark complete, or use the edit/delete buttons.
              </p>
            </div>

            <Card className="!p-6">
              <TodoList />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
