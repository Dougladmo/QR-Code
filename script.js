const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#btn")
const loader = document.querySelector("#load")

const qrCodeInput = document.querySelector("#qr-text")
const qrCodeImg = document.querySelector("#qr-code img")

// Eventos
function generateQrCode() {
  const qrCodeInputValue = qrCodeInput.value

  if (!qrCodeInputValue) {
    window.alert('O Campo "Digite a URL ou Texto" deve ser preenchido')
    return
  }

  qrCodeBtn.innerHTML = "Gerando QR Code..."

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

  qrCodeImg.addEventListener("load", () => {
    container.classList.add("active")
    qrCodeBtn.innerHTML = "QR Code Gerado"
  })
}

qrCodeBtn.addEventListener("click", () => {
  generateQrCode()
})
