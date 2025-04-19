import { useState } from "react";
import {
  BarChart3,
  CreditCard,
  Home,
  Package,
  PieChart,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Users,
  ChevronDown,
  Bell,
  User,
  MenuIcon,
} from "lucide-react";

function App() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-gradient-to-br from-violet-50 via-purple-50/50 to-blue-50/80">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform glass-effect border-r border-purple-100/50 shadow-xl transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center border-b border-purple-100/50 px-6">
          <a href="#" className="flex items-center gap-2 font-semibold group">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 opacity-75 blur group-hover:opacity-100 transition-opacity duration-300"></div>
              <ShoppingBag className="relative h-6 w-6 text-white" />
            </div>
            <span className="text-lg bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-bold">
              ElegantShop
            </span>
          </a>
        </div>
        <div className="flex-1 overflow-auto py-6">
          <nav className="grid items-start px-4 text-sm gap-2">
            {[
              { icon: Home, label: "Dashboard", active: true },
              { icon: ShoppingCart, label: "Orders" },
              { icon: Package, label: "Products" },
              { icon: Users, label: "Customers" },
              { icon: CreditCard, label: "Transactions" },
              { icon: BarChart3, label: "Analytics" },
              { icon: Settings, label: "Settings" },
            ].map(({ icon: Icon, label, active }) => (
              <a
                key={label}
                href="#"
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-300 hover-lift ${
                  active
                    ? "bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-indigo-500/10 text-purple-900"
                    : "text-gray-600 hover:bg-purple-50/50"
                }`}
              >
                <Icon className={`h-4 w-4 ${active ? "text-purple-600" : ""}`} />
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-auto p-4">
          <div className="overflow-hidden rounded-xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 animate-gradient-x"></div>
              <div className="relative p-5 text-white">
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium">Upgrade to Pro</p>
                  <p className="text-xs opacity-90">Get exclusive features and priority support</p>
                  <button className="mt-2 w-full rounded-lg bg-white/90 backdrop-blur px-3 py-2 text-sm font-medium text-purple-700 hover:bg-white transition-all duration-300 hover-lift">
                    Upgrade Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-purple-100/50 glass-effect px-4 sm:px-6">
          <button
            className="rounded-lg border border-purple-100 p-2 text-gray-600 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-300 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </button>
          <div className="w-full flex-1">
            <h1 className="text-lg font-semibold bg-gradient-to-r from-violet-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent md:text-xl">
              Dashboard
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative rounded-full p-2 hover:bg-purple-50 transition-colors duration-300 group">
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
              <Bell className="h-5 w-5 text-gray-600 group-hover:text-purple-700 transition-colors duration-300" />
            </button>
            <div className="relative">
              <button className="flex items-center gap-2 rounded-full border border-purple-100 p-1 pr-3 hover:bg-purple-50 transition-all duration-300 hover-lift">
                <div className="h-8 w-8 overflow-hidden rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500">
                  <User className="h-full w-full p-1.5 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Admin</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6">
          {/* Tabs */}
          <div className="mb-6">
            <div className="flex space-x-1 rounded-xl glass-effect p-1.5 card-shadow">
              {["overview", "analytics", "reports", "notifications"].map((tab) => (
                <button
                  key={tab}
                  className={`rounded-lg px-4 py-2.5 text-sm font-medium capitalize transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25"
                      : "text-gray-600 hover:bg-purple-50 hover:text-purple-700"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                  title="Total Revenue"
                  value="$45,231.89"
                  change="+20.1%"
                  gradient="from-violet-500 via-purple-500 to-indigo-500"
                />
                <StatCard
                  title="New Customers"
                  value="+2,350"
                  change="+18.2%"
                  gradient="from-fuchsia-500 via-purple-500 to-pink-500"
                />
                <StatCard
                  title="Total Orders"
                  value="+12,234"
                  change="+12.2%"
                  gradient="from-blue-500 via-indigo-500 to-violet-500"
                />
                <StatCard
                  title="Active Users"
                  value="+573"
                  change="+4.6%"
                  gradient="from-purple-500 via-fuchsia-500 to-pink-500"
                />
              </div>

              {/* Charts */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl glass-effect p-6 card-shadow hover-lift">
                  <div className="mb-4">
                    <h2 className="text-lg font-semibold bg-gradient-to-r from-violet-700 to-indigo-700 bg-clip-text text-transparent">
                      Revenue Over Time
                    </h2>
                    <p className="text-sm text-gray-500">Monthly revenue for the current year</p>
                  </div>
                  <RevenueChart />
                </div>

                <div className="rounded-xl glass-effect p-6 card-shadow hover-lift">
                  <div className="mb-4">
                    <h2 className="text-lg font-semibold bg-gradient-to-r from-violet-700 to-indigo-700 bg-clip-text text-transparent">
                      Sales Distribution
                    </h2>
                    <p className="text-sm text-gray-500">Sales by product category</p>
                  </div>
                  <SalesDistributionChart />
                </div>
              </div>

              {/* Recent Orders */}
              <div className="rounded-xl glass-effect p-6 card-shadow hover-lift">
                <div className="mb-4">
                  <h2 className="text-lg font-semibold bg-gradient-to-r from-violet-700 to-indigo-700 bg-clip-text text-transparent">
                    Recent Orders
                  </h2>
                  <p className="text-sm text-gray-500">Latest customer orders</p>
                </div>
                <RecentOrdersTable />
              </div>

              {/* Top Products */}
              <div className="rounded-xl glass-effect p-6 card-shadow hover-lift">
                <div className="mb-4">
                  <h2 className="text-lg font-semibold bg-gradient-to-r from-violet-700 to-indigo-700 bg-clip-text text-transparent">
                    Top Products
                  </h2>
                  <p className="text-sm text-gray-500">Best selling products this month</p>
                </div>
                <TopProductsList />
              </div>
            </div>
          )}

          {activeTab === "analytics" && (
            <div className="flex h-[400px] items-center justify-center rounded-xl glass-effect p-6 card-shadow">
              <div className="text-center">
                <PieChart className="mx-auto h-12 w-12 text-purple-500 opacity-50" />
                <h3 className="mt-4 text-lg font-medium">Analytics Dashboard</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Detailed analytics and reporting features will be displayed here.
                </p>
              </div>
            </div>
          )}

          {activeTab === "reports" && (
            <div className="flex h-[400px] items-center justify-center rounded-xl glass-effect p-6 card-shadow">
              <div className="text-center">
                <BarChart3 className="mx-auto h-12 w-12 text-purple-500 opacity-50" />
                <h3 className="mt-4 text-lg font-medium">Reports Dashboard</h3>
                <p className="mt-2 text-sm text-gray-500">Generate and view custom reports for your business.</p>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="flex h-[400px] items-center justify-center rounded-xl glass-effect p-6 card-shadow">
              <div className="text-center">
                <Bell className="mx-auto h-12 w-12 text-purple-500 opacity-50" />
                <h3 className="mt-4 text-lg font-medium">Notifications</h3>
                <p className="mt-2 text-sm text-gray-500">View and manage your notifications here.</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function StatCard({ title, value, change, gradient }) {
  return (
    <div
      className={`group overflow-hidden rounded-xl bg-gradient-to-br ${gradient} p-6 text-white card-shadow hover-lift`}
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

function RevenueChart() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const data = months.map(() => Math.floor(Math.random() * 70) + 30);

  return (
    <div className="h-[200px] w-full">
      <div className="flex h-full items-end gap-2 overflow-hidden">
        {data.map((height, i) => (
          <div key={i} className="relative flex-1 group">
            <div
              className="rounded-t-lg bg-gradient-to-t from-violet-400/20 via-purple-500/40 to-indigo-600/60 transition-all duration-300 group-hover:to-indigo-500/80"
              style={{ height: `${height}%` }}
            ></div>
          </div>
        ))}
      </div>
      <div className="mt-2 flex w-full justify-between text-xs text-gray-500">
        {months.map((month) => (
          <div key={month}>{month}</div>
        ))}
      </div>
    </div>
  );
}

function SalesDistributionChart() {
  return (
    <div className="flex h-[200px] items-center justify-center">
      <div className="relative h-40 w-40">
        <div className="absolute inset-0 rounded-full border-[20px] border-gray-100/50"></div>
        <div
          className="absolute inset-0 rounded-full border-[20px] border-t-violet-500 border-r-violet-500 border-b-transparent border-l-transparent transition-all duration-300 hover:border-t-violet-600 hover:border-r-violet-600"
          style={{ transform: "rotate(45deg)" }}
        ></div>
        <div
          className="absolute inset-0 rounded-full border-[20px] border-t-fuchsia-500 border-r-transparent border-b-transparent border-l-transparent transition-all duration-300 hover:border-t-fuchsia-600"
          style={{ transform: "rotate(135deg)" }}
        ></div>
        <div
          className="absolute inset-0 rounded-full border-[20px] border-t-indigo-500 border-r-transparent border-b-transparent border-l-transparent transition-all duration-300 hover:border-t-indigo-600"
          style={{ transform: "rotate(225deg)" }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              65%
            </div>
            <div className="text-xs text-gray-500">Growth</div>
          </div>
        </div>
      </div>
      <div className="ml-4 space-y-2">
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-gradient-to-r from-violet-500 to-purple-500"></div>
          <div className="ml-2 text-sm">Electronics (40%)</div>
        </div>
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500"></div>
          <div className="ml-2 text-sm">Clothing (30%)</div>
        </div>
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500"></div>
          <div className="ml-2 text-sm">Home Goods (20%)</div>
        </div>
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-gradient-to-r from-gray-200 to-gray-300"></div>
          <div className="ml-2 text-sm">Other (10%)</div>
        </div>
      </div>
    </div>
  );
}

function RecentOrdersTable() {
  const orders = [
    {
      id: "ORD-7352",
      customer: "Alex Johnson",
      product: "Premium Headphones",
      date: "Apr 23, 2023",
      status: "Delivered",
      amount: "$299.99",
      statusColor: "bg-green-100 text-green-700",
    },
    {
      id: "ORD-7353",
      customer: "Sarah Williams",
      product: "Smart Watch Pro",
      date: "Apr 22, 2023",
      status: "Processing",
      amount: "$199.50",
      statusColor: "bg-blue-100 text-blue-700",
    },
    {
      id: "ORD-7354",
      customer: "Michael Brown",
      product: "Wireless Earbuds",
      date: "Apr 22, 2023",
      status: "Shipped",
      amount: "$89.99",
      statusColor: "bg-purple-100 text-purple-700",
    },
    {
      id: "ORD-7355",
      customer: "Emily Davis",
      product: "Laptop Sleeve",
      date: "Apr 21, 2023",
      status: "Delivered",
      amount: "$29.99",
      statusColor: "bg-green-100 text-green-700",
    },
    {
      id: "ORD-7356",
      customer: "David Miller",
      product: "Bluetooth Speaker",
      date: "Apr 20, 2023",
      status: "Cancelled",
      amount: "$79.99",
      statusColor: "bg-red-100 text-red-700",
    },
  ];

  return (
    <div className="overflow-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 text-sm">
            <th className="p-2 pl-0 text-left font-medium">Order ID</th>
            <th className="p-2 text-left font-medium">Customer</th>
            <th className="p-2 text-left font-medium">Product</th>
            <th className="p-2 text-left font-medium">Date</th>
            <th className="p-2 text-left font-medium">Status</th>
            <th className="p-2 pr-0 text-right font-medium">Amount</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b border-gray-100 text-sm hover:bg-purple-50/50 transition-colors duration-150">
              <td className="p-2 pl-0">{order.id}</td>
              <td className="p-2">{order.customer}</td>
              <td className="p-2">{order.product}</td>
              <td className="p-2">{order.date}</td>
              <td className="p-2">
                <span className={`inline-block rounded-full px-2 py-1 text-xs ${order.statusColor}`}>
                  {order.status}
                </span>
              </td>
              <td className="p-2 pr-0 text-right font-medium">{order.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TopProductsList() {
  const products = [
    {
      name: "Wireless Noise-Cancelling Headphones",
      price: "$299.99",
      sales: "1,234 sold",
    },
    {
      name: "Ultra-Slim Laptop Pro",
      price: "$1,299.99",
      sales: "879 sold",
    },
    {
      name: "Smart Fitness Tracker",
      price: "$129.99",
      sales: "756 sold",
    },
    {
      name: "Wireless Charging Pad",
      price: "$49.99",
      sales: "632 sold",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product, i) => (
        <div key={i} className="overflow-hidden rounded-xl border border-purple-100/50 bg-white/50 hover-lift">
          <div className="aspect-square bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 p-4">
            <div className="flex h-full items-center justify-center">
              <div className="h-20 w-20 rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 p-4 shadow-lg">
                <Package className="h-full w-full text-white" />
              </div>
            </div>
          </div>
          <div className="p-4">
            <h3 className="line-clamp-1 font-medium text-gray-800">{product.name}</h3>
            <div className="mt-1 flex items-center justify-between">
              <div className="font-semibold text-purple-600">{product.price}</div>
              <div className="text-xs text-gray-500">{product.sales}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;