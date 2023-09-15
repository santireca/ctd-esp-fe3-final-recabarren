import { useEffect, useContext } from 'react'
import Card from '../components/Card'
import { ContextGlobal } from '../components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

    const {data, getData, theme} = useContext(ContextGlobal);


    useEffect(() => {
        getData()
    }, [getData])
    
    return (
        <main className={`${theme === 'light' ? 'bg-my-white' : 'bg-my-black'}`}>
            <div 
                className='relative'
            >
                <img 
                    src="https://images.unsplash.com/photo-1486049125644-f35e226a5e14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="" 
                    className='h-[10rem] w-full object-cover
                    lg:h-[20rem]'
                />
                <div 
                    className="absolute inset-0 flex justify-center items-center"
                >
                    <h1 
                        id='title' 
                        className={`${theme === 'light' ? 'bg-indigo-400' : 'bg-my-black'} text-2xl px-8 py-2 text-center font-extrabold text-[#F1F0EF] italic rounded-md bg-opacity-80
                        lg:text-5xl lg:py-5`}
                    >
                        ¡CLÍNICA DH!
                    </h1>
                </div>
            </div>
        <div 
            className='py-10 flex justify-center items-center flex-wrap gap-10'
        >
            {data ? (
                data.map((person) => (
                <Card key={person.id} item={person}/>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    </main>
    )
}

export default Home