export const Spacer: React.FC<{ size: string }> = ({ size }) => {
  return <div className={`w-${size} h-${size}`} />;
};
