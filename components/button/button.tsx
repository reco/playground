import { ButtonHTMLAttributes } from "react";

type Appearance = "none" | "auto" | "textfield";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  style?: CSSStyleDeclaration;
  appearance?: Appearance | undefined;
};

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
      // style={{
      //   animation: "border-pulse 2s infinite",
      // }}
      {...rest}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
      <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
      <span className="relative text-white shadow-sm"> {children}</span>
    </button>
  );
}

// export function Button({ children, ...rest }: ButtonProps) {
//   return (
//     <button
//       className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
//       // style={{
//       //   animation: "border-pulse 2s infinite",
//       // }}
//       {...rest}
//     >
//       <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
//       <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
//       <span className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white">
//         {children}
//       </span>
//       <span className="absolute inset-0 border border-black rounded-full"></span>
//     </button>
//   );
// }
