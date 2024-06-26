import { useEffect, useState } from "react";

const AddUser = ({ onAdd, editVal }) => {
  const [inputData, setInputData] = useState({
    userId: "",
    password: "",
  });

  const handleChange = (inputIdentifier, e) => {
    setInputData((prevData) => {
      return {
        ...prevData,
        [inputIdentifier]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(inputData);
    setInputData({ userId: "", password: "" });
  };

  useEffect(() => {
    editVal ? setInputData(editVal) : null;
  }, [editVal]);
  //   console.log("data", InputData);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="user id"
          required
          value={inputData.userId}
          onChange={(e) => {
            handleChange("userId", e);
          }}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={inputData.password}
          required
          onChange={(e) => {
            handleChange("password", e);
          }}
        />
        <br />
        <button>{editVal ? "update" : "submit"}</button>
      </form>
    </>
  );
};

export default AddUser;
