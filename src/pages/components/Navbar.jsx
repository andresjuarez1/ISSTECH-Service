import React from 'react'
import SelectComponent from '../atoms/Select'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLog = () => {
        navigate('/Login');
    };

    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };



    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];

    return (
        <nav>
            <ul className='justify-between p-8 flex font-poppins mt-2'>
                <SelectComponent
                    label="Selecciona una dependencia"
                    options={options}
                    onChange={handleSelectChange}
                    value={selectedOption}
                />


                <div className='gap-10 mt-3 mr-10 flex text-center'>
                    <li className="w-[80px]">
                        <button>Recibido</button>
                    </li>
                    <li className="w-[80px]">
                        <button>Enviados</button>
                    </li>
                    <li className="w-[80px]">
                        <button onClick={handleLog}>Mi perfil</button>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar