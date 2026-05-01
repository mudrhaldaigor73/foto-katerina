import { Helmet } from 'react-helmet-async';
import BookingForm from '../components/forms/BookingForm';

export default function Booking() {
    return (
        <div className="animate-fade-in">
            <Helmet>
                <title>Rezervace termínu | Foto Kateřina – fotím novorozence, rodiny, svatby</title>
                <meta name="description" content="Rezervujte termín novorozeneckého, těhotenského, rodinného nebo svatebního focení. Vyplňte formulář – ozvu se do 48 hodin." />
            </Helmet>
            <section className="section" style={{ backgroundColor: 'var(--color-primary-light)' }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <h1>Rezervace termínu</h1>
                    <p style={{ color: 'var(--color-text-light)', marginTop: '1rem' }}>
                        Těším se, až společně vytvoříme něco krásného. Vyplňte prosím rezervační formulář a já se vám ozvu s možnostmi termínů a dalšími detaily.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <BookingForm />
                </div>
            </section>

            <section className="section" style={{ borderTop: '1px solid rgba(0,0,0,0.05)', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '600px' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Co se stane po odeslání?</h2>
                    <p style={{ color: 'var(--color-text-light)', marginBottom: '2rem' }}>
                        Do 48 hodin se vám ozvu na zadaný e-mail. Společně vyladíme detaily focení, lokaci a oblečení tak, aby výsledek přesně odpovídal vaší představě.
                    </p>
                </div>
            </section>
        </div>
    );
}
