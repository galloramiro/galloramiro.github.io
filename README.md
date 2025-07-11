# Ramiro Gallo - Personal CV Website

A modern, responsive personal CV website built with React, TypeScript, and Tailwind CSS. Designed for hosting on GitHub Pages.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Theme**: Professional dark theme with muted British racing green accents
- **Easy Configuration**: All content managed through a single JSON file
- **Smooth Navigation**: Fixed header with smooth scrolling between sections
- **Professional Sections**: About Me, Talks, Work Experience, and Contact
- **Accessible**: Built with semantic HTML and proper color contrast
- **SEO Optimized**: Includes proper meta tags and structured data

## Configuration

All website content is configured through the `src/config.json` file:

### Personal Information
```json
{
  "personalInfo": {
    "fullName": "Your Full Name",
    "photo": "URL to your photo",
    "bio": "Your professional bio",
    "title": "Your professional title"
  }
}
```

### Talks
```json
{
  "talks": [
    {
      "title": "Talk Title",
      "description": "Brief description of the talk",
      "slidesLink": "URL to slides",
      "youtubeLink": "URL to YouTube video (optional)"
    }
  ]
}
```

### Work Experience
```json
{
  "workExperience": [
    {
      "company": "Company Name",
      "companyLogo": "URL to company logo",
      "jobTitle": "Your Job Title",
      "startDate": "YYYY-MM",
      "endDate": "YYYY-MM (or null if current)",
      "currentlyWorking": true/false,
      "responsibilities": [
        "List of responsibilities"
      ]
    }
  ]
}
```

### Contact Information
```json
{
  "contact": {
    "linkedinUrl": "Your LinkedIn URL",
    "youtubeUrl": "Your YouTube channel URL (optional)"
  }
}
```

## Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Update `src/config.json` with your information
4. Start development server: `npm run dev`

### Build for Production
```bash
npm run build
```

## Deployment to GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Your site will be available at `https://yourusername.github.io/repository-name`

## Customization

### Colors
The site uses a dark theme with British racing green accents. To customize colors, modify the Tailwind classes in the components:

- Primary green: `text-green-400`, `bg-green-600`
- Background: `bg-gray-900`, `bg-gray-800`
- Text: `text-white`, `text-gray-300`

### Fonts
The site uses the default Tailwind CSS font stack. To use custom fonts, add them to `index.html` and update the Tailwind configuration.

### Layout
Each section is a separate React component in the `src/components` directory. Modify these components to change the layout or add new sections.

## Browser Support

- Chrome/Edge 88+
- Firefox 78+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available under the MIT License.
