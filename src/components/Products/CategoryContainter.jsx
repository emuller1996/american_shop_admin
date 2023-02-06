import { CardBody } from '@material-tailwind/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import CategotyList from './CategoryList';
import FormCategory from './FormCategory';

export default function CategoryContainer() {


    const [inputCateory, setInputCategory] = useState({ name: '', description: '' });
    const [categories, setCategories] = useState();


    useEffect(() => {
        getAllCategories()
    }, [categories])

    const getAllCategories = async () => {
        const result = await axios.get('http://localhost:3001/category/');
        console.log(result.data);
        setCategories(result.data)
    }


    const handleInput = (e) => {

        setInputCategory({
            ...inputCateory,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post(`http://localhost:3001/category/${inputCateory.name}`, inputCateory);
            toast.success('Categoria Creada');
            getAllCategories()
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <>

            <CardBody>

                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                        <FormCategory 
                        handleInput={handleInput}
                        handleSubmit={handleSubmit}
                         />
                        <CategotyList
                        categories={categories}
                        />
                    </div>
                </div>

            </CardBody>

        </>
    )
}