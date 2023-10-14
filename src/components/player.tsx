import { FaCirclePause } from 'react-icons/fa6';
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi'
import { HiVolumeUp } from 'react-icons/hi'

export function Player() {
    return (
        <footer className="w-[98.5%] h-[10%] mt-2 mb-[.5%] p-3 items-center rounded-xl bg-panels flex flex-row flex-nowrap">
            <div className="flex row w-[25%] items-center">
                <img className="w-[15%] h-[15%] object-cover rounded-lg" src="https://akamai.sscdn.co/uploadfile/letras/albuns/a/3/2/4/482541454678872.jpg" alt="Track Image" />
                <div className="flex flex-col ml-3 justify-center">
                    <h2 className='text-base font-semibold'>House of memories</h2>
                    <h3 className="text-gray-500 font-light text-base"><a href="#">Panic! At The Disco</a></h3>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center h-[100%] gap-1 w-[50%]'>
                <div className='flex items-center gap-3 justify-center'>
                    <button>
                        <BiSkipPrevious size={35} />
                    </button>
                    <button>
                        < FaCirclePause
                            size={45}
                            style={{ fill: "#FE2D54" }}
                            className="shadow-md p-1"
                        />
                    </button>
                    <button>
                        <BiSkipNext size={35} />
                    </button>
                </div>
                <div className='flex items-center gap-3'>
                    <span className='text-zinc-500 text-xs'>00:00</span>
                    <div className='w-96 h-1 bg-zinc-700 rounded-full' />
                    <span className='text-zinc-500 text-xs'>00:00</span>
                </div>
            </div>
            <div className='flex items-center gap-3 justify-end w-[25%] '>
                <HiVolumeUp
                    size={20}
                />
                <div className='flex justify-start'>
                    <div className='w-8 h-1 bg-pink-700 rounded-full relative' />
                    <div className='w-20 h-1 bg-zinc-700 rounded-full' />
                </div>
            </div>
        </footer >
    )
}