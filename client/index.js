/* eslint-disable no-console */
/* global M */

// Incorporando estilos a mi bundle
import './styles/mystyle.css';

/* Inicializando elementos de materializecss */
document.addEventListener('DOMContentLoaded', () => {
  // Inicializando los sideNavas
  // Obteniendo la referencia a la barra de navegacion
  // lateral
  const sideNavs = document.querySelectorAll('.sidenav');
  // eslint-disable-next-line no-undef
  M.Sidenav.init(sideNavs);

  /* Inicializando los dropdown */
  const dropdowns = document.querySelectorAll('.dropdown-tigger');
  M.Dropdown.init(dropdowns);
});
