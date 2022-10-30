export const Button: React.FC<{ label: string; onClick: () => void }> = ({
  label,
  onClick,
}) => {
  return (
    <button
      type="button"
      className="p-2 rounded-lg text-white bg-aizuGreen w-full focus:border-none"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
