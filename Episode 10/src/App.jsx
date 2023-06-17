// import FirstUseCase from "./components/FirstUseCase"
import SecondUseCase from "./components/SecondUseCase";
import ThirdUseCase from "./components/ThirdUseCase";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

function App() {

  const client = new QueryClient();

  return (
    <QueryClientProvider client={client} >

      {/* <FirstUseCase /> */}
      {/* <SecondUseCase /> */}
      <ThirdUseCase />

    </QueryClientProvider>
  )
}

export default App
