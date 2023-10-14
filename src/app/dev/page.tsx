
import IndexPage from '@/components/homePage';
import Navbar from '@/components/navbar';
import { Player } from '@/components/player';

export default function Page() {
    return (
        <body>
            <main className="h-screen w-full flex items-center flex-col">
                <div className='flex flex-row flex-nowrap items-center justify-center h-[89%] w-[98.5%] mt-[0.5%]'>
                    <Navbar />
                    <IndexPage />
                </div>
                <Player />
            </main>
        </body>
    )
}