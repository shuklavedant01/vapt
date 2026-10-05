# VAPT Mastery Roadmap Portal

An elegant, minimalist, and responsive web portal built to track progress along the complete Vulnerability Assessment & Penetration Testing learning path.

---

## 🎨 Theme & Styling

The design is engineered around the requested color palette:
*   **Petal Yellow** (`#F4D068`): Banners, checklists, search highlights, and focus indicators.
*   **Stem Green** (`#2C5D3F`): Success badges, completion markers, and progress bars.
*   **Core Brown** (`#3E2723`): High-end rich timber accents, dark fonts, and button borders.
*   **Highlight White** (`#FFFFFF`): Premium background containers and warm body tones.

---

## 🚀 Key Features

1.  **Granular Progress Tracking**: Complete items within 7 roadmap phases (Phase 0 to Phase 6) and visualize progress bars updated in real-time.
2.  **State Persistence (`localStorage`)**: Checked milestones and customized study notes remain saved across sessions and page refreshes.
3.  **Comprehensive Search System**: Search for tools (e.g., `Burp`, `sqlmap`, `Wireshark`), topics (e.g., `SSRF`, `AD`, `Buffer Overflow`), or certifications. Clicking any result jumps directly to the matching phase and highlights the section.
4.  **Local Study Timer (Pomodoro)**: A visually integrated 25-minute study timer with completion indicators to keep your focus sessions sharp.
5.  **Backup & Sync Utilities**: Export your entire progress state, checklist configuration, and written notes as a `.json` backup file, and import it on any device to resume tracking.

---

## 💻 Getting Started

No compilers or heavy setups are required. You can load this project directly in any browser:

### Option A: Local File System
Simply double-click the `index.html` file in your file explorer to open it in your browser.

### Option B: Local Web Server
To enable proper file management behaviors or clean URL loading, host it with a simple web server:

**Using Python:**
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

**Using Node.js (`http-server`):**
```bash
npx http-server -p 8000
```
Then visit `http://localhost:8000` in your web browser.
