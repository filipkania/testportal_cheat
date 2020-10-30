
export default () => {
    window.document.hasFocus = () => true;
    window.onerror = () => true;
    
    setTimeout(() => {
        try {
            let b = document.querySelector('a.mdc-button.mdc-button--outlined');
            b.setAttribute('onclick', 'submitForm(\'questionForm\');');
        } catch(err) {}
    }, 500);
};