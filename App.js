import { UserList } from './components/UserList'
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <UserList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
