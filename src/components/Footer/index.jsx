import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <div className={styles.footerContainer}>
                <a className={styles.linkItem}  target='_blanket' href="https://github.com/MVWerly">
                        <i className={`${styles.iconItem} bi bi-github`}></i>
                </a>
                <p className={styles.description}>
                    &copy; Desenvolvido por || Marcus Vinicus Lopes Werly ||
                </p>
                <p className={styles.description}>
                    Página desenvolvida para estudos
                </p>
            </div>
        </footer>
    )
}

export default Footer