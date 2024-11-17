import Button from "@/components/ui/Button";

export default function  Hero() {
    return (
        <section className="h-[492px] flex items-center">
            <div className="container">
                <h1 className="text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
                    KCC
                </h1>
                <p className="text-lg text-white/70  mt-5 text-center">a hangout place of all budding comic!</p>
                <div className="flex justify-center mt-5">

                    <Button>Open Mic</Button>
                </div>
            </div>
        </section>
        
    )

}