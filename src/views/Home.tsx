import Card from '../components/Card';

export default function Home() {
    return (
        <>
            <div className="text-white bg-image rounded-lg flex justify-between items-center md:overflow-hidden md:max-h-56 lg:overflow-visible lg:max-h-96">
                <div className="py-5 md:ps-10 lg:ps-20 w-text-image text-center">
                    <h2 className="raleway-bold text-2xl md:text-3xl lg:text-6xl text-wrap">Membresía Premium</h2>

                    <div className="mt-5 flex justify-center gap-5">
                        <button className="rounded-3xl color-button-subscribe w-28 md:w-36 py-2 px-2 md:px-7 text-sm">Suscribirse</button>
                        <button className="rounded-3xl border-2 w-36 md:w-44 py-2 px-2 md:px-7 text-sm">Descubrir planes</button>
                    </div>
                </div>

                <img src="/image_2.svg" alt="Imagen Principal" className="hidden md:block md:size-80 lg:size-max" />
            </div>

            <div className="flex flex-col justify-center items-center gap-5 md:flex-row md:justify-start md:gap-20 py-5 md:py-10">
                <h4 className="raleway-bold text-white text-xl">Obras destacadas</h4>

                <div className="dm-sans-regular text-gray-300 flex gap-5 text-xs">
                    <button>Music</button>
                    <button>Collectibles</button>
                    <button>Utility</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mb-20">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    );
}
