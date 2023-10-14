import { FaCirclePlay } from 'react-icons/fa6';

export default function IndexPage() {
    return (


        <section className="h-[100%] w-[85%] bg-panels rounded-xl ml-2 flex flex-col overflow-auto flex-nowrap z-[-2]">
            <div className='w-full h-[20%] relative'>
                <img
                    src="./images/background.png"
                    className='z-[2] rounded-xl absolute object-cover h-[40vh] w-full'
                />
                <div className='h-[40vh] w-[100%] absolute bg-gradient-to-t from-panels to-transparent z-[3]'></div>
            </div>

            <div className="w-fit h-10 flex flex-row items-center gap-4 z-20 absolute top-10 right-9">
                <p>Gustavo Rodrigues</p>
                <img
                    src="./images/avatar.jpg"
                    className='rounded-full h-10 w-10 object-cover'
                />
            </div>

            <div className='z-10 relative p-5 flex flex-col'>
                <h1 className='text-[45px] font-bold'>Boa tarde, Gustavo!</h1>
                <section className='w-full h-[40%]'>
                    <div className='flex flex-row gap-3 my-20'>
                        <div className='w-1 h-30 rounded-full bg-primary'></div>
                        <div className='flex flex-col my-3'>
                            <h2 className='text-xl font-medium'>Tocado recentemente</h2>
                            <div className='flex flex-row flex-nowrap justify-center items-center w-fit h-full mt-3'>
                                <div className='w-40 h-40'>

                                    <img src="https://akamai.sscdn.co/uploadfile/letras/albuns/a/3/2/4/482541454678872.jpg" className='w-full h-full rounded-xl'></img>
                                    <FaCirclePlay
                                        className="relative inline-flex left-[50%] top-[-80%] translate-x-[-50%] translate-y-[50%] z-[12]"
                                        size={50}
                                        style={{ fill: "#FE2D54" }}
                                    />
                                    <div className='h-40 w-40 absolute bg-gradient-to-t from-panels to-transparent z-[11] bottom-[22.5%]'></div>
                                    <p className='font-medium w-[90%] h-[15%] relative text-sm bottom-[50%] text-ellipsis line-clamp-1 overflow-hidden text-center left-[50%] translate-x-[-50%] z-[12]'>Death of a Bachelor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}