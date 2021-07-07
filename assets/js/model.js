    const modelElement = $('#model');
    const closeElements = $$('.model-close');
    for (let index = 0; index < closeElements.length; index++) {
        closeElements[index].onclick = () =>{
            modelElement.style.display = 'none';
        }
    }