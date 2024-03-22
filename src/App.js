import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { HomePage } from './Pages/Home/HomePage';
import { AddTaskForm } from './Pages/Home/Component/AddTaskForm';
import { useState, useEffect } from "react";

function App() {

  const [userData, setUserData] = useState([]);
  const [url, setUrl] = useState("http://localhost:8000/user");
  const pendingTask = userData.length;
  const [taskDescription, setTaskDescription] = useState("");
  const [buttonText, setButtonText] = useState("Add");
  const [taskIdToUpdate, settaskIdToUpdate] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setUserData(data))
  }, [url]);


  return (
    <div className="container flex flex-col flex-wrap mx-auto bg-stone-600 rounded-md mt-2" >
      <section className="w-full h-20 bg-zinc-100 mt-2">
        <Header />
      </section >
      <section className="w-full h-15 mt-2 flex flex-row justify-center">
        <AddTaskForm userData={userData} setUserData={setUserData} taskDescription={taskDescription} setTaskDescription={setTaskDescription} buttonText={buttonText} setButtonText={setButtonText} taskIdToUpdate={taskIdToUpdate} />
      </section>
      <main>
        <HomePage userData={userData} pendingTask={pendingTask} setUserData={setUserData} taskDescription={taskDescription} setTaskDescription={setTaskDescription} buttonText={buttonText} setButtonText={setButtonText} settaskIdToUpdate={settaskIdToUpdate} />
      </main>
      <section>
        <Footer />
      </section>
    </div >
  );
}
export default App;