import { Button, Card, CardBody, Input, Textarea } from "@material-tailwind/react";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function FormCategory({handleInput,handleSubmit}) {

    

    return (
        <Card>

            <CardBody>
                <form onSubmit={handleSubmit} >
                    <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
                        Informacion del Producto.
                    </h6>
                    <div className="flex flex-wrap mt-10">
                        <div className="w-full pr-4 mb-10 font-light">
                            <Input
                                type="text"
                                color="purple"
                                placeholder="Nombre"
                                name='name'
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

            </CardBody>



        </Card>
    )
}