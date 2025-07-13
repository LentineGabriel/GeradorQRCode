// variáveis
const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");

// função p/ gerar o qr code
function generateQrCode() {
  const qrCodeInputValue = qrCodeInput.value; // valor setado no campo input

  // se não houver nenhum link ou texto, então não terá como gerar o QR Code
  if (!qrCodeInputValue) {
    return;
  }

  // mudando o texto dentro do botão
  qrCodeBtn.innerText = "Gerando código...";

  // consumindo a api
  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

  // load p/ suavizar o carregamento e não deixar o código gerando de forma estática
  qrCodeImg.addEventListener("load", () => {
    container.classList.add("active");
    qrCodeBtn.innerText = "Código gerado!";
  });
}

// eventos
qrCodeBtn.addEventListener("click", () => {
  generateQrCode(); // clicar no botão gera o qr code
});

// usando, também, o enter para gerar o qr code
qrCodeInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    generateQrCode();
  }
});

// limpar área do qr code
qrCodeInput.addEventListener("keyup", () => {
  if (!qrCodeInput.value) {
    container.classList.remove("active");
    qrCodeBtn.innerText = "Gerar QR Code";
  }
});
