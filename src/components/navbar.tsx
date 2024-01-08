import { HiHome, HiSearch } from 'react-icons/hi'
import { PiPlaylistFill } from 'react-icons/pi'
import { BsFillPersonFill, BsFillHeartFill } from 'react-icons/bs'
import { RiEqualizerFill } from 'react-icons/ri'
import { FaDoorOpen } from 'react-icons/fa'

export default function Navbar() {
    return (
        <nav className="h-full min-h-full w-[20%] bg-panels rounded-xl p-5 flex flex-col justify-between max-h-[42rem]">
            <ul className='flex flex-col gap-8'>
                <li>
                    <a href="/home" className='flex flex-row gap-2 items-center'>
                        <HiHome
                            size={30}
                            style={{ fill: "#FE2D54" }}
                        />
                        <span className='text-base font-light'>Início</span>
                    </a>
                </li>
                <li>
                    <a href="#" className='flex flex-row gap-2 items-center'>
                        <HiSearch
                            size={30}
                            style={{ fill: "#FE2D54" }}
                        />
                        <span className='text-base font-light'>Pesquisa</span>
                    </a>
                </li>
            </ul>
            <ul className='flex flex-col gap-8'>
                <h1 className='text-[1.2rem]'>Biblioteca</h1>
                <li>
                    <a href="#" className='flex flex-row gap-2 items-center'>
                        <BsFillPersonFill
                            size={30}
                            style={{ fill: "#FE2D54" }}
                        />

                        <span className='text-base font-light'>Artistas</span>
                    </a>
                </li>
                <li>
                    <a href="#" className='flex flex-row gap-2 items-center'>
                        <PiPlaylistFill
                            size={30}
                            style={{ fill: "#FE2D54" }}
                        />
                        <span className='text-base font-light'>Playlists</span>
                    </a>
                </li>
                <li>
                    <a href="playlist" className='flex flex-row gap-2 items-center'>
                        <BsFillHeartFill
                            size={30}
                            style={{ fill: "#FE2D54" }}
                        />
                        <span className='text-base font-light'>Favoritos</span>
                    </a>
                </li>
            </ul>
            <ul className='flex flex-col gap-8'>
                <li>
                    <a href="#" className='flex flex-row gap-2 items-center'>
                        <RiEqualizerFill
                            size={30}
                            style={{ fill: "#FE2D54" }}
                        />
                        <span className='text-base font-light'>Configurações</span>
                    </a>
                </li>
                <li>
                    <a href="#" className='flex flex-row gap-2 items-center'>
                        <FaDoorOpen
                            size={30}
                            style={{ fill: "#FE2D54" }}
                        />
                        <span className='text-base font-light'>Sair</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}