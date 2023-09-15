import { useState, useContext } from "react";
import { ContextGlobal } from "./utils/global.context";

const Form = () => {

    const { theme } = useContext(ContextGlobal);
    const regexName = /([0-9])+/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
    });

    const [validation, setValidation] = useState(undefined);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!inputs.name.trim() || regexName.test(inputs.name)) {
            setValidation(false);
        } else if (!inputs.email.trim() || !regexEmail.test(inputs.email)) {
            setValidation(false);
        } else if (inputs.name.length < 5){
            setValidation(false)
        } else {
            setValidation(true);
        }
    };

    const handleOnChange = (event) => {
        setInputs({
        ...inputs,
        [event.target.name]: event.target.value,
        });
    };

    const error = "Por favor verifique su información nuevamente";

    return (
        <div 
            className="flex justify-center items-center"
        >
            <form 
                className={` ${theme === 'light' ? 'bg-white border border-gray-200' : 'bg-black border border-gray-800'} min-w-[280px] w-[400px] mx-5 flex flex-col justify-center items-center p-5 shadow-sm rounded-md`} 
                onSubmit={handleSubmit}
            >
                <div 
                    className="flex flex-col justify-center items-center gap-5 mb-5 w-full"
                >
                    <div 
                        className="flex flex-col justify-center items-center w-full"
                    >
                        <label 
                            className={`${theme === 'light' ? 'text-indigo-400' : 'text-indigo-500'} text-lg font-semibold py-1`} 
                            htmlFor="name"
                        >
                            Nombre completo
                        </label>

                        <input 
                            className="py-2 rounded-md outline-none px-2 text-sm shadow-sm bg-white border border-indigo-200 w-full text-my-black" 
                            type="text" 
                            name="name" 
                            onChange={handleOnChange} 
                        />
                    </div>

                    <div 
                        className="flex flex-col justify-center items-center w-full"
                    >
                        <label 
                            className={`${theme === 'light' ? 'text-indigo-400' : 'text-indigo-500'} text-lg font-semibold py-1`} 
                            htmlFor="email"
                        >
                            Correo electrónico
                        </label>

                        <input 
                            className="py-2 rounded-md outline-none px-2 text-sm shadow-sm bg-white border border-indigo-200 w-full text-my-black" 
                            type="email" 
                            name="email" 
                            onChange={handleOnChange} 
                        />
                    </div>
                </div>

                <button 
                    className="w-full py-2 px-5 rounded-md shadow-sm text-white font-semibold bg-indigo-600 hover:bg-indigo-700" 
                    type="submit"
                >
                    Enviar
                </button>

                {validation === true ? (
                <div 
                    className="flex justify-center items-center font-semibold text-gray-600 mt-5"
                >
                    <span>
                        ¡Gracias<span className="text-indigo-600"> {inputs.name}</span>, te contactaremos cuanto antes vía mail!
                    </span>
                </div>
                ) : null}
                {validation === false ? 
                <div 
                    className="flex justify-center items-center font-semibold text-red-700 text-sm mt-5"
                >
                    {error}
                </div> : null}
            </form>
        </div>
    );
};

export default Form;