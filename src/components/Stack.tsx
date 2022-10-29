export const Stack: React.FC<{
  children: React.ReactNode;
  vertical?: boolean;
  wrap?: boolean;
  justifyContent?: "start" | "end" | "center" | "between" | "around" | "evenly";
  justifyItems?: "start" | "end" | "center" | "stretch";
  alignContent?: "start" | "end" | "center" | "between" | "around" | "evenly";
  alignItems?: "start" | "end" | "center" | "stretch" | "baseline";
}> = ({
  children,
  vertical = false,
  wrap = false,
  justifyContent = "start",
  justifyItems = "start",
  alignContent = "start",
  alignItems = "start",
}) => {
  return (
    <div
      className={`flex ${vertical ? "flex-col" : ""} ${
        wrap ? "flex-wrap" : ""
      } justify-${justifyContent} justify-items-${justifyItems} content-${alignContent} align-${alignItems}`}
    >
      {children}
    </div>
  );
};
