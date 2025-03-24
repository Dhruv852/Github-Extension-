# GitHub AI Assistant Website

This is the landing page for the GitHub AI Assistant Chrome Extension. The website is hosted on Render and provides information about the extension's features, installation guide, and download options.

## Deployment on Render

1. Create a new Static Site on Render
2. Connect your repository
3. Configure the following settings:
   - Build Command: Leave empty (no build required)
   - Publish Directory: `.`

The site will be automatically deployed and available at your Render URL.

## Local Development

To run the website locally:

1. Navigate to the website directory
2. Start a local server (e.g., using Python's `http.server`)
3. Open `http://localhost:8000` in your browser

## File Structure

```
website/
├── index.html       # Main landing page
├── styles.css       # Stylesheet
├── script.js        # JavaScript functionality
├── static.json      # Static site configuration
├── render.yaml      # Render deployment configuration
└── icons/           # Extension icons
```

## Updating the Extension

When releasing a new version of the extension:

1. Update the version number in `index.html`
2. Package the new extension files
3. Update the `github-ai-assistant.zip` file