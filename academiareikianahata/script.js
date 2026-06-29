const targetDate = new Date("2026-07-22T09:00:00-05:00");
const daysLeft = document.querySelector("#daysLeft");

function updateCountdown() {
  const now = new Date();
  const milliseconds = targetDate.getTime() - now.getTime();
  const days = Math.max(0, Math.ceil(milliseconds / 86400000));
  daysLeft.textContent = String(days);
}

updateCountdown();
setInterval(updateCountdown, 60000);
