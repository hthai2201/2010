// Tạo các hạt trắng bay lên từ dưới lên
function randomBetween(a, b) {
  return Math.random() * (b - a) + a;
}
function createParticles() {
  const particlesContainer = document.querySelector(".particles");
  const numParticles = 40;
  for (let i = 0; i < numParticles; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    // Vị trí ngang ngẫu nhiên
    p.style.left = randomBetween(0, 100) + "vw";
    // Kích thước ngẫu nhiên
    const size = randomBetween(0.5, 1.5);
    p.style.width = size + "vmin";
    p.style.height = size + "vmin";
    // Thời gian và độ trễ ngẫu nhiên
    const duration = randomBetween(3, 7);
    const delay = randomBetween(0, 5);
    p.style.animationDuration = duration + "s";
    p.style.animationDelay = delay + "s";
    // Độ mờ ngẫu nhiên
    p.style.opacity = randomBetween(0.4, 0.9);
    particlesContainer.appendChild(p);
  }
}
createParticles();
document.body.classList.remove("not-loaded");
// Nút dành cho em: khi nhấn, phát nhạc và hiển thị nội dung
document.getElementById("btn-para-ti").onclick = function () {
  var audio = document.getElementById("audio-para-ti");
  audio.currentTime = 0;
  audio.play();
  // Ẩn màn hình đầu và hiển thị nội dung chính
  document.getElementById("pantalla-inicial").style.display = "none";
  document.getElementById("contenido-principal").style.display = "";
  // Đợi hoàn thành hoạt ảnh tulip (~2.5s)
  setTimeout(function () {
    document.querySelector(".ramo").classList.add("ramo--visible");
    document
      .querySelector(".letter-on-bouquet")
      .classList.add("letter-on-bouquet--visible");
  }, 2500);
};

// Letter Modal Functions
function openLetterModal() {
  const modal = document.getElementById("letterModal");
  modal.classList.add("show");

  // Add floating icons with random positions and delays
  const floatingIcons = modal.querySelectorAll(".floating-icon");
  floatingIcons.forEach((icon, index) => {
    icon.style.left = Math.random() * 80 + 10 + "%";
    icon.style.animationDelay = Math.random() * 2 + "s";
  });

  // Auto-close modal after 10 seconds
  setTimeout(() => {
    closeLetterModal();
  }, 12000);
}

function closeLetterModal() {
  const modal = document.getElementById("letterModal");
  modal.classList.remove("show");
}

// Close modal when clicking outside the content
document.getElementById("letterModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeLetterModal();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeLetterModal();
  }
});

// Flower message system
const flowerMessages = [
  "Chúc em một ngày mới thật tươi đẹp.",
  "Cười lên nhé! Hôm nay là một ngày tuyệt vời!",
  "Gửi đến em 1 cái ôm thật ấm áp.",
  "Em là người đặc biệt và đáng yêu lắm đấy.",
  "Chúc em luôn mai mắn và thành công",
  "Cảm ơn em vì đã luôn là chính mình ❤️",
];

let currentMessageTimeout;
let messageSequenceTimeouts = [];

function showFlowerMessage(flowerNumber) {
  const messageElement = document.getElementById("flowerMessage");

  // Clear any existing timeouts
  if (currentMessageTimeout) {
    clearTimeout(currentMessageTimeout);
  }
  messageSequenceTimeouts.forEach((timeout) => clearTimeout(timeout));
  messageSequenceTimeouts = [];

  // Start sequence from first message
  setTimeout(() => {
    showMessageSequence(0);
  }, 500);
}

function showMessageSequence(messageIndex) {
  const messageElement = document.getElementById("flowerMessage");

  if (messageIndex < flowerMessages.length) {
    // Show current message
    messageElement.textContent = flowerMessages[messageIndex];
    messageElement.style.animation = "messageAppear 0.8s ease forwards";

    // Hide message after 3 seconds
    const hideTimeout = setTimeout(() => {
      messageElement.style.animation = "messageDisappear 0.8s ease forwards";

      // Show next message after hide animation (if there is one)
      if (messageIndex + 1 < flowerMessages.length) {
        const nextTimeout = setTimeout(() => {
          showMessageSequence(messageIndex + 1);
        }, 800); // Wait for hide animation to complete
        messageSequenceTimeouts.push(nextTimeout);
      }
    }, 3000);

    messageSequenceTimeouts.push(hideTimeout);
  }
}
