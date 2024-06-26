import { useState } from "react";
import AddUser from "./Component/AddUser";
import ListUser from "./Component/ListUser";

const App = () => {
  const [userData, setUserData] = useState([]);

  const [isEdit, setIsEdit] = useState(null);

  const [editVal, setEditVal] = useState(null);

  const handleAdd = (input) => {
    if (!input.userId || !input.password) {
      alert("please Provide user ID and password");
    } else if (isEdit) {
      setUserData((prevData) =>
        prevData.map((user) =>
          user.id === isEdit
            ? {
                userId: input.userId,
                password: input.password,
              }
            : user
        )
      );
      setIsEdit(null);
      setEditVal(null);
    } else {
      const newData = {
        id: new Date().getTime(),
        userId: input.userId,
        password: input.password,
      };

      setUserData((prevData) => [...prevData, newData]);
    }
  };

  // console.log("data", userData);

  const handleEdit = (id) => {
    const updatingItem = userData.find((user) => user.id === id);
    setIsEdit(id);
    setEditVal(updatingItem);
  };

  const handleDelete = (id) => {
    const updatedData = userData.filter((user) => user.id !== id);
    setUserData(updatedData);
  };

  return (
    <>
      <AddUser onAdd={handleAdd} editVal={editVal} />
      <ListUser
        userData={userData}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </>
  );
};

export default App;
