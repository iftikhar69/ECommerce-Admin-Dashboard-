import { TrendingUp } from "lucide-react";

export default function StatCard({ title, value, change, gradient }) {
  return (
    <div 
      className={`group overflow-hidden rounded-xl bg-gradient-to-br ${gradient} p-6 text-white shadow-lg shadow-indigo-900/10 hover:shadow-xl transition-all duration-500 hover:-translate-y-1`}
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-125"></div>
      <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-white/5 transition-transform duration-500 group-hover:scale-110"></div>
      
      <div className="relative">
        <h3 className="text-sm font-medium text-white/90">{title}</h3>
        <div className="mt-2 text-2xl font-bold">{value}</div>
        <p className="mt-1 flex items-center text-xs text-white/80">
          <TrendingUp className="mr-1 h-3 w-3" />
          <span className="font-medium">{change}</span> from last month
        </p>
      </div>
    </div>
  );
}