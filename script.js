const form = document.getElementById('calc-form');
const vysledek = document.getElementById('vysledek');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const dluhy = parseFloat(document.getElementById('dluhy').value);
    const prijem = parseFloat(document.getElementById('prijem').value);
    const pocet = parseInt(document.getElementById('pocet').value);

    if (isNaN(dluhy) || isNaN(prijem) || isNaN(pocet)) {
        vysledek.textContent = 'Vyplňte prosím všechna pole správně.';
        return;
    }

    const splatka = (dluhy / 60).toFixed(0); // rozpočítáme na 5 let (60 měsíců)
    vysledek.textContent = `Vaše orientační měsíční splátka by byla přibližně ${splatka} Kč.`;
});
