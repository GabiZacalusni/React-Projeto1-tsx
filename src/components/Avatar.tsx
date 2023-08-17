import styles from "../components/Avatar.module.css";
import { ImgHTMLAttributes } from "react";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
  hasBorder?: boolean;
  
}

export function Avatar(props:AvatarProps){
  return(
   
    <img className={props.hasBorder ? styles.avatarWithBorder : styles.avatar} {...props}></img>
  );
}