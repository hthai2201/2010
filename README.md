# 🌹 Vietnamese Women's Day 2010 - Romantic Flower Bouquet

A beautiful, interactive romantic flower bouquet website celebrating Vietnamese Women's Day (20/10) with animated tulips, floating romantic icons, and heartfelt Vietnamese messages.

## ✨ Features

### 🌺 Interactive Flower Bouquet

- **Animated Tulips**: 5 beautifully animated pink tulips with realistic swaying motion
- **Clickable Flowers**: Click any flower to start a romantic message sequence
- **Sequential Messages**: Automatic progression through 6 Vietnamese romantic messages
- **Smooth Animations**: Elegant fade-in/fade-out transitions between messages

### 💕 Romantic Letter Modal

- **Letter Icon**: Floating, glowing letter icon on the bouquet
- **Romantic Modal**: Beautiful pink-themed popup with Vietnamese Women's Day message
- **Line-by-Line Animation**: Text appears progressively with typewriter effect
- **Floating Icons**: Animated hearts, roses, butterflies, and sparkles

### 🎨 Visual Effects

- **Night Sky Background**: Starry night atmosphere with shooting stars
- **Floating Particles**: White particles rising from bottom
- **Romantic Icons**: Hearts, roses, butterflies floating around the bouquet
- **Glow Effects**: Romantic pink and white glow animations
- **Responsive Design**: Works on all screen sizes

### 🇻🇳 Vietnamese Content

- **Women's Day Message**: Special 20/10 Vietnamese Women's Day greeting
- **Romantic Messages**: 6 heartfelt Vietnamese messages for each flower
- **Cultural Theme**: Designed specifically for Vietnamese Women's Day celebration

## 🎯 Vietnamese Messages

1. **Flower 1**: "Chúc em một ngày mới thật tươi đẹp."
2. **Flower 2**: "Cười lên nhé! Hôm nay là một ngày tuyệt vời!"
3. **Flower 3**: "Gửi đến em 1 cái ôm thật ấm áp."
4. **Flower 4**: "Em là người đặc biệt và đáng yêu lắm đấy."
5. **Flower 5**: "Chúc em luôn mai mắn và thành công"
6. **Flower 6**: "Cảm ơn em vì đã luôn là chính mình ❤️"

## 🚀 How to Use

1. **Open the website**: Load `index.html` in your browser
2. **Wait for animations**: Watch the beautiful flower bouquet appear
3. **Click the letter**: Click the floating letter icon for the main Women's Day message
4. **Click flowers**: Click any flower to start the romantic message sequence
5. **Enjoy the experience**: Watch as all 6 messages display automatically

## 🎨 Technical Features

### Animations

- **CSS Keyframe Animations**: Smooth flower swaying, particle effects
- **JavaScript Transitions**: Message sequencing and modal controls
- **Romantic Effects**: Glowing, pulsing, and floating animations

### Responsive Design

- **Mobile Friendly**: Optimized for all screen sizes using `vmin` units
- **Touch Support**: Works perfectly on mobile devices
- **Cross-Browser**: Compatible with modern browsers

### Performance

- **Optimized Assets**: Efficient CSS animations
- **Smooth Transitions**: Hardware-accelerated animations
- **Lightweight**: Single HTML file with embedded CSS and JavaScript

## 🛠️ Installation

### Option 1: Clone Repository (Recommended)

```bash
git clone https://github.com/hthai2201/2010.git
cd 2010
# Open index.html in your browser
```

### Option 2: Manual Setup

1. Download all files maintaining the folder structure
2. Ensure the `/assets/` directory structure is preserved:
   - `/assets/css/` - Contains base.css and style.css
   - `/assets/js/` - Contains script.js
   - `/assets/images/` - Contains letter.png
   - `/assets/audio/` - Contains audio.mp3 (optional)
3. Open `index.html` in your web browser

## 📁 File Structure

