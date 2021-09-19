import "./App.css";

import { useReducer, useEffect } from "react";

function App() {
  let user = [
    {
      userController: ["Orginisation"]
    }
  ];
  useEffect(() => {
    if (user[0].userController.length > 0) {
      dispatch({ type: "add", value: user[0].userController[0] });
    }
  }, []);

  let controller = ["Orginisation", "Miljönämnd"];
  const [activeControllers, dispatch] = useReducer(
    (activeControllers, { type, value }) => {
      switch (type) {
        case "add":
          return [...activeControllers, value];
        case "remove":
          return activeControllers.filter((index) => index !== value);
        default:
          return activeControllers;
      }
    },
    []
  );
  console.log(activeControllers);

  // toogle check/uncheck category
  const handleControllerChange = (e) => {
    if (e.target.checked) {
      dispatch({ type: "add", value: e.target.value });
    } else if (!e.target.checked) {
      dispatch({ type: "remove", value: e.target.value });
    }
  };

  return (
    <div className="App">
      {controller.map((item, idx) => (
        <label key={idx} onChange={handleControllerChange}>
          <input
            type="checkbox"
            defaultChecked={user[0].userController.includes(item)}
            value={item}
          />
          {item}
        </label>
      ))}
      <h3>Valda</h3>
      {activeControllers.length > 0 ? (
        <p>{activeControllers.join(", ")}</p>
      ) : (
        <p>Inget valt</p>
      )}
    </div>
  );
}
export default App;
