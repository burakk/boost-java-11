export function Login() {

    function handleSubmit(e) {
        e.preventDefault();



    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Giriş Formu</h2>
            <label>Epostanız:</label>
            <input type="email" placeholder="e-postanız" />
            <label>Şifreniz:</label>
            <input type="password" placeholder="şifreniz" />

            <button type="submit">Giriş yap</button>
        </form>
    )
}