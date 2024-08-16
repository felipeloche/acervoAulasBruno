import { useState } from "react"
import {Titulo } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function Create(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleCreate(){
        if(!name || !email || !password){
            return alert('Preencha todos os campos')
        }

        console.log("Nome: " + name
        + "\nE-mail: " + email
        + "\nSenha: " + password)

        alert("Nome: " + name
        + "\nE-mail: " + email
        + "\nSenha: " + password)
    }

    return(
        <>
            <Titulo>
                Cadastro de Usuário
            </Titulo>

            <Input
                placeholder="Nome"
                type="text" 
                onChange={e => setName(e.target.value)}               
            />

            <Input
                placeholder="E-mail"
                type="text"   
                onChange={e => setEmail(e.target.value)}               
            />

            <Input
                placeholder="Senha"
                type="password" 
                onChange={e => setPassword(e.target.value)}                 
            />

            <Button
                title="Cadastrar"
                onClick={handleCreate}
            />
        </>
    )
}