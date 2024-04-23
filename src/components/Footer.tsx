import minecraftHeart from "/assets/minecraft-heart.webp";

const Footer = () => {
  return (
    <footer className="flex h-8 w-full items-center justify-between px-4 font-minecraft">
      <p className="pb-0">MemoryCraft 1.20.24</p>
      <div className="flex items-center">
        <p className="pb-0">
          Made by{" "}
          <span>
            <a href="https://github.com/christianrazul" className="pb-0">
              christianrazul
            </a>{" "}
          </span>
          {"with "}
        </p>
        <img src={minecraftHeart} alt="❤️" className="w-6 pb-2" />
      </div>
    </footer>
  );
};
export default Footer;
