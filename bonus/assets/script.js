// LOGICA DALL'ESERCIZIO BASE

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

let rowEl = document.querySelector('.row');
for (let i = 0; i < teamMembers.length; i++) {
  const thisMember = teamMembers[i];
  const {name, role, email, img} = thisMember;
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
  rowEl.insertAdjacentHTML("beforeend", memberMarkup);
};

/*
CONSEGNA BONUS:
aggiungere un form di aggiunta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team!)
*/

