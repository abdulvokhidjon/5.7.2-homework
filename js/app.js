document.getElementById('angleRange').addEventListener('input', function() {
    document.getElementById('angleValue').textContent = this.value;
});

function setGradient() {
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const angle = document.getElementById('angleRange').value;
    document.body.style.background = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
}