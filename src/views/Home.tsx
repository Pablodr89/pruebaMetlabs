import Card from "../components/Card"

export default function Home() {
    return (
        <>
            <div className="text-white bg-image rounded-lg flex justify-between items-center max-h-96">
                <div className="ps-20 w-text-image">
                    <h2 className="raleway-bold text-6xl text-wrap">Membresía Premium</h2>

                    <div className="mt-5 flex gap-5">
                        <button className="rounded-3xl color-button-subscribe py-2 px-7 text-sm">Suscribirse</button>
                        <button className="rounded-3xl border-2 py-2 px-7 text-sm">Descubrir planes</button>
                    </div>
                </div>

                <img src="/image_2.svg" alt="Imagen Principal" />
            </div>

            <div className="flex gap-20 py-10">
                <h4 className="raleway-bold text-white text-xl">Obras destacadas</h4>

                <div className="dm-sans-regular text-gray-300 flex gap-5 text-xs">
                    <button>Music</button>
                    <button>Collectibles</button>
                    <button>Utility</button>
                </div>
            </div>

            <div className="grid grid-cols-5 mb-20">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}
