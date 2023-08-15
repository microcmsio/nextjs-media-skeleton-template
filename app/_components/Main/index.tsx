import styles from './index.module.css';

export default function Main({ children }: { children: React.ReactNode }) {
  return <main className={styles.main}>{children}</main>;
}
