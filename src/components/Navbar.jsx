import { useContext, useState } from 'react'
import { ContextGlobal } from "./utils/global.context";
import { Link } from 'react-router-dom';
import { RiCloseFill, RiMenu4Line } from 'react-icons/ri'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

    const { changeTheme, theme } = useContext(ContextGlobal);

    const [modal, setModal] = useState(false)

    const handleOpenModal = () => {
        setModal(true)
    }

    const handleCloseModal = () => {
        setModal(false)
    }

    return (
        <div
            className='max-w-screen'
        >

            {
                modal ?
                (
                    <div className={` ${theme === 'light' ? 'bg-my-white text-my-black' : 'bg-my-black text-my-white'} w-screen h-screen text-2xl font-semibold font-poppins gap-y-10 z-10 fixed flex flex-col items-center justify-center`}>
                        <Link  className=" absolute top-5 right-5 text-4xl sm:hidden" onClick={handleCloseModal}><RiCloseFill/></Link>
                        <Link to='/' className=" sm:hidden" onClick={handleCloseModal}>Inicio</Link>
                        <Link to='/favs' className=" sm:hidden" onClick={handleCloseModal}>Favoritos</Link>
                        <Link to='/contact' className=" sm:hidden" onClick={handleCloseModal}>Contacto</Link>
                    </div>
                ) : (
                    <nav 
                        className={`${theme === 'light' ? 'bg-white text-my-black ' : 'bg-black text-my-white'} max-w-screen flex justify-between items-center px-5 gap-10 h-20
                        lg:justify-center`}
                    >
                        <RiMenu4Line 
                            className={` text-3xl
                            lg:hidden`}
                            onClick={handleOpenModal}
                        />
    
                        <Link to='/'>
                            <h2 
                                className={` hidden text-lg hover:text-indigo-500 transition duration-300
                                lg:block`}>
                                    Inicio
                            </h2>
                        </Link>
    
                        <Link to='/favs'>
                            <h2 
                                className={` hidden text-lg hover:text-indigo-500 transition duration-300
                                lg:block`}>
                                    Favoritos
                            </h2>
                        </Link>
    
                        <Link to='/contact'>
                            <h2 
                                className={` hidden text-lg hover:text-indigo-500 transition duration-300
                                lg:block`}>
                                    Contacto
                            </h2>
                        </Link>
    
                        <button 
                            onClick={changeTheme} 
                            className='flex justify-center items-center'
                        >
                            {theme === 'light' && (
                                <img className='w-10' src="https://res.cloudinary.com/dreso9ye9/image/upload/v1686672097/img.icons8_b3lade.png" alt="" />
                            )}
                            {theme === 'dark' && (
                                <img className='w-10' src="https://res.cloudinary.com/dreso9ye9/image/upload/v1686672072/img.icons8_rnqhur.png" alt="" />
                            )}
                        </button>
                    </nav>
                )
            }
        </div>
    )
}

export default Navbar