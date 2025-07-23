// app/layout.js
import './ui/globals.css'

export default function RootLayout({ children }) {
  return (
      <html lang="en">
          <body>
              <div className="min-h-screen bg-gray-100">
                  <nav className="bg-white shadow-lg">
                      <div className="max-w-6xl mx-auto px-4">
                          <div className="flex justify-between">
                              <div className="flex space-x-7">
                                  <div className="flex items-center py-4">
                                      <span className="font-semibold text-gray-500 text-lg">
                                          DUAI Library Management
                                      </span>
                                      <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                {/* Navigation Links */}
                                <a 
                                    href="/dashboard" 
                                    className="border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                >
                                    Overview
                                </a>
                                <a 
                                    href="/dashboard/books" 
                                    className="border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                >
                                    Books
                                </a>
                                <a 
                                    href="/dashboard/users" 
                                    className="border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                >
                                    Users
                                </a>
                            </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </nav>
                  <main className="container mx-auto px-4 py-8">
                      {children}
                  </main>
              </div>
          </body>
      </html>
  );
}