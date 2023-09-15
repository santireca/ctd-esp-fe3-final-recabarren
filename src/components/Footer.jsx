import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context';

const Footer = () => {

    const { theme } = useContext(ContextGlobal);

    return (
        <footer className={`${theme === 'light' ? 'bg-indigo-400 text-white' : 'bg-indigo-800 text-white'} flex justify-center items-center gap-5 h-[5rem]`}>
            <h2 className='text-center'>© 2023 Santiago Recabarren</h2>
        </footer>
    )
}

export default Footer