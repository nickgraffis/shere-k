export default function Dashboard() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="h-full flex">
        <div className="w-96 bg-slate-700 text-white h-full">
          <ul>
            <li>Documents</li>
          </ul>
        </div>
        <div className="flex-grow p-4 bg-slate-900 text-white h-full">
          <div className="w-full flex justify-between">
            <span>Breadcrumbs / Bread</span>
            <div className="flex space-x-2 items-center">
              <span className="text-gray-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}