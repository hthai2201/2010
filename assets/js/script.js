// Tạo các hạt trắng bay lên từ dưới lên
function randomBetween(a, b) {
  return Math.random() * (b - a) + a;
}

// Detect iOS for performance optimization
function isIOS() {
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  );
}

// Declare global variables
let currentMessageTimeout;
let messageSequenceTimeouts = [];

// Performance monitoring for iOS
function initPerformanceOptimizations() {
  if (isIOS()) {
    // Add iOS-specific optimizations
    document.body.classList.add("ios-optimized");

    // Disable some heavy animations on older iOS devices
    const userAgent = navigator.userAgent;
    const isOldiOS = /OS [5-9]_/.test(userAgent);

    if (isOldiOS) {
      document.body.classList.add("reduce-motion");
    }

    // Optimize scroll performance
    document.body.style.webkitTransform = "translate3d(0,0,0)";
  }
}

function createParticles() {
  const particlesContainer = document.querySelector(".particles");

  // Reduce particles on iOS for better performance
  const numParticles = isIOS() ? 15 : 40;

  for (let i = 0; i < numParticles; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    // Vị trí ngang ngẫu nhiên
    p.style.left = randomBetween(0, 100) + "vw";
    p.style.bottom = "-2vmin";

    if (isIOS()) {
      // Really big particles for iOS
      const size = randomBetween(1, 2);
      p.style.setProperty("width", size + "vmin", "important");
      p.style.setProperty("height", size + "vmin", "important");
    }

    // Slower animation on iOS
    const duration = isIOS() ? randomBetween(6, 12) : randomBetween(3, 7);
    const delay = randomBetween(0, 5);
    p.style.animationDuration = duration + "s";
    p.style.animationDelay = delay + "s";

    // Lower opacity on iOS
    const opacity = isIOS() ? randomBetween(0.3, 0.7) : randomBetween(0.4, 0.9);
    p.style.opacity = opacity;

    // Use transform3d for hardware acceleration
    p.style.transform = "translate3d(0, 0, 0)";
    p.style.willChange = "transform, opacity";

    particlesContainer.appendChild(p);
  }
}

// Initialize performance optimizations first
initPerformanceOptimizations();
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

  // Reset modal display first
  modal.classList.remove("show");
  modal.style.display = "none";

  // Add reset class to stop all animations and reset to initial state
  modal.classList.add("modal-reset");

  // Force a complete reset
  setTimeout(() => {
    modal.style.display = "flex";

    // Small delay to ensure reset is applied, then remove reset class to restart animations
    setTimeout(() => {
      modal.classList.remove("modal-reset");
      modal.classList.add("show");

      // Optimize for iOS - reduce floating icons
      const floatingIcons = modal.querySelectorAll(".floating-icon");
      const iconsToShow = isIOS()
        ? Math.min(3, floatingIcons.length)
        : floatingIcons.length;

      floatingIcons.forEach((icon, index) => {
        if (index < iconsToShow) {
          icon.style.left = Math.random() * 80 + 10 + "%";
          icon.style.animationDelay = Math.random() * 2 + "s";
          icon.style.display = "block";

          // Reset icon animation
          icon.style.animation = "none";
          icon.offsetHeight;
          icon.style.animation = "";

          if (isIOS()) {
            // Slower, less intensive animation on iOS
            icon.style.animationDuration = "8s";
            icon.style.opacity = "0.7";
          }
        } else {
          icon.style.display = "none";
        }
      });

      // Auto-close modal after 12 seconds
      setTimeout(() => {
        closeLetterModal();
      }, 12000);
    }, 50);
  }, 50);
  const floatingIcons = modal.querySelectorAll(".floating-icon");
  const iconsToShow = isIOS()
    ? Math.min(3, floatingIcons.length)
    : floatingIcons.length;

  floatingIcons.forEach((icon, index) => {
    if (index < iconsToShow) {
      icon.style.left = Math.random() * 80 + 10 + "%";
      icon.style.animationDelay = Math.random() * 2 + "s";
      icon.style.display = "block";

      // Reset icon animation
      icon.style.animation = "none";
      icon.offsetHeight;
      icon.style.animation = "";

      if (isIOS()) {
        // Slower, less intensive animation on iOS
        icon.style.animationDuration = "8s";
        icon.style.opacity = "0.7";
      }
    } else {
      icon.style.display = "none";
    }
  });

  // Auto-close modal after 12 seconds
  setTimeout(() => {
    closeLetterModal();
  }, 12000);
}

