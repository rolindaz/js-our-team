const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
  }
];


/*
CONSEGNA:

Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
(trovate l’array del team all’interno della cartella in allegato)
*/


/*

RAGIONAMENTO:

la consegna vuole che io rappresenti visivamente in pagina un elenco di oggetti e alcune loro proprietà tramite colonne e card.
per fare questo ho bisogno di:
- individuare il nodo della DOM in cui inserire il mio markup
- ciclare l'array per isolare i singoli oggetti (cioè i membri del team)
- estrapolare le proprietà che mi interessando da ciascun oggetto tramite il destructuring per generare delle variabili
- creare una variabile con un template literal in cui riporto il markup HTML con cui voglio rappresentare i miei oggetti e le loro proprietà, che riporterò con l'interpolazione
- sempre nell'ambito del ciclo for, appendere il markup generato al nodo della DOM che ho precedentemente individuato

QUAL E' IL BENEFICIO DI TUTTO CI0'?

Per esempio che in un'azienda grande con tanti dipendenti basta modificare il dataset di partenza (l'array) per continuare ad avere una pagina perfetta senza intaccare HTML e CSS - geniale!

*/

// ESECUZIONE:

// - individuare il nodo della DOM in cui inserire il mio markup

let rowEl = document.querySelector('.row');

// - ciclare l'array per isolare i singoli oggetti (cioè i membri del team)

for (let i = 0; i < teamMembers.length; i++) {
  const thisMember = teamMembers[i];
  // - estrapolare le proprietà che mi interessando da ciascun oggetto tramite il destructuring per generare delle variabili
  const {name, role, email, img} = thisMember;
  // - creare una variabile con un template literal in cui riporto il markup HTML con cui voglio rappresentare i miei oggetti e le loro proprietà, che riporterò con l'interpolazione delle variabili corrispondenti appena create
  const memberMarkup = `
    <div class="col">
      <div class="card text-bg-dark d-flex flex-row border-0 rounded-0 mb-4">
        <div>
          <img src="${img}" alt="">
        </div>
        <div class="p-2">
          <div class="text-uppercase fw-bold">${name}</div>
          <div>${role}</div>
          <div><a href="" class="text-decoration-none">${email}</a></div>
        </div>
      </div>
    </div>
  `;
  // sempre nell'ambito del ciclo for, appendere il markup generato al nodo della DOM che ho precedentemente individuato
  rowEl.insertAdjacentHTML("beforeend", memberMarkup);
};