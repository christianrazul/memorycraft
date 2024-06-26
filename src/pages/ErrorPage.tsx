import MenuButton from "../components/MenuButton";
import Title from "../components/Title";
import Window from "../components/Window";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center">
      <Window>
        <div className="flex h-full flex-col items-center gap-8 pt-24">
          <Title />
          <h1 className="font-minecraft text-xl text-red-700">
            Error 404: Page not found
          </h1>
          <MenuButton text="Home" to="/"></MenuButton>
        </div>
      </Window>
    </div>
  );
};

export default ErrorPage;
