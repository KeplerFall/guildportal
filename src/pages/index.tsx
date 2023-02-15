import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InfoCard from '@/components/InfoCard'
import LoginForm from '@/components/LoginForm'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="pt-[75px] bg-[url('https://i.imgur.com/Yu7uOvl.png')] h-fit min-h-[100vh] bg-cover bg-no-repeat">
        <Header />

        <Footer />
    </div>
  )
}