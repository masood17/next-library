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
                                          Library Management
                                      </span>
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