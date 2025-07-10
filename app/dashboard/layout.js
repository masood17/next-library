// app/dashboard/layout.js
export default function DashboardLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-100">
           
<div className="flex-shrink-0 flex items-center">
                                {/* Logo or site name */}
                                <h1 className="text-xl font-bold">Library Dashboard</h1>
                            </div>
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                {/* Page content */}
                {children}
            </main>
        </div>
    );
}