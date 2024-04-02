
    // const input = document.getElementById('button');
    
    // input.addEventListener('click', function(event){
    //     console.log(event.type);
    // })

const input = document.getElementById('button');
function addingEventListener() {
  input.addEventListener('click', handleClick);
}

function handleClick() {
  // handle the click event
  console.log('clicked');
}