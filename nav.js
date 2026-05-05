/* Génère la barre de navigation commune */
function renderNav(activePage) {
  const pages = [
    { id:'accueil',    label:'🏠 Accueil',       href:'index.html' },
    { id:'connexion',  label:'🔐 Connexion',      href:'connexion.html' },
    { id:'inscription',label:'📝 Inscription',    href:'inscription.html' },
    { id:'medecins',   label:'👨‍⚕️ Médecins',       href:'medecins.html' },
    { id:'rdv',        label:'📅 Prendre RDV',    href:'rdv.html' },
    { id:'mes-rdv',    label:'📋 Mes RDV',        href:'mes_rdv.html' },
    { id:'medecin',    label:'🩺 Espace Médecin', href:'espace_medecin.html' },
    { id:'admin',      label:'⚙️ Admin',           href:'admin.html' },
  ];
  const links = pages.map(p =>
    `<a href="${p.href}" class="nav-btn${p.id===activePage?' active':''}" data-page="${p.id}">${p.label}</a>`
  ).join('');
  document.getElementById('nav-placeholder').innerHTML =
    `<nav><a href="index.html" class="logo">🩺 Medi<span>Rendez</span></a><div class="nav-links">${links}</div></nav>`;
}
