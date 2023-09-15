import { useState, useEffect, useContext } from "react";
import { ContextGlobal } from "../components/utils/global.context";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AiOutlineMail, AiOutlinePhone  } from 'react-icons/ai'
import { BsPersonCircle } from 'react-icons/bs'
import { CgWebsite } from 'react-icons/cg'

export const Detail = () => {

    const { theme } = useContext(ContextGlobal);
    const [detailInfo, setdetailInfo] = useState();
    const { id } = useParams();

    async function getDataDetail() {
        const data = await (await axios(`https://jsonplaceholder.typicode.com/users/${id}`)).data
        setdetailInfo(data);
    }

    useEffect(() => {
        getDataDetail();
    }, []);

    return (
        <div 
            className={`${theme === 'light' ? 'bg-my-white' : 'bg-my-black'} min-h-screen`}
        >
            <div 
                className='relative'
            >
                <img 
                    src="https://res.cloudinary.com/dreso9ye9/image/upload/v1694485961/samantha-gades-BlIhVfXbi9s-unsplash_fkdrkl.jpg" 
                    alt="" 
                    className='h-[20rem] w-full object-cover'
                />
                <div 
                    className="absolute inset-0 flex justify-center items-center"
                >
                    {detailInfo && (
                        <h1 id='title' className={`${theme === 'light' ? 'bg-indigo-400' : 'bg-my-black'} text-5xl p-8 text-center font-extrabold text-[#F1F0EF] italic rounded-md bg-opacity-80`}>Detalle de {detailInfo.name}</h1>
                    )}
                </div>
            </div>
            <div 
                className="flex justify-center items-center py-10"
            >
                {detailInfo ? (
                    <div 
                        className={` ${theme === 'light' ? 'bg-white' : 'bg-black'} flex justify-center items-center w-[50rem] h-[20rem] shadow-sm rounded-md` }
                    >
                        <div 
                            className="w-1/2 flex justify-center items-center"
                        >
                            <img 
                                className="w-80" src='https://res.cloudinary.com/dreso9ye9/image/upload/v1694192185/peeps-avatar-alpha_fqtwxb_pod4hi.webp' 
                                alt="" 
                            />
                        </div>
                        <div 
                            className="w-1/2 bg-indigo-500 rounded-r-md shadow-inner h-full flex flex-col justify-center items-start pl-10 gap-5"
                        >
                            <h2 
                                className="flex justify-center items-center gap-2 text-white text-lg font-semibold"
                            >
                                <BsPersonCircle 
                                    className="bg-white text-indigo-600 p-2 text-4xl rounded-full shadow-sm"
                                />
                                {detailInfo.name}
                            </h2>

                            <h3 
                                className="flex justify-center items-center gap-2 text-white text-lg font-semibold"
                            >
                                <AiOutlineMail 
                                    className="bg-white text-indigo-600 p-2 text-4xl rounded-full shadow-sm"
                                />
                                {detailInfo.email}
                            </h3>

                            <h3 
                                className="flex justify-center items-center gap-2 text-white text-lg font-semibold"
                            >
                                <AiOutlinePhone 
                                    className="bg-white text-indigo-600 p-2 text-4xl rounded-full shadow-sm"
                                />
                                {detailInfo.phone}
                            </h3>

                            <h3 
                                className="flex justify-center items-center gap-2 text-white text-lg font-semibold"
                            >
                                <CgWebsite 
                                    className="bg-white text-indigo-600 p-2 text-4xl rounded-full shadow-sm"
                                />
                                {detailInfo.website}
                            </h3>
                        </div>
                    </div>
                ) : undefined}
            </div>

            {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
            {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
        </div>
    );
};

export default Detail;