const bd = {
    y: 2009,
    m: 8,
    d: 8
};

function genAge() {
    const today = new Date();
    let age = today.getFullYear() - bd.y;
    const m = today.getMonth() + 1;
    const d = today.getDate();
    if (m < bd.m || (m === bd.m && d < bd.d)) {
        age--;
    }
    console.log(`Generated Age: ${age}`);
    return age;
}

document.addEventListener('DOMContentLoaded', () => {
    const ageTarget = document.getElementById('age');
    if (ageTarget) {
        ageTarget.textContent = genAge();
    }
});