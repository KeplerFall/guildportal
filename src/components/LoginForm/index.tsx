import { FormEvent } from "react"

const LoginForm =()=>{

    const submit = (e: FormEvent)=>{
        e.preventDefault()
    }

    return(
        <form className="flex flex-col w-[30%] bg-[#061217] p-10 text-white rounded-lg h-[400px] justify-evenly" action="" onSubmit={(event=>{submit(event)})}>
            <div className="w-[100%] text-center text-[30px]">
                Acesse
            </div>
            <div className="flex flex-col">
                <label htmlFor="nick">Nome em jogo</label>
                <input type="text" name="nick" id="nick" className="text-black"/>
            </div>
            <div className="flex flex-col">
            <label htmlFor="nick">Senha</label>
                <input type="password" className="text-black"/>
            </div>
            <div className="flex flex-col">
                <input type="submit" className=" text-black font-bold px-1 py-1 bg-white rounded-lg w-fit"/>
            </div>
            
            
        </form>
    )
}

export default LoginForm