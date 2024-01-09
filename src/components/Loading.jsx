

const Loading = () => {
  return (
    <div className="bg-gray-900 h-screen flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Loading...</h1>
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
      </div>
    </div>
  )
}

export default Loading