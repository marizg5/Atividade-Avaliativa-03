let originalRA = []; // RA original imutável

function Mostrar() {
  
const RA = document.getElementById("inputRA").value.trim();

if (RA.length === 0) {
    alert("Erro: Digite o seu RA!");
    return;
}

// Aceita apenas 1135194 ou 0001135194
if (RA !== "1135194" && RA !== "0001135194") {
    alert("RA inválido! Digite corretamente o seu RA: 1135194 ou 0001135194");
    return;
}

// Converter para array de números
originalRA = RA.replace(/^0+/, "").split("").map(Number);


  // Função para gerar uma cópia do RA antes de cada exercício
  const copyRA = () => [...originalRA];

  // ======================================================
  // ==================== EXERCÍCIOS =======================
  // ======================================================

  // ---------- Exe01 ----------
  function Exe01() {
    let ra_number = copyRA();
    let total = 0;

    for (let i = 1; i < ra_number.length; i += 2) {
      total += ra_number[i];
    }

    return total + 11;
  }
  document.getElementById('resultExe01').textContent = 'Exercício 01: ' + Exe01();



  // ---------- Exe02 ----------
  function Exe02() {
    let ra_number = copyRA();
    let total = 0;

    for (let i = ra_number[0]; i < ra_number.length; i++) {
      if (ra_number[i] % 2 === 0) {
        total += ra_number[i];
      } else {
        total -= ra_number[i];
      }
    }

    return 100 + total;
  }
  document.getElementById('resultExe02').textContent = 'Exercício 02: ' + Exe02();



  // ---------- Exe03 (modifica RA, por isso usa cópia) ----------
  function Exe03() {
    let ra_number = copyRA();
    let total = 0;

    for (let i = 1; i < ra_number.length; i += 2) {
      ra_number[i] += ra_number[i];
      ra_number[i] -= 8;
    }

    for (let i = 1; i < ra_number.length; i += 2) {
      total += ra_number[i];
    }

    return total + ra_number.length;
  }
  document.getElementById('resultExe03').textContent = 'Exercício 03: ' + Exe03();



  // ---------- Exe04 ----------
  function Exe04() {
    let ra_number = copyRA();
    const p = 'importante';
    let total = 0;

    for (let i = 0; i < p.length; i++) {
      if (p[ra_number[6]] === p[i]) {
        total++;
      }
    }

    return p[ra_number[6]] + ': ' + total;
  }
  document.getElementById('resultExe04').textContent = 'Exercício 04: ' + Exe04();



  // ---------- Exe05 ----------
  function Exe05() {
    let ra_number = copyRA();
    const palavra = 'interpreta';
    let out = '';

    for (let i = 0; i < ra_number.length; i++) {
      out += palavra[ra_number[i]];
    }

    return out;
  }
  document.getElementById('resultExe05').textContent = 'Exercício 05: ' + Exe05();



  // ---------- Exe06 ----------
  function Exe06(x, y) {
    let total = 0;

    for (let i = x; i <= y; i++) {
      total++;
    }
    return total - x;
  }
  document.getElementById('resultExe06').textContent = 'Exercício 06: ' + Exe06(originalRA[2], originalRA[5]);



  // ---------- Exe07 (modifica RA, por isso usa cópia) ----------
  function Exe07(x, y) {
    let ra_number = copyRA();
    let m = 0;
    let c = ra_number[x];

    for (let i = 0; i < y; i++) {
      for (let j = 0; j < ra_number.length; j++) {
        ra_number[j] -= c;
      }
    }

    for (let i = 1; i < ra_number.length - 1; i++) {
      if (ra_number[i] < ra_number[m]) {
        m = i;
      }
    }

    return ra_number[m];
  }
  document.getElementById('resultExe07').textContent = 'Exercício 07: ' + Exe07(3, 8);



  // ---------- Exe08 ----------
  function Exe08() {
    let ra_number = copyRA();
    let total = 0;

    for (let i = 0; i < ra_number.length; i++) {
      total = i;
    }

    return (total + 1) * ra_number[total];
  }
  document.getElementById('resultExe08').textContent = 'Exercício 08: ' + Exe08();

  // ----------- limpar campo de texto ----------
  document.getElementById("inputRA").value = "";
}