```
2010/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   ├── base.css        # Base styles and resets
│   │   └── style.css       # Main styles and animations
│   ├── js/
│   │   └── script.js       # JavaScript functionality
│   ├── images/
│   │   └── letter.png      # Letter icon image
│   └── audio/
│       └── audio.mp3       # Background music (optional)
└── README.md               # This documentation
```

## 🎨 Customization

### Messages

Edit the `flowerMessages` array in `/assets/js/script.js`:

```javascript
const flowerMessages = [
  "Your custom message 1",
  "Your custom message 2",
  // ... add more messages
];
```

### Colors

Modify the CSS color variables in `/assets/css/style.css`:

```css
/* Pink theme colors */
:root {
  --primary-pink: #ff69b4;
  --secondary-pink: #ffb6c1;
  --accent-pink: #ff1493;
}
```

### Animation Timing

Adjust message display duration in `/assets/js/script.js`:

```javascript
// Change 1500ms to your preferred duration
setTimeout(() => {
  // Message hide logic
}, 1500);
```

### Styling

- **Base styles**: Edit `/assets/css/base.css` for resets and basic styling
- **Main styles**: Edit `/assets/css/style.css` for animations and romantic effects
- **Functionality**: Edit `/assets/js/script.js` for interactive features

## 🌟 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 📱 Mobile Experience

The website is fully optimized for mobile devices with:

- Touch-friendly interactions
- Responsive font sizes using `vmin` units
- Optimized animations for mobile performance
- Portrait and landscape orientation support

## 🎭 Animation Details

### Flower Animations

- **Swaying Motion**: Gentle left-right movement
- **Growing Effect**: Flowers grow from bottom to full size
- **Petal Details**: Individual petal animations with depth
- **Center Glow**: Animated center with purple gradient

### Particle System

- **Rising Particles**: White dots floating upward
- **Shooting Stars**: Diagonal streaks across the sky
- **Romantic Icons**: Hearts, butterflies, roses floating around

### Modal Effects

- **Backdrop Blur**: Background blur with romantic overlay
- **Typewriter Effect**: Text appears character by character
- **Floating Icons**: Animated romantic symbols in background

## 💖 Perfect For

- **Vietnamese Women's Day (20/10)** celebrations
- **Romantic gestures** and surprises
- **Valentine's Day** adaptations
- **Birthday wishes** for special women
- **Mother's Day** celebrations
- **Anniversary** messages

## 🔧 Technical Requirements

- Modern web browser with CSS3 and ES6+ support
- JavaScript enabled
- Complete `/assets/` folder structure with all files
- `letter.png` image in `/assets/images/` directory
- No server required - runs locally

### Required Files

- `index.html` - Main HTML structure
- `/assets/css/base.css` - Base styles and CSS resets
- `/assets/css/style.css` - Main styles and animations
- `/assets/js/script.js` - Interactive functionality
- `/assets/images/letter.png` - Letter icon image
- `/assets/audio/audio.mp3` - Background music (optional)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and submit pull requests for:

- Additional language translations
- New romantic messages
- Animation improvements
- Bug fixes
- Mobile optimizations

## 📞 Support

If you encounter any issues or have questions:

1. Check the browser console for error messages
2. Ensure all files in `/assets/` directory are present and properly structured
3. Verify `letter.png` is in `/assets/images/` directory
4. Check that CSS and JS files are loading correctly
5. Verify JavaScript is enabled in your browser
6. Try refreshing the page

### Common Issues

- **Missing assets**: Ensure the `/assets/` folder structure is complete
- **Images not loading**: Check `/assets/images/letter.png` exists
- **Styles not applied**: Verify `/assets/css/` files are present
- **No interactions**: Check `/assets/js/script.js` is loaded

## 🎉 Credits

Created with ❤️ for Vietnamese Women's Day celebrations. Special thanks to the Vietnamese community for inspiring this romantic tribute.

---

**Happy Vietnamese Women's Day! 🌹💕**

_Chúc mừng ngày Phụ nữ Việt Nam 20/10!_
