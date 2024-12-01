import { shoe5 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Solar Panel
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          We make renewable energy solutions easily accessible in Egypt by connecting consumers with trusted suppliers and offering reliable maintenance for efficient systems.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="Veiw detail"></Button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe5}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain rounded-lg"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
