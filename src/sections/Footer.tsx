import Logo from "@/assets/logo.svg"
import Xsocial from "@/assets/social-x.svg"
import Instsocial from "@/assets/social-instagram.svg"
import Ytsocial from "@/assets/social-youtube.svg"

export const Footer = () => {
    return (
        <footer className="py-5 border-t border-white/15 ">
            <div className="container">
                <div className="flex flex-col  lg:flex-row lg:items-center gap-8">
                    <div className="flex gap-2 items-center lg:flex-1">
                        <Logo className="h-6 w-6"/>
                        <div className="font-medium">Lorem comic hub</div>
                    </div>
                        <nav className="flex flex-col gap-5 lg:flex-row lg:gap-7 lg:flex-1 lg:justify-center">
                            <a href="#" className="text-white hover:text-white/15 text-sm md:text-sm transition">OpenMic</a>
                            <a href="#" className="text-white hover:text-white/15 text-sm md:text-sm transition">Shows</a>
                            <a href="#" className="text-white hover:text-white/15 text-sm md:text-sm transition">Sponsorship</a>
                            <a href="#" className="text-white hover:text-white/15 text-sm md:text-sm transition">Comic</a>
                            <a href="#" className="text-white hover:text-white/15 text-sm md:text-sm transition">Fellowship</a>
                        </nav>
                    <div className="flex gap-5 lg:flex-1 lg:justify-end">
                        <Xsocial className="text-white/40 hover:text-white transition"/> 
                        <Instsocial className="text-white/40 hover:text-white transition"/>
                        <Ytsocial className="text-white/40 hover:text-white transition" />
                    </div>
                </div>
            </div>
        </footer>
    )
}