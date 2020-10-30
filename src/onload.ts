
export default () => {
    window.document.hasFocus = () => true;
    
    setTimeout(() => {
        try {
            let b = document.querySelector('a.mdc-button.mdc-button--outlined');
            b.setAttribute('onclick', 'submitForm(\'questionForm\');');
        } catch(err) {}
        window.onerror = () => true;
    }, 500);
};