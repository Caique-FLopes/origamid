import React from "react";
import Input from "./Input";
import Button from "./Button";

const Form = () => {
    return (
        <form>
            <label htmlFor="nome">Nome</label>
            <Input/> 
            <label htmlFor="email">Email</label>
            <Input/> 
            <Button />
        </form>
    )
}

export default Form