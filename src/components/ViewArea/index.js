import { useState } from "react";
import Header from "../Header";
import List from "../ListOfAgent";
import { v4 } from "uuid";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//toast.configure()

const ViewArea = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterpwd, setReEnteredPwd] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [add, setAdd] = useState("");
  const [img, setImg] = useState('');

  

  
  
  const AgentCreateHandler = (e) => {
    e.preventDefault();
    if(add ==='' || name === ''|| email === ''|| password === ''||phone === ''|| dob==='') {
      toast("Please fill all the forms");
    }
   else if (
      name === name ||
      password === reEnterpwd ||
      email !== "" ||
      password !== "" ||
      reEnterpwd !== "" ||
      dob !== "" ||
      phone !== "" ||
      add !== "" ||
      img !== ""
    ) {
      let data = {
        id: v4(),
        Email: email,
        Name: name,
        Password: password,
        Dob: dob,
        Phone: phone,
        Address: add,
        Image: img,
      };
      let formData = JSON.parse(localStorage.getItem("data")) || [];
      formData.push(data);
      localStorage.setItem("data", JSON.stringify(formData));
     
      
     
      //localStorage.clear();
      setName(""); 
      setAdd("");
      setImg("");
      setDob("");
      setEmail("");
      setPassword("");
      setPhone("");
      setReEnteredPwd("");
      toast("New Agent Added successfully");
      // setImg("");
      //const image=localStorage.setItem('img',img)
    } 
    else {
      toast('not moved')
    }
  };

  // const GetBase = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.onload = resolve(reader.result);
  //     reader.onabort = (error) => reject(error);
  //     reader.readAsDataURL(file);
  //   });
  // };
  // const handleImg = (e) => {
  //   const file = e.target.files[0];
  //   GetBase(file).then((base) => {
  //     localStorage["img"] = base;
  //     console.debug("file loaded", base);
  //   });
  // };

  return (
    <>
      {/* <Header /> */}
      <ToastContainer
  position="top-right"
  autoClose={2000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"
  />

      <div className="header-container">
      <div className="home-login-container">
      <Link className="link" to="#">
          <p className="sprit"> 
          <img className="logos" src='https://media.licdn.com/dms/image/C510BAQFEpFHWZMVDRA/company-logo_200_200/0/1519893946434?e=2147483647&v=beta&t=nlkQL8i_V1Ke4BdGUjDndBsRSmzTmPCZ0-N7VKfH6lE' alt='logo'/>
          Ticket Booking
           </p>
          
        </Link>
        <Link className="link" to="/">
          <p className="text">Home <HomeIcon/> </p>
     
        </Link>
        
        <Link className="link" to="/login">
          <p className="text">Login <LoginIcon/></p>
        </Link>
      </div>
    </div>
      <div className="admin-container">
        <form className="form-container" onSubmit={AgentCreateHandler}>
          <h1>Add New Agents</h1>
          <input
            className="input"
            placeholder="Enter Your Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input"
            placeholder="Enter Valid Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input"
            type="text"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <input
            className="input"
            type="password"
            value={reEnterpwd}
            placeholder="re-enter password"
            onChange={(e) => setReEnteredPwd(e.target.value)}
          />
          */}
           <input
            className="input"
            type="date"
            value={dob}
            placeholder="enter DOB"
            onChange={(e) => setDob(e.target.value)}
          />
          <input
            className="input"
            type="text"
            value={phone}
            placeholder="Enter Phone number"
            onChange={(e) => setPhone(e.target.value)}
          />
          {/* <input
            className="input"
            type="file"
            value={img}
            placeholder="enter Image"
            onChange={(e)=>setImg(e.target.value)}
            ///  onClick={uploadImage}
          /> */}
          <input
            className="input"
            type="text"
            value={add}
            placeholder="Enter Address"
            onChange={(e) => setAdd(e.target.value)}
          />
          <button className="btns" type="submit" >
         <span> Add Agent </span>  
          </button>
        <span className="bhr"></span>

        </form>
 
 <span className="hr"></span>

        <List />
      </div>
    </>
  );
};

export default ViewArea;
