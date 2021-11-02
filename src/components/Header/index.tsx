import { useRouter } from "next/router";
import Link from "next/link";
import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";
import { ActiveLink } from "../ActiveLink";

export function Header() {
  const { asPath } = useRouter();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="logo ig.news" />

        <nav>
          <ActiveLink activeClasseName={styles.active} href="/">
            <a className={styles.active}>Home</a>
          </ActiveLink>
          <ActiveLink activeClasseName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
