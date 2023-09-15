import { useContext } from "react";
import Card from "../components/Card";
import { ContextGlobal } from "../components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

    const { theme } = useContext(ContextGlobal);
    const storage = JSON.parse(localStorage.getItem("favs"))

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
                    lg:text-5xl lg:py-5`}
                >
                        Favoritos
                </h1>
                </div>
            </div>
            <div 
                className="py-10 flex justify-center items-center flex-wrap gap-10"
            >
                {storage ? storage.map((doctorFav) => (
                <Card key={doctorFav} item={doctorFav}/>
                )) : ""}
            </div>
        </div>
    );
};

export default Favs;