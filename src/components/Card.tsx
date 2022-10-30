export const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="rounded-lg bg-aizuLightGray p-5 box-border w-full">
      {children}
    </div>
  );
};
