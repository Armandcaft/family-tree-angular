# ArbreGénéa - Family Tree Management Application

ArbreGénéa is a comprehensive family tree management application built with Angular and designed to help families create, manage, and visualize their genealogical history.

## Features

### Core Functionality
- **Multi-Tree Management**: Create and manage multiple family trees
- **Member Management**: Add detailed member profiles with photos, documents, and biographical information
- **Interactive Tree Visualization**: Navigate through family relationships with an intuitive interface
- **Media Gallery**: Store and organize family photos, documents, and memorabilia
- **Collaboration**: Share trees with family members and manage permissions
- **Export Options**: Export family data in various formats (PDF, GEDCOM, JSON, CSV)

### Advanced Features
- **Personal Links**: Generate secure links for family members to update their own information
- **Timeline View**: Interactive chronological view of family events
- **Multi-language Support**: Available in English, French, German, Spanish, and Japanese
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Privacy Controls**: Flexible privacy settings and access controls
- **Data Validation**: Automatic detection of logical inconsistencies
- **Statistics Dashboard**: Family insights and genealogical statistics

## Technology Stack

### Frontend
- **Angular 20**: Latest version with standalone components
- **TypeScript**: Strongly typed development
- **SCSS**: Advanced styling with custom design system
- **Lucide Angular**: Modern icon library
- **RxJS**: Reactive programming for data management

### Architecture
- **Modular Design**: Feature-based module organization
- **Lazy Loading**: Optimized performance with route-based code splitting
- **Responsive Design**: Mobile-first approach with breakpoint system
- **Design System**: Comprehensive SCSS variables, mixins, and utilities
- **Service Layer**: Separation of concerns with dedicated services

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Angular CLI

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd arbre-genea
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

### Development Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Build for staging
npm run build:staging

# Run tests
npm test

# Run linting
npm run lint

# Extract internationalization strings
npm run extract-i18n
```

## Project Structure

```
src/
├── app/
│   ├── core/                 # Core application services and models
│   │   ├── models/          # TypeScript interfaces and types
│   │   └── services/        # Business logic services
│   ├── features/            # Feature modules
│   │   ├── dashboard/       # Dashboard components
│   │   ├── tree/           # Tree visualization
│   │   ├── members/        # Member management
│   │   ├── gallery/        # Media gallery
│   │   └── settings/       # Application settings
│   ├── shared/             # Shared components and utilities
│   │   └── components/     # Reusable UI components
│   ├── app.component.*     # Root application component
│   ├── app.config.ts       # Application configuration
│   └── app.routes.ts       # Route definitions
├── assets/                 # Static assets
├── environments/           # Environment configurations
└── styles/                # Global styles and design system
```

## Environment Configuration

The application supports multiple environments:

- **Development**: Local development with mock data
- **Staging**: Pre-production testing environment
- **Production**: Live production environment

Environment-specific configurations are located in `src/environments/`.

## Design System

ArbreGénéa uses a comprehensive design system built with SCSS:

### Color Palette
- **Primary**: Purple gradient (#6366F1)
- **Secondary**: Green (#10B981)
- **Accent**: Amber (#F59E0B)
- **Neutrals**: Grayscale system

### Typography
- **Font Family**: Inter (Google Fonts)
- **Scale**: Modular scale with consistent sizing
- **Weights**: Light, Normal, Medium, Semibold, Bold

### Spacing System
- **Base Unit**: 8px
- **Scale**: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Internationalization

The application supports multiple languages out of the box. Language files are stored in `src/assets/i18n/` and the default language is English.

### Supported Languages
- English (en) - Default
- French (fr)
- German (de)
- Spanish (es)
- Japanese (ja)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@arbregenea.com or create an issue in the repository.

## Roadmap

### Phase 1 (Current)
- ✅ Basic dashboard and navigation
- ✅ Project structure and design system
- 🔄 Tree visualization component
- 🔄 Member management interface

### Phase 2 (Upcoming)
- Advanced tree interactions
- Media management system
- Collaboration features
- Export functionality

### Phase 3 (Future)
- Mobile application (Ionic/Capacitor)
- Advanced AI features
- Enhanced privacy controls
- API integrations

---

Built with ❤️ by the ArbreGénéa team