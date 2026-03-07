import { useForm } from 'react-hook-form';
import styles from './Forms.module.css';

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<ContactFormData>();

    const onSubmit = async (data: ContactFormData) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log(data);
    };

    if (isSubmitSuccessful) {
        return (
            <div className={styles.successMessage}>
                <h3>Děkuji za zprávu!</h3>
                <p>Ozvu se vám co nejdříve.</p>
            </div>
        );
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Jméno a příjmení</label>
                <input
                    id="name"
                    type="text"
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    {...register('name', { required: 'Jméno je povinné' })}
                />
                {errors.name && <span className={styles.error}>{errors.name.message}</span>}
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>E-mail</label>
                <input
                    id="email"
                    type="email"
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    {...register('email', {
                        required: 'E-mail je povinný',
                        pattern: { value: /^\S+@\S+$/i, message: 'Neplatný e-mail' }
                    })}
                />
                {errors.email && <span className={styles.error}>{errors.email.message}</span>}
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Zpráva</label>
                <textarea
                    id="message"
                    rows={5}
                    className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                    {...register('message', { required: 'Zpráva nemůže být prázdná' })}
                ></textarea>
                {errors.message && <span className={styles.error}>{errors.message.message}</span>}
            </div>

            <button type="submit" className={`btn ${styles.submitBtn}`} disabled={isSubmitting}>
                {isSubmitting ? 'Odesílám...' : 'Odeslat zprávu'}
            </button>
        </form>
    );
}
