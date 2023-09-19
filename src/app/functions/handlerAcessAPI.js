'use serve'
const responseIsUserAtuh = [
    {name:'Geovanna',
        email:'gigi@teste.com',
        senha:"1234",
        token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    },
{name:'Valéria',
    email:'val@teste.com',
    senha:"5678",
    token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
},
{name:'Gabrielle',
    email:'gabi@teste.com',
    senha:"9101112",
    token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
}];

const getUserAuthenticated = async (userLogin) => {
let Userauth = {};

 
    responseIsUserAtuh.map((user) =>{
        if(user.email === userLogin.email && user.senha === userLogin.password){
           Userauth= user
        }
    })
    return Userauth;
}
const getUsers = () =>{
       return responseIsUserAtuh ;
}
export { getUsers, getUserAuthenticated };