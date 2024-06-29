function Button({ children, ...props }) {
   return (
      <button
         {...props}
         className="px-4 py-2 font-semibold uppercase rounded-md text-stone-900 bg-amber-400 hover:bg-amber-300"
      >
         {children}
      </button>
   );
}

export default Button;
