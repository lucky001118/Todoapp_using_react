import styles from "./header.module.css"
export default function Header(){
    return(
        <div className={styles.header}>
            <h1>My TODO Lits</h1>
        </div>
    );
}