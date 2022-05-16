import React from "react";
import fetch from "node-fetch";

function AddTask() {
  const [task, setTask] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  const submit = async () => {
    const response = await fetch("/add-task", {
      method: "post",
      body: JSON.stringify(task),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />
      <input type="button" onClick={() => submit()} />
    </div>
  );
}

export default AddTask;
