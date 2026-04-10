const form = document.getElementById('kontakt-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();  // zatrzymaj domyślne wysłanie formularza

    // pobierz wartości pól
    const email = document.getElementById('email').value.trim();
    const temat = document.getElementById('temat').value;
    const wiadomosc = document.getElementById('wiadomosc').value.trim();

    // wyczyść poprzednie błędy
    document.getElementById('email-error').textContent = '';

    // walidacja
    let jestBład = false;

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '') {
        document.getElementById('email-error').textContent = 'Podaj adres e-mail.';
        jestBład = true;
    } else if (!regexEmail.test(email)) {
        document.getElementById('email-error').textContent = 'Nieprawidłowy format e-mail.';
        jestBład = true;
    }

    // jeśli brak błędów — "wyślij"
    if (!jestBład) {
        form.style.display = 'none';
        document.getElementById('sukces').style.display = 'block';
    }
});