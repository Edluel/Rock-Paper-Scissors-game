function toggleRules() {
    const rules = document.querySelector('.rules');
    rules.style.display === 'none' ? rules.style.display = 'block' : rules.style.display = 'none';
}
  
function choice(choice) {
    const userchoice = choice;
    document.querySelector('.choice').style.display = 'none';
    document.querySelector('.load').style.display = 'flex';

}
