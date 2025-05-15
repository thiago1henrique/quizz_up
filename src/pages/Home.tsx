import Header from "../Components/Header.tsx";
import Card from "../Components/Card.tsx";

const Home = () => {
    return (
        <>
            <Header />

            <div className="w-full min-h-dvh flex flex-wrap items-center justify-center gap-4 md:gap-8 p-4 pt-28 max-w-[800px] mx-auto">
                <Card title={"Javascript"} description={"lorem ipsum dolor"} />
                <Card title={"Javascript"} description={"lorem ipsum dolor"} />
            </div>
        </>
    )
}

export default Home;