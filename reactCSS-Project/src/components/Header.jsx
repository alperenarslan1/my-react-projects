import logo from "../assets/logo.png";

export default function Header() {
   return (
      <header className="flex flex-col items-center justify-center my-8">
         <img
            src={logo}
            alt="A canvas"
            className=" w-44 h-44 mb-8 object-contain "
         />
         <h1 className="font-semibold text-center text-xl  md:text-4xl tracking-big uppercase text-amber-800 font-title">
            ReactArt
         </h1>
         <p className="text-stone-500 mt-3">
            A community of artists and art-lovers.
         </p>
      </header>
   );
}
