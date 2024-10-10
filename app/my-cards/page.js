import Card from "@/components/Card";

export default function CardPage() {
  return (
    <>
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">Card Examples</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((card) => (
            <div key={card} className="bg-white overflow-hidden shadow-md rounded-lg">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Card Header {card}</h3>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <p className="text-gray-700">
                  This is the main content of card {card}. You can put any information here that you want to display in the card body.
                </p>
              </div>
              <div className="px-4 py-4 sm:px-6 bg-gray-50 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500">Last updated 3 mins ago</span>
                  <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">Card Examples</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((card) => (
              <Card key={card} title="my title">
                <Card.Body>
                  Amit akarsz
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}