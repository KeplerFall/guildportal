import Footer from "@/components/Footer"
import Header from "@/components/Header"
import LoginForm from "@/components/LoginForm"

const Membros = () =>{
    return(
        <div className="pt-[75px] bg-[url('https://i.imgur.com/ByqArin.png')] h-fit min-h-[100vh] bg-cover bg-no-repeat w-[100%] flex justify-center">
            <Header />
            <div className="w-[80%] flex justify-center items-center">
                <LoginForm></LoginForm>
            </div>
            <Footer />
        </div>
    )
}

export default Membros