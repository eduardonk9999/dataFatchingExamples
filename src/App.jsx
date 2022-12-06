import { useFetch } from "./hooks/useFetch";

function App() {
  const { data: repositories } = useFetch('https://api.github.com/users/eduardonk9999/repos')  

  return (
    <ul>
      {repositories?.map(repo => {
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
