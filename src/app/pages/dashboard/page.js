import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import ListUser from "@/app/componets/ListUser";
import "./style.css"
import Excluir from "@/app/componets/excluir"
export default  function Dashboard() {


   const users =  getUsers() 
    return (
        <div class="body">
           <Suspense  fallback={<p>Carregando....</p>}>
            <div class="lista">
            <ListUser class="lista" users={users}/>
            </div>
            <div class="alterar">
            <button class="button-01" role="button" ><span class="text"><a href="/pages/alterar">Alterar</a></span></button>
            <button class="button-02" role="button" ><span class="text"><a href="/pages/registrar">Registrar</a></span></button>
            </div>
           </Suspense>
           <Excluir class="excluir-64"/>
        </div>
    );
};