import axios from "axios";
import { useQuery } from "react-query";

function App() {
  const { data, isFetching } = useQuery('repos', async () => {
    const response = await axios.get('https://api.github.com/users/eduardonk9999/repos')
    return response.data;
  })

  return (
    <ul>
      { isFetching && <p>Carregando...</p> }
      {data?.map(repo => {
        return(
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default App
