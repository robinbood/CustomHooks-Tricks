import { useState } from "react";
    // T is a placeholder for types if you forgot 
const useQueue = <T,>() => {
    //  You can use your types for this..i recommend interface for easier use
  const [items, setItems] = useState<T[]>([]);
    //   Immutability cuz react doesn't like or just use useImmer()
  const enqueue = (item: T) => setItems(prev => [...prev, item]);
  const dequeue = () => setItems(prev => prev.slice(1));
  
  return { items, enqueue, dequeue };
};

export default useQueue; 
