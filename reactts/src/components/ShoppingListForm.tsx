import React, { useRef } from "react";

interface ShoppingListFormProps {
  onAddItem: (item: string, quantity: number) => void;
}

export default function ShoppingListForm({
  onAddItem,
}: ShoppingListFormProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newProduct = inputRef.current!.value;
    const quantity = parseInt(quantityRef.current!.value);
    onAddItem(newProduct, quantity);
    inputRef.current!.value = "";
    quantityRef.current!.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" ref={inputRef} />
      <input type="number" min={0} ref={quantityRef} />
      <button type="submit">Add Item</button>
    </form>
  );
}
