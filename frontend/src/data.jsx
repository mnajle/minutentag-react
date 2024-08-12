import { createContext, useEffect, useState } from 'react';


export const DataContext = createContext([]);

export function DataProvider({ children }) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/api/products`)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data)
            })
    }, [])
    return (
      <DataContext.Provider value={products}>
          {children}
      </DataContext.Provider>
    );
}
  