import './App.css';
import DrinksList from './DrinksList/DrinksList';
import MoviesList from './MoviesList/MoviesList';
import ProjectsList from './ProjectsList/ProjectsList';

const App = () => {
  return (

    <div className="App">

      <MoviesList />

      <p>-----</p>

      <ProjectsList />

      <p>-----</p>

      <DrinksList />
    </div>
  )
}

export default App