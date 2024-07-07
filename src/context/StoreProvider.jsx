import { createContext, useState } from "react";
import { items as itemsDB } from "../data/items";

const StoreContext = createContext();
//

const StoreProvider = ({ children }) => {
  const [items, setItems] = useState(itemsDB);
  const [elements, setElements] = useState([]);

  const [currentOp, setCurrentOp] = useState(0);

  const handleClickOp = (id) => {
    const item = items.filter((item) => item.categoria_id === id);
    setCurrentOp(id);
    setElements(item);
  };

  const initializePost = () => {
    let elements = [...items];

    setElements(elements);
  };

  const [isEnglish, setIsEnglish] = useState(true); // Estado inicial en inglés

  const handleLanguageChange = () => {
    setIsEnglish(!isEnglish); // Cambia el estado entre inglés y español
  };

  return (
    <StoreContext.Provider
      value={{
        items,
        itemsDB,
        elements,
        setElements,
        currentOp,
        handleClickOp,
        initializePost,
        isEnglish,
        setIsEnglish,
        handleLanguageChange
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreProvider };
export default StoreContext;
