import styles from '/styles/Navbar.module.scss';

export default function Navbar() {

  return (
    <nav className={styles.navbar}>
      <div className={styles.top}><h1>Eojhet</h1></div>
      <div className={styles.bottom}>Links</div>
    </nav>
  )
}