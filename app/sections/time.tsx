export default function Component() {
    return (
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight text-black mb-6">
            Stop wasting time on{' '}
            <span className="inline-block bg-black text-white px-3 py-1 transform -skew-x-12">
              infrastructure
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Focus on building a great product, not on setting up infrastructure. Ship Boiler Plate gives you the foundation to launch your AI product in days, not months.
          </p>
          <ul className="space-y-4 mb-8 text-left max-w-xl mx-auto">
            <li className="flex items-center text-black">
              <svg
                className="w-5 h-5 mr-2 text-green-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>10+ ready-to-use AI demo apps</span>
            </li>
            <li className="flex items-center text-black">
              <svg
                className="w-5 h-5 mr-2 text-green-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Pre-configured APIs and AI models</span>
            </li>
            <li className="flex items-center text-black">
              <svg
                className="w-5 h-5 mr-2 text-green-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>All essential SaaS features (auth, database, payments, etc.)</span>
            </li>
          </ul>
          <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
            Get Ship Boiler Plate
          </button>
        </div>
      </section>
    )
  }