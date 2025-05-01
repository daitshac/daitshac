function showSection(id) {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        if (section.id !== id) {
            section.classList.remove('visible');
            setTimeout(() => {
                section.classList.remove('active');
                section.style.display = 'none';
            }, 500); // wait for fade-out
        }
    });

    const selected = document.getElementById(id);
    selected.style.display = 'block';

    // Give time for display:block to apply
    setTimeout(() => {
        selected.classList.add('active');
        setTimeout(() => selected.classList.add('visible'), 10);
    }, 10);
}
