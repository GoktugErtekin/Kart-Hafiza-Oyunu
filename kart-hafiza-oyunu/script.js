const semboller = ["🕷️","🪔","🎖️","🌟", "🎉", "🍕", "🚀", "🎲", "🍦", "🍉", "🍭"];
let kartlar = semboller.concat(semboller);
let eslesme = [];
let hamleSayisi = 0;

function kartlariKaristir() {
  for (let i = kartlar.length - 1; i > 0; i--) {
    const rastgeleIndex = Math.floor(Math.random() * (i + 1));
    [kartlar[i], kartlar[rastgeleIndex]] = [kartlar[rastgeleIndex], kartlar[i]];
  }
}

function kartlariOlustur() {
  const kartTahtasi = document.getElementById("kartTahtasi");
  kartlar.forEach((sembol, index) => {
    const kart = document.createElement("li");
    kart.className = "kart";
    kart.textContent = "?";
    kart.addEventListener("click", () => kartiAc(kart, index));
    kartTahtasi.appendChild(kart);
  });
}

function kartiAc(kart, index) {
  if (eslesme.length < 2 && !eslesme.includes(index)) {
    kart.textContent = kartlar[index];
    eslesme.push(index);

    if (eslesme.length === 2) {
      setTimeout(() => kartlariKapat(), 1000);
    }
  }
}

function kartlariKapat() {
  const [index1, index2] = eslesme;
  const kart1 = document.getElementsByClassName("kart")[index1];
  const kart2 = document.getElementsByClassName("kart")[index2];

  if (kartlar[index1] === kartlar[index2]) {
    kart1.removeEventListener("click", () => kartiAc(kart1, index1));
    kart2.removeEventListener("click", () => kartiAc(kart2, index2));
  } else {
    kart1.textContent = "?";
    kart2.textContent = "?";
  }

  eslesme = [];
  hamleSayisi++;
  // Oyunun tamamlandığı kontrolü burada yapılabilir.
}

function baslat() {
  kartlariKaristir();
  kartlariOlustur();
}

baslat();
