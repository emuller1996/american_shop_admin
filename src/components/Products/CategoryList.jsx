import { Button, Card, CardBody } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function CategotyList({categories}) {


    



    return (
        <Card>

            <CardBody>
                <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">

                        <thead>
                            <tr>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Nombre
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Descripcion
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">

                                </th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                categories ? categories.map(category => (
                                    <tr>

                                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            {category.name}
                                        </th>
                                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            <Button color="gray" className='w-auto'
                                                type="button"
                                                size="lg"
                                            ><i className="fa-solid fa-pen-to-square"></i>
                                            </Button>
                                        </th>
                                    </tr>

                                ))
                                    :
                                    (
                                        <tr>
                                            <td colSpan={2}>
                                                Cargando . .
                                            </td>
                                        </tr>
                                    )
                            }

                        </tbody>
                    </table>
                </div>

            </CardBody>



        </Card>
    )
}