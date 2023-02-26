import axios from "axios"
import { useEffect } from "react"

const Header = ()=>{
    return(
        <>
            <div className="z-50 border-b-2 border-b-zinc-500 fixed top-0 h-[75px] w-[100%] flex justify-center bg-[url('https://ludos-paradise.ancorathemes.com/wp-content/uploads/2017/12/top-header.jpg?id=546')]">
                <div className="flex flex-row w-[80%] justify-evenly text-zinc-400 items-center text-[26px]">
                    <p className="h-fit hover:text-orange-600 transition duration-300 cursor-pointer"><a href="/">Home</a></p>
                    <a href="/regras"><p className="h-fit hover:text-orange-600 transition duration-300 cursor-pointer">Regras</p></a>
                    <img src="https://i.imgur.com/JeyqZtj.png" alt="" className="max-h-[75px]"/>
                    <p className="h-fit hover:text-orange-600 transition duration-300 cursor-pointer">Conteúdos</p>
                    <p className="h-fit hover:text-orange-600 transition duration-300 cursor-pointer"><a href="/membros">Membros</a></p>
                </div>
            </div>
        </>
    )
}

export default Header