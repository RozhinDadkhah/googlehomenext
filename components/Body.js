import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid"
import Image from "next/image"
import { useRef } from 'react'
import { useRouter } from 'next/router'

function Body() {

    const router = useRouter()
    const searchInputRef = useRef(null)

    const search = (e) => {
        e.preventDefault()

        const term = searchInputRef.current.value;


        if (!term) return;

        router.push(`/search?term=${term}`)
    }

    return (
        <form className='flex flex-col items-center mt-44 flex-grow w-4/5 '>
            <Image
                src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                width={300}
                height={100}
                alt="google logo"
            />
            <div className='border border-gray-200 p-3 flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full px-3 items-center sm:max-w-xl lg:max-w-2xl'>
                <SearchIcon className="h-5 mr-3 text-gray-500" />
                <input ref={searchInputRef} type='text' className="flex-grow focus:outline-none" />
                <MicrophoneIcon className="h-5" />
            </div>

            <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
                <button className="btn" onClick={search}>Google Search</button>

                <button className="btn" onClick={search}>I'm Feeling Lucky</button>
            </div>
        </form>
    )
}

export default Body
