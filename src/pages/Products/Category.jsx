import { Button, Card, CardBody, CardHeader } from "@material-tailwind/react";
import CategoryContainer from "components/Products/CategoryContainter";
import CategotyList from "components/Products/CategoryList";
import FormCategory from "components/Products/FormCategory";
import StatusCard from "components/StatusCard";
import React from "react";
import { useHistory } from "react-router-dom";

export default function Category() {
    const history = useHistory();



    

    return (
        <>
            <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
                <div className="container mx-auto max-w-full">

                </div>
            </div>

            <div className="px-3 md:px-8 h-auto -mt-24">
                <div className="container mx-auto max-w-full">
                    <Card>
                        <CardHeader color="orange" contentPosition="none">
                            <div className="w-full flex items-center justify-between">
                                <h2 className="text-white text-2xl">Categorias de Producto</h2>
                                <Button
                                    color="white"
                                    buttonType="link"
                                    size="lg"
                                    style={{ padding: 0 }}
                                    className='text-4xl px-2'
                                    onClick={() => { history.goBack() }}
                                >
                                    <i className="fa-solid fa-chevron-left"></i>

                                </Button>
                            </div>
                        </CardHeader>

                        <CategoryContainer />


                    </Card>

                </div>


                
            </div>

        </>
    )
}