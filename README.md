# 🏠 Google Home Dashboard Component for Home Assistant

A custom component that brings the **Google Home look and feel** to your Home Assistant dashboard. Provides dynamic, swipeable cards for Cameras, Lights, Wi-Fi devices, and Climate control with Material You styling.

![Google Home Preview](https://raw.githubusercontent.com/giovannilamarmora/Home-Assistant-Google-Home-Component/master/assets/preview.png)

---

## 🚀 Features

- 🖼️ Modern Google Home-style UI  
- 📱 Compact swipeable dashboard (uses [swipe-card](https://github.com/bramkragten/swipe-card))  
- 🔘 Dynamic button-cards with automatic entity counting  
- 🎨 Light/Dark theme support  
- 📦 Easily installable via GitHub or CDN

---

## 📦 Installation

### 🔧 Method 1 – Manual Installation

1. Download [`google-components.js`](https://github.com/giovannilamarmora/Home-Assistant-Google-Home-Component/blob/master/dist/google-components.js)

2. Move it to your `config/www/` folder:
   ```
   config/www/google-components.js
   ```

3. In Home Assistant, go to:
   - `Settings` → `Dashboards` → `Manage Resources`

4. Click **Add Resource**:
   - **Type:** JavaScript module  
   - **URL:** `/local/google-components.js`

5. Save and restart Home Assistant.

---

### ☁️ Method 2 – CDN Installation

1. In Home Assistant, go to:
   - `Settings` → `Dashboards` → `Manage Resources`

2. Click **Add Resource**:
   - **Type:** JavaScript module  
   - **URL:**
     ```
     https://cdn.jsdelivr.net/gh/giovannilamarmora/Home-Assistant-Google-Home-Component@master/dist/google-components.js?v=20250626
     ```

3. Save and restart Home Assistant.

> You can update the version parameter `?v=YYYYMMDD` to force cache refresh after pushing updates.

---

## 🧩 Dependencies

This component uses:
- [swipe-card](https://github.com/bramkragten/swipe-card)
- [button-card](https://github.com/custom-cards/button-card)
- Material Design Icons (via Home Assistant)
- Material You theme (optional but recommended)

---

## ✨ Example Usage

```yaml
type: custom:google-dashboard-card
cameras: ./cameras
lighting: ./lights
wifi: ./network
climate: ./climate
```

---

## 🛠️ Development

Clone the repository and run your preferred build tool (e.g., Vite, Webpack). Make sure to output to the `dist/` folder.

---

## 📜 License

MIT License – feel free to use, modify, and share.

---

## 🤝 Contribute

PRs are welcome! If you'd like to help translate or improve features, open an Issue or Pull Request.