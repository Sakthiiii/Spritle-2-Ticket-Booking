import "./index.css";
//import AgentList from "../AgentList";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const AgentList = (props) => {
  const { user } = props;
  const { Email, Password, Name, Phone, id, Dob } = user;

  const deleteUser = (id) => {
    const array = JSON.parse(localStorage.getItem("data"));

    const updatedArray = array.filter((item) => item.id != id);
    localStorage.setItem("data", JSON.stringify(updatedArray));
  };
  const onClickDel = () => {
    deleteUser(id);
    console.log(id);
    window.location.reload(false);
  };
  const imageUrl =
    "https://www.pngitem.com/pimgs/m/273-2730229_transparent-person-icon-png-transparent-administration-icon-png.png";

  return (
    <li className="li">
      <div className="list-container">
        <p className="list-img">
          <img src={imageUrl} alt="image" height={80} width={80} />

          <span className="span">
            <span>Name :{' '}{Name} </span>
             <span className="span2">Phone: {Phone}</span>{" "}
              <span>D-O-B:{" "}{Dob}</span>

          </span>
        </p>

        <p className="email">
          <span>Email: {Email}</span>
          <span className="pwd">password:{Password}</span>
        </p>
        
        <button className="buttons" type="button" onClick={onClickDel}>
          Delete <DeleteForeverIcon/>
        </button>
      </div>
    </li>
  );
};

//  AgentList ;


  const List = () => {

 const deleteUser = (id) => {
     const array = JSON.parse(localStorage.getItem("data"));
  
      const updatedArray = array.filter((item) => item.id !== id);
     localStorage.setItem("data", JSON.stringify(updatedArray));
      
     };
    const array = JSON.parse(localStorage.getItem("data"));
  
    return (
      <div className="agentItem-container">
        <ul className="ul">
          <h1 className="agent-heading"> List Of Agent</h1>
          {array &&
            array.map((item) => (
              <AgentList key={item.id} user={item} 
             deleteUser={deleteUser}
               />
            ))}
        </ul>
      </div>
    );
  };
 
  export default List;
  
   