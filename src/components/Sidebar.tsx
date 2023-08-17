import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";
import {PencilLine} from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} 
       src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40" />
      
      <div className={styles.profile}>
        <Avatar hasBorder src="https://github.com/GabiZacalusni.png"/>
        <strong>Gabriela Z. Freitas</strong>
        <span>Web Developer</span>

      </div>
      <footer>
        
        <a href="#">
        <PencilLine size={20}/> Editar seu perfil</a>
      </footer>
    </aside>
  );
}