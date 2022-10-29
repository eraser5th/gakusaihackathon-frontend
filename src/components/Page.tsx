export const Page: React.FC<{
  header: React.ReactNode;
  title?: string;
  navigator?: React.ReactNode;
  children: React.ReactNode;
}> = ({ header, navigator, children, title }) => {
  return (
    <div className="w-screen min-h-screen bg-slate-100">
      {header}
      {navigator}
      <main className="p-10">
        {title && <h1 className="font-bold text-2xl">{title}</h1>}
        <div className="h-8" />
        {children}
      </main>
    </div>
  );
};
