# Music Player Web Application

A clean and interactive music player web app built using vanilla HTML, CSS, and JavaScript. This project is a tribute to Sơn Tùng MTP, featuring a playlist of his popular songs. The application is fully client-side and works directly in your browser.

---

## 📂 Project Structure

- **music.html**  
  The main HTML file that structures the player interface and loads all styles/scripts.
- **music.css**  
  Stylesheet containing all visual designs for the player, controls, playlist, and responsive layout.
- **favicon.ico**  
  Optional favicon for browser tab.
- **js/**
  - **music__function.js**  
    Contains all the logic for music control, UI interaction, playlist rendering, and event handling.
  - **music__song.js**  
    Defines the playlist as an array of song objects, each with name, artist, path, and image.
- **song_name/**  
  Contains all `.mp3` song files referenced in the playlist. Song filenames must match those in `music__song.js`.

---

## 🚀 Getting Started

1. **Clone or Download the Repository**
   ```bash
   git clone https://github.com/Minhca2k5/Music.git
   ```
2. **Add or Replace Songs**  
   Place your `.mp3` files inside the `song_name` directory. Make sure filenames correspond to the `Path` field in `js/music__song.js`.

3. **Run the App**  
   Simply open `music.html` in your browser. No backend or extra configuration needed.

---

## 🎧 Features

- **Interactive Playlist:**  
  Click any song in the playlist to play it instantly. The currently playing song is highlighted.

- **Player Controls:**  
  - **Play/Pause:** Toggle playback with a single button.
  - **Next/Previous:** Skip to the next or previous song.
  - **Random:** Shuffle play order when enabled.
  - **Repeat:** Replay the current song from the start.
  - **Progress Bar:** Shows playback progress and allows seeking.
  - **Animated CD:** Album art rotates while playing.

- **Responsive Design:**  
  Optimized for desktop and mobile up to 480px wide.

- **Dynamic UI:**  
  - Fades and scales the CD image as you scroll.
  - All player states (active, playing, paused, etc.) visually reflected.

---

## 🛠️ File Descriptions

### `music.html`
- Main layout: player controls, animated CD, header, progress bar, hidden audio element, and playlist container.
- Loads Google Fonts and Font Awesome for icons.
- Includes CSS and JS files.

### `music.css`
- Defines color themes, fonts, spacing, and all component styles.
- Customizes player buttons, progress bar, and playlist entries.
- Animates the CD and highlights the active song.

### `js/music__song.js`
- Exports the playlist as an array of objects.  
  Each song contains:
  - `Name`: Song title
  - `Singer`: Artist’s name
  - `Path`: File path to the `.mp3` in `song_name/`
  - `Image`: URL for the album cover

### `js/music__function.js`
- Handles all player logic:
  - Loads & plays songs, updates UI
  - Handles play/pause, next/prev, random, repeat
  - Syncs progress bar with audio
  - Animates album art
  - Builds the playlist dynamically
  - Handles seeking and auto-next after song ends

---

## ✏️ Customization

- **Add Songs:**  
  Edit `js/music__song.js` to add, remove, or edit song entries.
- **Update Covers:**  
  Change the `Image` field to any album art URL.
- **Theme:**  
  Adjust CSS variables in `music.css` for easy color and style changes.

---

## ⚠️ License & Usage

- For educational and personal use only.  
- Please use music files you own or have permission to use.

---

## 🙏 Credits

- **Icons:** [Font Awesome](https://fontawesome.com/)
- **Fonts:** [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins)
- **Demo Songs:** All rights belong to the original artists. This project is for demo/learning purposes only.

---

Enjoy your music!  
*— Developed by Phan Đình Minh*
