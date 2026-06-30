const targetDate = new Date("2026-07-22T09:00:00-05:00");
const daysLeft = document.querySelector("#daysLeft");

function updateCountdown() {
  if (!daysLeft) return;

  const now = new Date();
  const milliseconds = targetDate.getTime() - now.getTime();
  const days = Math.max(0, Math.ceil(milliseconds / 86400000));
  daysLeft.textContent = String(days);
}

const chakraProgram = {
  root: {
    kicker: "Chakra raíz",
    title: "Base del Reiki Usui",
    text: "Comienzas construyendo seguridad: historia, principios, ética y fundamentos para sostener una práctica seria.",
    color: "#b9363c",
    glow: "rgba(185, 54, 60, 0.32)",
    energy: "38%",
    items: [
      "Historia y principios del Reiki Usui.",
      "Preparación energética y presencia corporal.",
      "Bases para iniciar tu proceso de certificación."
    ]
  },
  sacral: {
    kicker: "Chakra sacro",
    title: "Autoconocimiento y sensibilidad",
    text: "Aprendes a observar tu mundo emocional para canalizar desde un lugar más claro, sensible y consciente.",
    color: "#e07d32",
    glow: "rgba(224, 125, 50, 0.32)",
    energy: "48%",
    items: [
      "Lectura de sensaciones durante la práctica.",
      "Autoconocimiento aplicado a la sanación.",
      "Ejercicios para soltar tensión y abrir percepción."
    ]
  },
  solar: {
    kicker: "Chakra plexo solar",
    title: "Canalización energética",
    text: "Fortaleces confianza, intención y dirección para aprender a canalizar energía universal en ti y en otros.",
    color: "#d8a626",
    glow: "rgba(235, 190, 69, 0.36)",
    energy: "58%",
    items: [
      "Canalización de energía universal.",
      "Autotratamiento y práctica guiada.",
      "Claridad en intención, postura y enfoque."
    ]
  },
  heart: {
    kicker: "Chakra corazón",
    title: "Práctica guiada",
    text: "En Anahata integras lo aprendido con práctica presencial, escucha, presencia y acompañamiento consciente.",
    color: "#43926a",
    glow: "rgba(67, 146, 106, 0.34)",
    energy: "68%",
    items: [
      "Prácticas presenciales durante la formación.",
      "Acompañamiento para ganar confianza.",
      "Integración desde el corazón y el servicio."
    ]
  },
  throat: {
    kicker: "Chakra garganta",
    title: "Acompañar a otros",
    text: "Desarrollas comunicación, cuidado y contención para orientar sesiones con una presencia clara y respetuosa.",
    color: "#4d9ab5",
    glow: "rgba(77, 154, 181, 0.32)",
    energy: "76%",
    items: [
      "Cómo explicar una sesión de Reiki.",
      "Comunicación consciente con consultantes.",
      "Prácticas para acompañar procesos de otros."
    ]
  },
  thirdEye: {
    kicker: "Chakra tercer ojo",
    title: "Radiestesia y péndulo",
    text: "Profundizas en percepción energética con herramientas prácticas como radiestesia y manejo de péndulo.",
    color: "#4e54a4",
    glow: "rgba(78, 84, 164, 0.32)",
    energy: "86%",
    items: [
      "Técnicas de radiestesia.",
      "Manejo de péndulo en la práctica.",
      "Lectura energética con criterio y cuidado."
    ]
  },
  crown: {
    kicker: "Chakra corona",
    title: "Certificación y comunidad",
    text: "Cierras el proceso con integración, sesiones personalizadas, material de estudio y pertenencia a la comunidad Anahata.",
    color: "#8d5ba4",
    glow: "rgba(141, 91, 164, 0.34)",
    energy: "100%",
    items: [
      "Certificación profesional Reiki Anahata.",
      "2 sesiones personalizadas y material de estudio.",
      "Comunidad, eventos, talleres y apoyo continuo."
    ]
  }
};

function renderChakra(key) {
  const data = chakraProgram[key];
  const explorer = document.querySelector(".chakra-explorer");
  const kicker = document.querySelector("#chakraKicker");
  const title = document.querySelector("#chakraName");
  const text = document.querySelector("#chakraText");
  const list = document.querySelector("#chakraList");
  const meter = document.querySelector("#energyMeter");

  if (!data || !explorer || !kicker || !title || !text || !list || !meter) return;

  explorer.style.setProperty("--active-solid", data.color);
  explorer.style.setProperty("--active-glow", data.glow);
  explorer.dataset.activeChakra = key;
  kicker.textContent = data.kicker;
  title.textContent = data.title;
  text.textContent = data.text;
  list.innerHTML = data.items.map((item) => `<li>${item}</li>`).join("");
  meter.style.width = data.energy;

  document.querySelectorAll(".chakra-point").forEach((button) => {
    const isActive = button.dataset.chakra === key;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

const levelProgram = {
  one: {
    tag: "Fundamento",
    title: "Nivel I: canalizar desde la base",
    text: "Conceptos básicos del Reiki, su historia y la canalización de la energía universal para iniciar una práctica consciente.",
    items: [
      "Historia y principios del Reiki Usui.",
      "Autotratamiento y presencia energética.",
      "Primeras prácticas guiadas."
    ]
  },
  two: {
    tag: "Profundización",
    title: "Nivel II: acompañar procesos",
    text: "Profundización espiritual, filosofía del Reiki y sintonización para acompañar a otros con mayor claridad.",
    items: [
      "Sintonización para trabajar con otros.",
      "Comprensión más profunda de la práctica.",
      "Herramientas para sesiones acompañadas."
    ]
  },
  three: {
    tag: "Integración",
    title: "Nivel III: práctica avanzada",
    text: "Técnicas avanzadas, símbolos sagrados, energía a distancia y trabajo emocional para cerrar la certificación.",
    items: [
      "Símbolos sagrados y práctica avanzada.",
      "Energía a distancia y trabajo emocional.",
      "Integración profesional del camino Reiki."
    ]
  }
};

function renderLevel(key) {
  const data = levelProgram[key];
  const tag = document.querySelector("#levelTag");
  const title = document.querySelector("#levelTitle");
  const text = document.querySelector("#levelText");
  const list = document.querySelector("#levelList");

  if (!data || !tag || !title || !text || !list) return;

  tag.textContent = data.tag;
  title.textContent = data.title;
  text.textContent = data.text;
  list.innerHTML = data.items.map((item) => `<li>${item}</li>`).join("");

  document.querySelectorAll(".level-tab").forEach((button) => {
    const isActive = button.dataset.level === key;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
}

document.querySelectorAll(".chakra-point").forEach((button) => {
  button.addEventListener("click", () => renderChakra(button.dataset.chakra));
});

document.querySelectorAll(".level-tab").forEach((button) => {
  button.addEventListener("click", () => renderLevel(button.dataset.level));
});

updateCountdown();
setInterval(updateCountdown, 60000);
renderChakra("heart");
renderLevel("one");
