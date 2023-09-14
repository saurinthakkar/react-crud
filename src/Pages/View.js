import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { Button, Table } from "reactstrap";
import { formattedDate } from "../utils/helper";

export const View = () => {
  const [user, setUser] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("STUSERS"));
    console.log("USER", users);
    if (id.length !== 0) {
      const tempUser = users.find((o) => o.userId === id);
      console.log("HELLO", tempUser);
      setUser(tempUser);
    }
  }, [id]);

  const navigate = useNavigate();

  const backToList = () => {
    navigate("/users");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow rounded-md bg-gray-50 px-[100px] pb-5 min-h-screen flex flex-col">
        <div className="mt-4 mb-3 bg-gray-400 h-14 rounded">
          <div className="py-3 pl-5">
            <Link to="/dashboard">Dashboard</Link>&nbsp;/ &nbsp;
            <Link to="/users">Users</Link>&nbsp;/ &nbsp;
            <Link className="text-black no-underline">View</Link>
          </div>
        </div>
        <div className="mt-4 mb-0 font-bold flex justify-between">
          <h1 className="text-4xl">Users</h1>
          <Button onClick={backToList}>
            <i
              class="fa fa-arrow-left fa-xs"
              style={{ paddingRight: "10px" }}
            ></i>
            Back to List
          </Button>
        </div>
        <div className="flex-grow mt-10 mb-0 flex flex-col">
          <div className="border-gray-200 border-2 rounded flex flex-col bg-white">
            <div className="rounded ml-7 my-6 mr-[28px]">
              <Table bordered hover>
                {/* <thead></thead> */}
                <tbody>
                  <tr>
                    <th>First Name</th>
                    <td>{user?.firstname}</td>
                  </tr>
                  <tr>
                    <th scope="row">Last Name</th>
                    <td>{user?.lastname}</td>
                  </tr>
                  <tr>
                    <th scope="row">Email</th>
                    <td>
                      <Link className="underline text-blue-600">
                        {user?.email}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Gender</th>
                    <td>{user?.gender}</td>
                  </tr>
                  <tr>
                    <th scope="row">Age</th>
                    <td>{user?.age}</td>
                  </tr>
                  <tr>
                    <th scope="row">Address</th>
                    <td>{user?.address}</td>
                  </tr>
                  <tr>
                    <th scope="row">Note</th>
                    <td>{user?.note}</td>
                  </tr>
                  <tr>
                    <th scope="row">Created At</th>
                    <td>{formattedDate(user?.createdAt)}</td>
                  </tr>
                  <tr>
                    <th scope="row">Updated At</th>
                    <td>{formattedDate(user?.updatedAt)}</td>
                  </tr>
                  <tr>
                    <th scope="row">Status</th>
                    <td>{user?.status}</td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <span className="flex w-1/5 justify-between">
                        <button className="btn btn-outline-secondary">
                          <i class="fa fa-pencil fa-xs me-2"></i>Edit
                        </button>
                        <button className="btn btn-outline-danger btn-sm">
                          <i class="fa fa-trash me-2"></i>Delete
                        </button>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
