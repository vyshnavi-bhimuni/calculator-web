const display=document.querySelector('input[name="display"]');
const buttons=document.querySelectorAll('calculator input[type="button"]');
buttons.forEach(buttton=> {
    buttons.addEventListener('click',() => {
        const value=buttons.value;
    if(value==='AC'){
        display.value='';
    } else if(value==='DE') {
        display.value=display.value.slice(0,-1);
    } else if(value==='=') {
        try {
            const expression=display.value.replace(/%/g,'/100');
            display.value=eval(expression);
        } catch(e) {
            display.value='Error';
        }
    } else {
        display.value+=value;
    }
})
});