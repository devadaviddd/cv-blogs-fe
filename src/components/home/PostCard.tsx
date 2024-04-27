export default function PostCard() {
  return (
    <div className="flex flex-col items-center min-h-[13rem] bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-5">
      <img
        className="object-cover w-full rounded-t-lg min-h-[13rem] md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src="https://img.freepik.com/premium-photo/cardano-blockchain-platform_23-2150411956.jpg"
        alt=""
      />

      <div className="flex flex-col justify-between p-4 leading-normal w-full">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order. Here are the biggest enterprise
          technology acquisitions of 2021 so far, in reverse chronological
          order.
        </p>
      </div>
    </div>
  )
}
