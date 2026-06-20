import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.title}>AGRADECEMOS PELA PRESENÇA!</p>

        <div className={styles.links}>
          <a
            href="https://instagram.com/coletivo_inspira"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Instagram do Coletivo Inspira"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm8.5 1.5h-8.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25Zm-4.25 3.75A4.75 4.75 0 1 1 7.25 12 4.75 4.75 0 0 1 12 7.25Zm0 1.5A3.25 3.25 0 1 0 15.25 12 3.25 3.25 0 0 0 12 8.75Zm4.9-2.12a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z" />
            </svg>
            Instagram
          </a>

          <a
            href="https://chat.whatsapp.com/LHMN8hm8a4ILdZGbatRv7G"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Comunidade no WhatsApp"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
              <path d="M12 2a9.9 9.9 0 0 0-8.61 14.77L2 22l5.37-1.39A10 10 0 1 0 12 2Zm0 18.25a8.2 8.2 0 0 1-4.17-1.13l-.3-.18-3.19.83.85-3.11-.2-.31A8.25 8.25 0 1 1 12 20.25Zm4.53-6.18c-.25-.13-1.49-.73-1.72-.82s-.4-.12-.57.12-.65.82-.8.99-.29.2-.54.07a6.63 6.63 0 0 1-1.95-1.2 7.28 7.28 0 0 1-1.35-1.67c-.14-.25 0-.38.11-.5s.25-.29.38-.43a1.74 1.74 0 0 0 .25-.42.47.47 0 0 0 0-.45c-.06-.12-.57-1.37-.78-1.88s-.41-.43-.57-.43h-.49a.94.94 0 0 0-.68.32 2.84 2.84 0 0 0-.88 2.1 4.91 4.91 0 0 0 1 2.58 11.2 11.2 0 0 0 4.31 3.79 14.52 14.52 0 0 0 1.44.53 3.48 3.48 0 0 0 1.6.1 2.61 2.61 0 0 0 1.71-1.2 2.1 2.1 0 0 0 .15-1.2c-.06-.1-.23-.16-.48-.28Z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
