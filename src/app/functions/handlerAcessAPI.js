'use serve'
const responseIsUserAtuh = [
    {name:'Geovana',
        email:'gigi@teste.com',
        senha:"123456",
        token:'i7fL1QbZbe3MfmfmSUgFNzXvUzdd2Zpe1ILNDQkQSylapjygY6ohiz9777QK6VgCwE3pU40j7foeVW8YVXsdqIqhdSGEi56GFev6hl5yatFqgM7RfoFtiCoSd5OqeVYZGOwH9dA87mGkr46508f06d5c9ab'
    },
{name:'Valéria',
    email:'val@teste.com',
    senha:"654321",
    token:'s2K5qHoQ9AryTkgAXMM1uUAc5zdQNUOeHOG5x9EyqNj5qoMDW37wiJ4G0UIeEFncPVcXyLnnFhkjAcGRzJdQvLcQfa0leozPFfu4bw2yc7kHLcPCpjYNatEfzhsW4EiqjqIfQwdHYp4ysZ6508f22532869'
},
{name:'Gabrielle',
    email:'Gabi@teste.com',
    senha:"987654",
    token:'glcSaJu0EPpuIex89yYncUhoiv0Momet8pk2uoYXGaWR8U5HgWu4kQ8kAOkyelvcpJFGZ1QxSwS3yeEaRcOWzSg7l6JQvj6NPTSKG39KxcG4ppsAXklazKDdoioLddQ0HuRVVFRyKwtnSJ6508f2cf693a2'
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