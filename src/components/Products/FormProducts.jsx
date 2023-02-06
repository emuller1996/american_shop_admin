import { Button, Input, Textarea } from '@material-tailwind/react';
import axios from 'axios';

import React, { useState } from 'react';
import { toast } from 'react-toastify';

export default function FormProducts() {



    const [input,setInput] = useState({});

    const saveProduct = async(e)=>{
        e.preventDefault();
       
        try {
            const result = await axios.post('http://localhost:3001/products',input)
            
            toast.success('Producto Agregado Correctamente!', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

                setInput({});


        } catch (error) {
            toast.error(`Error : ${error.message}`, {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    }

    const handleInput = async(e)=> {

        setInput({...input,
        [e.target.name] : e.target.value})
    }

    return (
       

            <form onSubmit={saveProduct}>
                <h6 className="text-orange-500 text-sm mt-3 mb-6 font-light uppercase">
                    Informacion del Producto. 
                </h6>
                <div className="flex flex-wrap mt-10">
                    <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                            type="text"
                            color="orange"
                            placeholder="Nombre"
                            name='name'
                            onChange={handleInput}
                        />
                    </div>
                    <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                        <Input
                            type="number"
                            color="orange"
                            placeholder="Precio"
                            name='price'
                            onChange={handleInput}
                        />
                    </div>
                    <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                            type="number"
                            color="orange"
                            placeholder="Existencia"
                            name='stock'
                            onChange={handleInput}
                        />
                    </div>
                    <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                        <Input
                            type="text"
                            color="orange"
                            placeholder="Marca"
                            name='brand'
                            onChange={handleInput}
                        />
                    </div>

                    <div className="w-full  mb-10 font-light">
                        <Input
                            type="text"
                            color="orange"
                            placeholder="Image"
                            name='image'
                            onChange={handleInput}

                        />
                    </div>

                    
                </div>


                
                <div className="flex flex-wrap mt-10 font-light">
                    <Textarea color="purple" placeholder="Descripcion"
                    name='description'
                    onChange={handleInput}
                    />
                </div>

                <div className="flex flex-wrap mt-10 font-light">

                <Button color="green" className='w-full'
                type="submit"
                                size="lg"
                            >CREAR NUEVO
                            </Button>
                </div>

                
            </form>

    )
}