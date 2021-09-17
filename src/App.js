import './App.css';
import { useState, useEffect } from 'react';
import Information from './components/Information/Information';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [input, setInput] = useState([])
  const [repo, setRepo] = useState([])
  const [url, setUrl] = useState([])

  function showRepository(){
    if(input.length>0){
      setRepo(input)
    }else{
      toast.warning("Repositório não informado")
    }
  }

  function error(){
    if(input.length > 0) toast.warning("Repositório não existente")
  }

  useEffect(() => {
    fetch(`https://api.github.com/repos/${repo}`)
    .then(response => response.json())
    .then(data => setUrl([...url, {img:data.owner.avatar_url, name:data.name, description:data.description, link:data.html_url}]))
    .catch(error)
  },[repo])

  return (
    <div className="App">
      <Information input={input} setInput={setInput} showRepository={showRepository}/>
      <ToastContainer/>
      <ul>
          {url.map((repos, index) => (
            <li key={index}>
              <a href={repos.link}>
                <img src={repos.img}></img>
                <div className="info">
                  <h1>{repos.name}</h1>
                  <p>{repos.description}</p>
                </div> 
              </a>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default App;
