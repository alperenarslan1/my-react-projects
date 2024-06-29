import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescription = ["Fundamentals", "Core", "Crucial"];

const genRandomInt = (max) => {
   return Math.floor(Math.random() * max);
};

function Header() {
   const description = reactDescription[genRandomInt(reactDescription.length)];

   return (
      <header>
         <img src={reactImg} />
         <h1>React Essentials</h1>
         <p>{description} React concepts you will need for almost any app you are going to build!</p>
      </header>
   );
}

export default Header;
