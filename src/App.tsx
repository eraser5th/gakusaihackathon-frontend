import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRouter } from "./routing/Route";

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
};
