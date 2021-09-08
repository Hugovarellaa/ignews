import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.heeaderContent}>
        <img src="/images/logo.svg" alt="Ig.news" />
        <nav>
          <a>Home</a>
          <a>Posts</a>
        </nav>
      </div>
    </header>
  );
}
