
import styles from "./Sidebar.module.css"
import { color, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../context/accContext";
import Docs from "../Pages/docs/page";
const Sidebar = () => {
  const ctx = useContext(userContext);
  const setHistoryFlag = ctx.sharedData.setHistoryFlag;
  const setApiFlag = ctx.sharedData.setApiFlag;
  const setDocsFlag  = ctx.sharedData.setDocsFlag;
  const historyFlag = ctx.sharedData.HistoryFlag;
  const ApiFlag = ctx.sharedData.ApiFlag;
  const DocsFlag  = ctx.sharedData.DocsFlag;
 
 
  return (
    <div >
      
   
      <div className={styles.sidebar}
      >



        
          <div className = {styles.button}>

            <div> Api</div>
          </div>
          <Link to ="/history">  
        <div className = {styles.button}>

<div   >
history
</div>
</div>
</Link> 
<Link to= "/docs">
<div className = {styles.button} >

<div >  Docs </div>
</div>
   

    


</Link>
    </div>
   </div>
    
  );
};

export default Sidebar;
