import React from "react";
import Input from "./Input";
import Button from "./Button";


const Form = () => {
    const arr = ['Item1', 'Item2'];

    return (
        <form>
            <Input id="email" label="Email" required/>
            <Input id="senha" type="password" label="Senha"  />
            <Button items={arr}/>
        </form>
    );
};

export default Form;