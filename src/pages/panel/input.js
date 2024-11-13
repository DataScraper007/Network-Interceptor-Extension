//document.addEventListener('DOMContentLoaded', function() {
document.getElementById('downloadBtn').addEventListener('click', function() {
    localStorage.setItem('input_url', document.getElementById('input_url').value);
});
//});