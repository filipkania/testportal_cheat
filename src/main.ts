import onload from './onload';

var elt = document.createElement("script");
elt.innerHTML = `(${onload})();`;
document.head.appendChild(elt);