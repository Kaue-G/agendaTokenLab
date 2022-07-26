import React from "react";
import { AreaLogin } from './styled'
import { BtnDeFault } from "../../components/styled";

export function Login() {
    return (
        <AreaLogin>
            <h1>Loggin</h1>

            <form>
                <div className = "form-imput">
                    <label>Nick name</label>
                    <input type = "email" />
                </div>
                <div className = "form-imput">
                    <label>Senha</label>
                    <input type = "password" />
                </div>
            </form>

            <BtnDeFault>
                Entrar
            </BtnDeFault>
            
            <p>se cadastrar</p>
        </AreaLogin>
    );
};

