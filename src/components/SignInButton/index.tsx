import { FaGithub } from "react-icons/fa";
import styles from "./styles.module.scss";
import { signIn, signOut, useSession } from "next-auth/client";
import { FiX } from "react-icons/fi";

export function SignInButton() {
  const [session] = useSession();

  return session ? (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signOut()}
    >
      <FaGithub color="var(--green-500)" />
      {session.user.name}
      <FiX color="var(--gray-200)" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signIn("github")}
    >
      <FaGithub color="var(--yellow-500)" />
      Sign in with Github
    </button>
  );
}
