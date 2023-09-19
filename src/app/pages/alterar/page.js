
'use client'
import "./style.css"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const UserForm = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
 
     toast.success('VIngador alterado com sucesso ')
    // Verifique se onSubmit é uma função antes de chamá-la
    
    }
  return (
    <div>
      
      <form onSubmit={handleSubmit}>
      <div class="avatar">
      </div>
      <h1>Alterar</h1>
      <input
          placeholder='Nome'
          type="Nome"
          >
        </input>
        <input
          placeholder='E-mail'
          type="email"
          >
        </input>
        <input
          placeholder='Senha'
          type='password'
          >
        </input>
        <button class="button-01"  ><span class="text">Alterar</span></button>
        <button class="button-02"><span class="text"><a href="/pages/dashboard">Voltar</a></span></button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default UserForm;

