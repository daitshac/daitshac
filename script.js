function showSection(id) {
    document.querySelectorAll('section').forEach(sec => {
        sec.classList.remove('active', 'visible');
        setTimeout(() => sec.style.display = 'none', 500);
    });

    const selected = document.getElementById(id);
    selected.style.display = 'block';
    setTimeout(() => {
        selected.classList.add('active');
        setTimeout(() => selected.classList.add('visible'), 10);
    }, 10);
}
