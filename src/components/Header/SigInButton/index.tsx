import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export function SignInButton() {
  const isLog = true

  return isLog ? (
    <button 
    type="button" 
    className={styles.signInButton}
    >
      <FaGithub color="var(--green-500)"/>
      Hugo Alves Varella
      <FiX color="var(--gray-200)" className={styles.closeIcon}/>
    </button>
  ) : (
    <button 
    type="button" 
    className={styles.signInButton}
    >
      <FaGithub color="var(--yellow-500)"/>
      Sign in with Github
    </button>
  )
}
