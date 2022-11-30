import { BrowserRouter } from "react-router-dom";


export default function TextWapper({ children }) {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
}