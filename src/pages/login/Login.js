import React from 'react'
import { useForm } from 'react-hook-form'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className="flex justify-center">
            <div>

                <h1>this is  login page </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-12 my-8">
                    <label className="block">
                        Email:
                        <input className="bg-white border border-1 border-gray-400 rounded-lg px-3" {...register("email")} />

                    </label>
                    <label className="block" >
                        Password:
                        <input className="bg-white border border-1 border-gray-400 rounded-lg px-3" {...register("password")} />

                    </label>

                    <input type="submit" className="bg-green-400 " />
                </form>
            </div>
        </div>
    )
}

export default Login;
