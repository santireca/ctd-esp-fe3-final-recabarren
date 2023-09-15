import { useContext } from 'react'
import Form from '../components/Form'
import { ContextGlobal } from '../components/utils/global.context';



const Contact = () => {

    const { theme } = useContext(ContextGlobal);

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
                <h1 
                    id='title' 
                    className={`${theme === 'light' ? 'bg-indigo-400' : 'bg-my-black'} text-4xl px-8 py-2 text-center font-extrabold text-[#F1F0EF] italic rounded-md bg-opacity-80
                    lg:text-5xl lg:py-4`}
                >
                    Contacto
                </h1>
                </div>
            </div>
            <div 
                className='py-10'
            >
                <Form/>
            </div>
        </div>
    )
}

export default Contact