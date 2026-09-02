# 🌿 تطبيق جنّة الرحمن
## Jannat Al-Rahman - Islamic Learning & Spiritual Tracking App

An Islamic learning application designed for Quran recitation, daily Adhkar (remembrances), and spiritual progress tracking through an interactive habit tree.

### ✨ Features

- 📖 **Complete Quran Navigation** - Browse all 114 Surahs with Tajweed color coding
- 🎵 **Audio Quran Recitation** - Multiple renowned reciters (Al-Afasy, Abkar, etc.)
- 📿 **Daily Adhkar & Duas** - Morning/Evening remembrances and supplications
- 🌳 **Spiritual Growth Tree** - Visual habit tracker with interactive tree growth
- 📊 **Daily Tracker** - Monitor prayers, Quran reading, and daily habits
- 🔖 **Smart Bookmarks** - Save favorite Surahs and pages
- 💾 **Data Export/Import** - Encrypted backup and restore functionality
- 🌙 **Reading Modes** - Dark mode, Eye comfort mode, and Tajweed highlighting
- ⏰ **Smart Reminders** - Customizable daily morning/evening notifications
- 🎧 **Audio Lessons** - Curated Islamic educational content

### 📋 Project Structure

```
jannat-alrahman/
├── src/
│   ├── components/
│   │   ├── QuranReader.vue
│   │   ├── DailyTracker.vue
│   │   ├── HabitTree.vue
│   │   ├── AdhkarSection.vue
│   │   └── AudioPlayer.vue
│   ├── views/
│   │   ├── Home.vue
│   │   ├── Quran.vue
│   │   ├── Tracker.vue
│   │   ├── Settings.vue
│   │   └── Export.vue
│   ├── stores/
│   │   ├── userStore.js
│   │   ├── quranStore.js
│   │   ├── trackerStore.js
│   │   └── settingsStore.js
│   ├── data/
│   │   ├── quran.json
│   │   ├── adhkar.json
│   │   ├── reciters.json
│   │   └── scholars.json
│   ├── utils/
│   │   ├── tajweed.js
│   │   ├── encryption.js
│   │   └── dateFormatter.js
│   ├── App.vue
│   └── main.js
├── public/
│   ├── audio/
│   └── images/
├── tests/
├── .env.example
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

### 🛠️ Technology Stack

- **Frontend Framework**: Vue 3 + TypeScript
- **State Management**: Pinia
- **Styling**: Tailwind CSS + Sass
- **Build Tool**: Vite
- **Data Storage**: IndexedDB + localStorage
- **Encryption**: TweetNaCl.js
- **Icons**: Heroicons + Custom SVGs
- **Fonts**: Cairo, Amiri Quran, Amiri (Arabic support)

### 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

### 🚀 Getting Started

#### Prerequisites
- Node.js 16+
- npm or yarn

#### Installation

```bash
# Clone the repository
git clone https://github.com/saudiradiom-oss/jannat-alrahman.git
cd jannat-alrahman

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### 📖 Configuration

Create a `.env.local` file:

```env
VITE_APP_TITLE=جنّة الرحمن
VITE_APP_VERSION=1.0.0
VITE_ENABLE_ANALYTICS=true
VITE_API_BASE_URL=https://api.example.com
```

### 🔐 Data Privacy

- All user data is stored locally (IndexedDB/localStorage)
- Optional encryption for backup exports
- No data sent to external servers
- Full data export/import control

### 📊 Data Structure

#### User Settings
```json
{
  "isDarkMode": false,
  "enableEyeComfortMode": false,
  "selectedReciter": "alafasy",
  "quranFontSize": 24,
  "enableTajweedColors": true,
  "enableAutoScroll": true,
  "dailyMorningReminder": true,
  "workModeIntervalMinutes": 15
}
```

#### Daily Tracker
```json
{
  "date": "2026-09-01",
  "prayers": {
    "fajr": "completed",
    "dhuhr": "missed",
    "asr": "completed",
    "maghrib": "missed",
    "isha": "completed"
  },
  "quranPagesRead": 2,
  "quranTargetPages": 4,
  "athkarCompletedCount": 8,
  "athkarTargetCount": 12,
  "treeGrowthPercentage": 65
}
```

### 🎯 Key Features Details

#### 📖 Quran Reader
- Full Quran text with Tajweed color highlighting
- Page-by-page and Surah-based navigation
- Verse selection and bookmarking
- Audio synchronization with reciter
- Adjustable font sizes and reading modes

#### 🌳 Habit Tree System
- Visual representation of spiritual progress
- Tree grows based on daily habit completion
- Multiple growth stages and animations
- Milestone celebrations and rewards

#### 📿 Adhkar Module
- Categorized morning/evening remembrances
- Dua collections for specific occasions
- Audio recitations with translations
- Daily reminders and notifications

#### 📊 Tracker Dashboard
- Prayer time tracking (5 daily prayers)
- Quran reading progress
- Custom habit creation and monitoring
- Weekly and monthly statistics
- Visual charts and progress indicators

### 🧪 Testing

```bash
# Run unit tests
npm run test

# Run e2e tests
npm run test:e2e

# Coverage report
npm run test:coverage
```

### 🤝 Contributing

Contributions are welcome! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### 📝 License

MIT License - see [LICENSE](LICENSE) file

### 🙏 Acknowledgments

- Quranic data from [Quran.com](https://quran.com)
- Tajweed rules from Islamic scholars
- Adhkar collections from traditional Islamic sources
- UI/UX inspiration from modern Islamic apps

### 📧 Contact & Support

- **Issues**: [GitHub Issues](https://github.com/saudiradiom-oss/jannat-alrahman/issues)
- **Email**: support@jannat-alrahman.app
- **Website**: https://jannat-alrahman.app

### 🌍 Localization

Currently supported languages:
- 🇸🇦 Arabic (عربي)
- 🇬🇧 English

Contributions for additional languages welcome!

---

**جنّة الرحمن - صدقة جارية (Jannat Al-Rahman - An ongoing charity)**

*May this application help strengthen your connection with the Quran and your daily spiritual practice.*
