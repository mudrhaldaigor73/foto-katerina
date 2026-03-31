import { useForm } from 'react-hook-form';
import styles from './Forms.module.css';

interface BookingFormData {
    name: string;
    email: string;
    phone: string;
    type: string;
    date: string;
    message: string;
}

export default function BookingForm() {
    const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<BookingFormData>();

    const onSubmit = async (data: BookingFormData) => {
        await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                access_key: 'c3a99a9a-28ba-4ed4-a45a-7c92c41f5a9b',
                subject: 'Nová žádost o rezervaci',
                ...data,
            }),
        });
    };

    if (isSubmitSuccessful) {
        return (
            <div className={styles.successMessage}>
                <h3>Děkuji za rezervaci!</h3>
                <p>Brzy se vám ozvu pro potvrzení termínu a další detaily.</p>
            </div>
        );
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.grid}>
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
                    <label htmlFor="phone" className={styles.label}>Telefon</label>
                    <input
                        id="phone"
                        type="tel"
                        className={styles.input}
                        {...register('phone')}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="date" className={styles.label}>Preferovaný termín</label>
                    <input
                        id="date"
                        type="date"
                        className={styles.input}
                        {...register('date')}
                    />
                </div>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="type" className={styles.label}>Typ focení</label>
                <select
                    id="type"
                    className={`${styles.select} ${errors.type ? styles.inputError : ''}`}
                    {...register('type', { required: 'Zvolte typ focení' })}
                >
                    <option value="">Vyberte možnost...</option>
                    <option value="newborn">Novorozenci</option>
                    <option value="maternity">Těhotenství</option>
                    <option value="wedding">Svatba</option>
                    <option value="portrait">Portrét / Rodina</option>
                    <option value="other">Jiné</option>
                </select>
                {errors.type && <span className={styles.error}>{errors.type.message}</span>}
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Zpráva (představa o focení, nápady, dotazy)</label>
                <textarea
                    id="message"
                    rows={5}
                    className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                    {...register('message', { required: 'Zpráva nemůže být prázdná' })}
                ></textarea>
                {errors.message && <span className={styles.error}>{errors.message.message}</span>}
            </div>

            <button type="submit" className={`btn ${styles.submitBtn}`} disabled={isSubmitting}>
                {isSubmitting ? 'Odesílám...' : 'Odeslat žádost o rezervaci'}
            </button>
        </form>
    );
}
