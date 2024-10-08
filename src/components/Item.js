export default function Item({ item, handleRemoveItems, onToggleItem }) {
  return (
    <li>
      <span>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
      </span>
      <span>{item.quantity}</span>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description}
      </span>
      <button onClick={() => handleRemoveItems(item.id)}>✖️ </button>
    </li>
  );
}
