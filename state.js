/* ══ STATE GLOBAL ══ 
   Stocké dans sessionStorage pour persister entre pages
*/

const MEDECINS = [
  { id:1, init:'SB', nom:'Sarah Ben Ammar', spec:'Médecine générale', cab:'Cabinet Central, Tunis',    dispo:'Disponible aujourd\'hui' },
  { id:2, init:'KM', nom:'Karim Mansouri',   spec:'Cardiologie',       cab:'Clinique du Cœur, Tunis',  dispo:'Prochain créneau : lundi' },
  { id:3, init:'LT', nom:'Leila Trabelsi',   spec:'Dermatologie',      cab:'Centre Derma, Sfax',       dispo:'Disponible demain' },
  { id:4, init:'OB', nom:'Omar Belhadj',     spec:'Pédiatrie',         cab:'Clinique Enfants, Sousse', dispo:'Disponible aujourd\'hui' },
  { id:5, init:'IK', nom:'Ines Khelifi',     spec:'Ophtalmologie',     cab:'Cabinet Vision, Tunis',    dispo:'Disponible mercredi' },
  { id:6, init:'HC', nom:'Hedi Chaabane',    spec:'Médecine générale', cab:'Cabinet Nord, Tunis',      dispo:'Prochain créneau : mardi' },
];

const MOIS_COURT = ['jan','fév','mar','avr','mai','jun','jul','aoû','sep','oct','nov','déc'];
const MOIS_LONG  = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
const HEURES     = ['08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','14:00','14:30','15:00','15:30'];
const PRIS_IDX   = [1, 3, 7, 9]; // indices des créneaux occupés

/* ─── helpers sessionStorage ─── */
function getState() {
  try { return JSON.parse(sessionStorage.getItem('mediState') || '{}'); } catch(e){ return {}; }
}
function setState(obj) {
  const cur = getState();
  sessionStorage.setItem('mediState', JSON.stringify({...cur, ...obj}));
}
function getMedecin(id) { return MEDECINS.find(m => m.id === Number(id)); }

/* ─── toast ─── */
let _tid;
function showToast(msg, type='') {
  const el = document.getElementById('toast');
  if(!el) return;
  el.textContent = msg;
  el.className = 'toast show' + (type?' '+type:'');
  clearTimeout(_tid);
  _tid = setTimeout(()=>{ el.classList.remove('show'); }, 3200);
}

/* ─── nav active ─── */
function setNavActive(pageId) {
  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.page === pageId);
  });
}