function closeLetterModal() {
  const modal = document.getElementById("letterModal");
  modal.classList.remove("show");

  // Hide modal after animation completes and reset for next time
  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.add("modal-reset"); // Reset animations for next open
  }, 800);
}

// Close modal when clicking outside the content
function handleModalOutsideClick(e) {
  const modal = document.getElementById("letterModal");
  const letterContent = modal.querySelector(".letter-content");

  // Only close if modal is visible AND click is not inside letter-content
  if (modal.classList.contains("show")) {
    // Check if click is outside the letter content area
    if (!letterContent.contains(e.target) && e.target !== letterContent) {
      console.log("Clicking outside letter content, closing modal...");
      closeLetterModal();
    }
  }
}

// Close modal with Escape key
function handleModalEscapeKey(e) {
  const modal = document.getElementById("letterModal");
  if (e.key === "Escape" && modal.classList.contains("show")) {
    console.log("Escape key pressed, closing modal...");
    closeLetterModal();
  }
}

// Initialize modal event listeners after DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("letterModal");
  if (modal) {
    modal.addEventListener("click", handleModalOutsideClick);
    document.addEventListener("keydown", handleModalEscapeKey);
    console.log("Modal event listeners attached after DOM load");
  } else {
    console.error("Modal not found!");
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

function showFlowerMessage(flowerNumber) {
  const messageElement = document.getElementById("flowerMessage");

  // Clear any existing timeouts to prevent memory leaks
  if (currentMessageTimeout) {
    clearTimeout(currentMessageTimeout);
  }
  messageSequenceTimeouts.forEach((timeout) => clearTimeout(timeout));
  messageSequenceTimeouts = [];

  const startDelay = 500;
  setTimeout(() => {
    showMessageSequence(0);
  }, startDelay);
}

function showMessageSequence(messageIndex) {
  const messageElement = document.getElementById("flowerMessage");

  if (messageIndex < flowerMessages.length) {
    // Show current message
    messageElement.textContent = flowerMessages[messageIndex];
    messageElement.style.animation = "messageAppear 0.8s ease forwards";

    // Adjust timing for iOS
    const messageDisplayTime = isIOS() ? 4000 : 3000;
    const hideAnimationTime = isIOS() ? 1000 : 800;

    // Hide message after display time
    const hideTimeout = setTimeout(() => {
      messageElement.style.animation = "messageDisappear 0.8s ease forwards";

      // Show next message after hide animation (if there is one)
      if (messageIndex + 1 < flowerMessages.length) {
        const nextTimeout = setTimeout(() => {
          showMessageSequence(messageIndex + 1);
        }, hideAnimationTime);
        messageSequenceTimeouts.push(nextTimeout);
      }
    }, messageDisplayTime);

    messageSequenceTimeouts.push(hideTimeout);
  }
}

// Cleanup function for memory management
function cleanupAnimations() {
  // Clear all timeouts
  if (currentMessageTimeout) {
    clearTimeout(currentMessageTimeout);
    currentMessageTimeout = null;
  }
  messageSequenceTimeouts.forEach((timeout) => clearTimeout(timeout));
  messageSequenceTimeouts = [];

  // Clear will-change properties to free up GPU memory
  const particles = document.querySelectorAll(".particle");
  particles.forEach((p) => {
    p.style.willChange = "auto";
  });
}

// Add cleanup on page unload (iOS optimization)
window.addEventListener("beforeunload", cleanupAnimations);
window.addEventListener("pagehide", cleanupAnimations);
