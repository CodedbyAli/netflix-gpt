
const VideoTitle = ({title, description}) => {
  return (
    <>
    <div className="max-w-[90rem] mx-auto h-screen flex items-center" style={{ transform: 'translateY(-40px)' }}>
        <div className="max-w-2xl space-y-4">
            <h1 className="text-white text-7xl font-bold">{title}</h1>
            <p className="text-white text-md">{description}</p>
            <div className="flex space-x-4">
                <button className="px-6 py-1 rounded-md hover:bg-white/80 bg-white text-xl font-semibold flex items-center">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                </span>Play</button>
                <button className="px-6 py-1 text-white rounded-md hover:bg-white/60 bg-white/40 text-xl font-semibold flex items-center bg-opacity-50">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                </span>More Info</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default VideoTitle