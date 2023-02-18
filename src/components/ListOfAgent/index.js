import "./index.css";
import AgentList from "../AgentList";


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
  