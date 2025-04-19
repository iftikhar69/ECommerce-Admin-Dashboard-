import { useState } from "react";
import Sidebar from "../Component/Layout/SideBar";
import Header from "../Component/Layout/Header";
import OverviewTab from "./tabs/OverviewTab";
import AnalyticsTab from "./tabs/AnalyticsTab";
import ReportsTab from "./tabs/ReportsTab";
import NotificationsTab from "./tabs/NotificationsTab";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-gradient-to-br from-purple-50/80 via-indigo-50/60 to-blue-50/70">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} />

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <Header 
          isMobileMenuOpen={isMobileMenuOpen} 
          setIsMobileMenuOpen={setIsMobileMenuOpen} 
        />

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6">
          {/* Tabs */}
          <div className="mb-6">
            <div className="flex space-x-1 rounded-lg bg-white/80 p-1.5 shadow-lg shadow-indigo-900/5 backdrop-blur-sm">
              {["overview", "analytics", "reports", "notifications"].map((tab) => (
                <button
                  key={tab}
                  className={`rounded-md px-4 py-2.5 text-sm font-medium capitalize transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/20"
                      : "text-gray-600 hover:bg-gray-100/80 hover:text-purple-700"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === "overview" && <OverviewTab />}
          {activeTab === "analytics" && <AnalyticsTab />}
          {activeTab === "reports" && <ReportsTab />}
          {activeTab === "notifications" && <NotificationsTab />}
        </main>
      </div>
    </div>
  );
}