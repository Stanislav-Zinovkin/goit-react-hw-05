import React, {useEffect, useRef} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./GoBackBtn.module.css"
const GoBackBtn = () => {
  const location = useLocation();
  const navigate = useNavigate();

  
  const backLink = useRef(location.state?.from ?? "/movies");
  
  return (
    <button className={styles.goBackBtn} onClick={() => navigate(backLink.current)}>
    ← 
  </button>
  );
};

export default GoBackBtn;
