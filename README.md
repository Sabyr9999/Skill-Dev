# SkillDev

SkillDev is a web-based platform designed to help users master and develop their skills through an interactive and user-friendly interface. The platform provides a comprehensive environment for skill development, community interaction, and personal growth tracking.

## Features

- **User Authentication**: Secure login and signup functionality
- **Skills Management**: Track and develop various skills
- **Community Integration**: Connect with other learners
- **Profile Management**: Personalized user profiles
- **Weather Integration**: Real-time weather information for Almaty
- **Responsive Design**: Modern and mobile-friendly interface

## Project Structure

```
├── index.html          # Main landing page
├── login.html          # User login page
├── signup.html         # New user registration
├── profile.html        # User profile management
├── skills.html         # Skills dashboard
├── community.html      # Community interaction page
├── assets/
│   ├── css/           # Stylesheet files
│   ├── js/           # JavaScript files
│   ├── images/       # General images
│   ├── background_images/ # Background images
│   ├── icons/        # UI icons
│   └── logos/        # Brand logos
```

## Setup

1. Clone the repository
2. Configure your weather API key in `config.js`:
   ```javascript
   const CONFIG = {
     WEATHER_KEY: 'your_openweathermap_api_key'
   };
   ```
3. Open `index.html` in a web browser

## Technical Requirements

- Modern web browser with JavaScript enabled
- OpenWeatherMap API key for weather functionality
- Internet connection for API calls

## Dependencies

- OpenWeatherMap API for weather data
- Custom CSS for styling
- Vanilla JavaScript for functionality

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to submit issues and enhancement requests.

## License

[Add your license information here]
