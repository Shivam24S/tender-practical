const ListUser = ({ userData, onDelete, onEdit }) => {
  const handleDelete = (id) => {
    onDelete(id);
  };

  const handleEdit = (id) => {
    onEdit(id);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>user ID</th>
            <th>Password</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.userId}</td>
              <td>{user.password}</td>
              <td>
                <button onClick={() => handleEdit(user.id)}>Edit</button>
              </td>
              <td>
                <button
                  onClick={() => {
                    handleDelete(user.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListUser;
