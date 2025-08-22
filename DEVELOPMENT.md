# Development Guide

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/krishnagopal596/Linkedin-Portfolio.git
   cd Linkedin-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information
Update the following files with your information:

1. **`app/layout.tsx`**: Update metadata and title
2. **`app/page.tsx`**: Update navigation links and footer
3. **`components/Hero.tsx`**: Update name, title, and social links
4. **`components/About.tsx`**: Update personal information and achievements
5. **`components/Skills.tsx`**: Update skills and LinkedIn endorsements
6. **`components/Projects.tsx`**: Update project information and links
7. **`components/Contact.tsx`**: Update contact information

### LinkedIn Integration
1. **Update LinkedIn Profile URL**: Replace `krishnagopal596` with your actual LinkedIn username
2. **Update LinkedIn Stats**: Modify the numbers in components to match your actual LinkedIn metrics
3. **Customize Cover Generator**: Modify templates in `components/LinkedInCoverGenerator.tsx`

### Styling
- **Colors**: Update color scheme in `tailwind.config.js`
- **Fonts**: Change fonts in `app/globals.css`
- **Animations**: Modify animation settings in component files

## 🔧 LinkedIn Cover Generator

The LinkedIn Cover Generator allows you to create professional cover images for your LinkedIn profile with:

### Templates Available
1. **Minimal Blue**: Clean, professional blue gradient
2. **LinkedIn Gradient**: Official LinkedIn brand colors
3. **Professional Dark**: Sophisticated dark theme
4. **Geometric Purple**: Creative geometric patterns
5. **Tech Green**: Modern tech-focused design
6. **Creative Orange**: Vibrant creative theme

### Customization Options
- **Text**: Main name, subtitle, and tagline
- **Colors**: Background gradients and text colors
- **Font Size**: Adjustable from 24px to 72px
- **Layout**: Different visual styles and patterns

### Usage
1. Select a template from the available options
2. Customize the text content
3. Adjust colors and font size if needed
4. Download the generated image
5. Upload to your LinkedIn profile

## 🚀 Deployment

### GitHub Pages (Current Setup)
1. Push your code to GitHub
2. GitHub Actions will automatically build and deploy
3. Site will be available at `https://yourusername.github.io/Linkedin-Portfolio`

### Other Platforms
- **Vercel**: Connect repository to Vercel for automatic deployment
- **Netlify**: Upload the `out` folder after building
- **AWS S3**: Upload built files to S3 bucket

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or need help customizing your portfolio:

- **LinkedIn**: [linkedin.com/in/krishnagopal596](https://linkedin.com/in/krishnagopal596)
- **GitHub**: [github.com/krishnagopal596](https://github.com/krishnagopal596)
