import { Button, Card, Icon, Image } from '@material-tailwind/react';
import CardBody from '@material-tailwind/react/CardBody';
import LeadText from '@material-tailwind/react/LeadText';
import React, { useEffect, useState } from 'react';
import CardProduct from './CardProduct';
import Team1 from 'assets/img/team-1-800x800.jpg';
import axios from 'axios';
import StatusCard from 'components/StatusCard';
import { Link } from 'react-router-dom';


export default function ProductList(props) {

    const [products, setProduts] = useState([]);



    useEffect(() => {
        getProduts();
    }, [])

    const getProduts = async function () {

        const result = await axios.get('http://localhost:3001/products');
        console.log(result.data)
        setProduts(result.data.products)



    }


    return (
        <Card>

            <CardBody>
                <div className="px-3 md:px-8">
                    <div className="container mx-auto max-w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
                            
                                <Link
                                    
                                    to={'/Productos/CrearNuevo'}
                                >
                                    <Button size="lg" className='w-full'   >NUEVO</Button>
                                </Link>
                            


                            <Link to={'/Productos/Categorias'}   color="yellow"
                                size="lg"
                            >
                                <Button  color='purple' size="lg" className='w-full'   >CATEGORIAS</Button>
                                
                            </Link>

                        </div>
                    </div>
                </div>
            </CardBody>
            <CardBody>
                <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Imagen
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Descripcion
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Precio
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Existencia
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Categoria
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Estado
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <div className="flex">
                                        <div className="w-10 h-10 rounded-full border-2 border-white">
                                            <Image
                                                src={Team1}
                                                rounded
                                                alt="..."
                                            />
                                        </div>

                                    </div>
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Argon Design System
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    $2,500 USD
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>{' '}
                                    pending
                                </th>


                            </tr> */}


                            {products ? products.map(product => (
                                <tr>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <div className="flex">
                                            <div className="w-10 h-10 rounded-full border-2 border-white">
                                                <Image
                                                    src={product.image}
                                                    rounded
                                                    alt="..."
                                                />
                                            </div>

                                        </div>
                                    </th>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        {product.name}
                                    </th>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        {` $${product.price},00 USD`}
                                    </th>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>{' '}
                                        {product.stock}
                                    </th>

                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>{' '}
                                        CATEGORY
                                    </th>

                                </tr>
                            )) : (<>  <p> CArgar..</p></>)}

                        </tbody>
                    </table>
                </div>
            </CardBody>


            <CardProduct />




        </Card>
    )
}