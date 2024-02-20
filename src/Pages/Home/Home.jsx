import FixedCard from "../../Components/Home/FixedCard";
import Header from "../../Components/Home/Header";

const Home = () => {
  return (
    <>
      <section className="flex py-[5rem]">
        <section className="w-[40%] flex">
          <Header />
          <FixedCard />
        </section>
        <section className="w-[60%]"></section>
      </section>
    </>
  );
};

export default Home;
