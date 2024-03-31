function addEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click', function() {
        alert('I was clicked!');
       console.log('I was clicked!');
    });
}
addEventListener('I was clicked!');
