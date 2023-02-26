import { FormEvent, useState } from "react"
import axios from "axios"

const LoginForm =()=>{
    const [isLoading, setLoading] = useState<boolean>(false)



    const submit = (e: FormEvent)=>{
        e.preventDefault()
        axios.get('/api/login').then(res=>{
            console.log(res)
        })
    }

    return(
        <form className="flex flex-col w-[30%] bg-[#061217] p-10 text-white rounded-lg h-[400px] justify-evenly" action="" onSubmit={(event=>{submit(event)})}>
            <div className="w-[100%] text-center text-[30px] font-bold">
                Acesse
            </div>
            <div className="flex flex-col">
                <label htmlFor="nick">Nome em jogo</label>
                <input type="text" name="nick" id="nick" className="text-black rounded-lg p-[15px] h-[30px] font-bold" required/>
            </div>
            <div className="flex flex-col">
            <label htmlFor="nick">Senha</label>
                <input type="password" className="text-black rounded-lg p-[15px] h-[30px] font-bold" required/>
            </div>
            <div className="flex flex-col justify-center items-center">
                {
                    isLoading ? <div>Carregando</div> : <input type="submit" className=" text-black font-bold px-1 py-1 bg-white rounded-lg w-fit min-w-[80px] cursor-pointer"/>
                }
            </div>
        </form>
    )
}

export default LoginForm