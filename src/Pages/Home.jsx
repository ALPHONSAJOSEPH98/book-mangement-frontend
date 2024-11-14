import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="relative">
    <img
        height={300}
        className="w-full h-[500px] object-cover"
        src="https://miro.medium.com/max/10944/1*S81O15rjKfG-BFdnNC6-GQ.jpeg"
        alt=""
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black bg-opacity-50">
        <h4 className="text-xl font-semibold text-white">About us</h4>
        <p className="w-3/4 md:w-75 mt-2 text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur saepe placeat at ad enim, soluta quasi nulla sequi quos rem consequuntur inventore laudantium minima numquam eaque ullam? Quas, temporibus deleniti.
        </p>
        <Link to={'/dashboard'}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4">
                Get started
            </button>
        </Link>
    </div>
</div>

  )
}

export default Home