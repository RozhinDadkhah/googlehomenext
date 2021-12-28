import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid"
import { route } from "next/dist/server/router"
import Image from "next/image"
import { useRouter } from "next/router"
import { useRef } from "react"
import Avatar from "./Avatar"
import HeaderOptions from "./HeaderOptions"

function SecHeader() {

    const router = useRouter()

    const searchInputRef = useRef(null)

    const search = (e) => {
        e.preventDefault()

        const term = searchInputRef.current.value

        if (!term) return;

        router.push(`/search?term=${term}`)
    }

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image
                    src='https://www.google.com/logos/doodles/2021/seasonal-holidays-2021-6753651837109324-s.png'
                    alt='google logo'
                    height={40}
                    width={120}
                    className="cursor-pointer"
                    onClick={() => router.push('/')}
                />
                <form className='flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full flex-grow shadow-lg max-w-3xl items-center'>
                    <input
                        type='text'
                        ref={searchInputRef}
                        className="flex-grow w-full focus:outline-none"
                    />
                    <XIcon
                        className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'
                        onClick={() => (searchInputRef.current.value = "")}
                    />
                    <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
                    <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex' />
                    <button hidden type='submit' onClick={search}>Search</button>
                </form>
                <Avatar 
                className='ml-auto'
                url="https://www.allthetests.com/quiz22/picture/pic_1171831236_1.png" />
            </div>

            <HeaderOptions />
        </header>
    )
}

export default SecHeader
