import { useState } from "react";

export const AddTaskForm = ({ userData, setUserData, taskDescription, setTaskDescription, buttonText, setButtonText, taskIdToUpdate }) => {

  const date = new Date();
  function onChangeTaskDescription(e) {
    setTaskDescription(e.target.value);
  }

  function handelSubmit(e) {
    e.preventDefault();
    if (buttonText == "Add") {
      const newTask = {
        "id": Number(Math.floor(Math.random() * 10000)),
        "email": `${taskDescription}.office@reqres.in`,
        "task_description": taskDescription,
        "created_at": date.toLocaleDateString()

      };
      setUserData([...userData, newTask]);
    } else if (buttonText == 'Update') {
      const upatedTaskList = userData.map((data) => data.id === taskIdToUpdate ? { ...data, task_description: taskDescription, updated_at: date.toLocaleDateString() } : data)
      setUserData(upatedTaskList);
      setButtonText("Add");
    }
    setTaskDescription("");
  }
  return (
    <>

      <form className="flex flex-row" onSubmit={(event) => { handelSubmit(event) }} >
        <div className="">
          <label htmlFor="taskname" className="sr-only">Task</label>
          <input type="text"
            className="form-control-plaintext w-96 p-3"
            id="taskname"
            name="taskname"
            placeholder="add new task."
            onChange={(event) => onChangeTaskDescription(event)}
            value={taskDescription}
          />
        </div>
        <button type="submit" className="btn btn-primary  bg-green-400  rounded ml-2 px-2 py-2 w-16 rounded font-semibold">{buttonText}</button>
      </form>
    </>
  )
}
