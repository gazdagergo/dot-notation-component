
const Card = ({ title, children }) => {
  return (
    <div className="bg-white overflow-hidden shadow-md rounded-lg">
      <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
        <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
      </div>
      {children}
      <div className="px-4 py-4 sm:px-6 bg-gray-50 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-500">Last updated 3 mins ago</span>
          <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

const CardBody = ({ children }) => {
  return (
    <div className="px-4 py-5 sm:p-6">
      <p className="text-gray-700">
        {children}
      </p>
    </div>
  )
}

Card.Body = CardBody
export default Card
