

export const HomePage = ({ userData, pendingTask, setUserData, taskDescription, setTaskDescription, buttonText, setButtonText, settaskIdToUpdate }) => {

  function handelOnEditClick(taskid) {
    console.log("tID" + taskid);
    console.log(userData);
    const { task_description } = userData.find(task => task.id === taskid);
    //console.log("gTD" + getTaskDescription);
    setTaskDescription(task_description);
    setButtonText("Update");
    settaskIdToUpdate(taskid);
    //const taskUpdate = userData.map((user) => user.id === taskid ? { ...user, task_description: "somechnge" } : user);
    //setUserData(taskUpdate);
  }

  function handleOnDelete(taskid) {
    const taskListUpadate = userData.filter((data) => data.id !== taskid);
    setUserData(taskListUpadate);
  }

  return (
    <div className="content">
      <div className="head flex justify-between ">
        <div className="tasktext  m-1">
          <span className="inline-block text-stone-50 text-xl tracking-widest">
            Todo
          </span>
          <span className="inline-block bg-slate-300 p-2 ml-1 w-10 h-10 rounded-full text-center font-bold">{pendingTask}</span>
        </div>
        <div className="clearall bg-slate-100 m-1">
          <span className="inline-block btn btn-primary w-full bg-blue-600 p-3 rounded text-white font-semibold">Clear all</span>
        </div>
      </div>

      <hr className="w-full" />
      <div className="task-content ring-1 bg-slate-100 flex flex-row flex-wrap">

        {userData.map((user) => (

          <div className="taskdata flex flex-col justify-between h-32 w-1/3 border-2" key={Number(user.id)}>
            <div className="flex flex-row justify-between ">
              <h1 className="px-2 py-2">{user.task_description}</h1>
              <div className="action_button px-2 py-2">
                <button
                  className="padding px-2 py-2 bg-orange-200 w-16 rounded font-semibold"
                  onClick={() => { handelOnEditClick(user.id) }}>edit</button>
                <span>|</span>
                <button
                  className="px-2 py-2 bg-red-600 w-16 rounded text-white font-semibold"
                  onClick={() => handleOnDelete(user.id)}>delete</button>
              </div>
            </div>
            <span className="tastcreateddateandtime px-2 py-2">{user.email}</span>
          </div>
        ))}
      </div >


    </div >

  )
}
