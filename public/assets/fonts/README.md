# Font Folder README

## Introduction

This README explains how to import a new TrueType Font (.ttf) into the project and include it in the `src/theme/fonts.css` file. TrueType fonts provide versatility and are widely supported across various platforms and browsers.

## Directory Structure

Your font folder should be placed in a location where it can be easily accessed by the CSS file. A typical structure might look like this:

```text
project-root/
|-- src/
|   |-- theme/
|   |   |-- fonts.css
|-- fonts/
|   |-- YourFontName-Regular.ttf
```

## Steps to Import a New Font

### 1. Download or Obtain the .ttf Font File

Download your desired TrueType font (.ttf) file from a trusted source.

### 2. Place the .ttf File in the Font Folder

Place the downloaded `.ttf` file into the `fonts/` directory in your project root.

### 3. Update `src/theme/fonts.css` File

Now you'll need to link this font in your CSS file so it can be used throughout your application.

Open `src/theme/fonts.css` and add the following code snippet:

```css
@font-face {
  font-family: 'YourFontName'; /* Define the custom font name */
  src: url('../../fonts/YourFontName-Regular.ttf') format('truetype'); /* Path to .ttf file relative to this .css file */
  font-weight: normal;
  font-style: normal;
}
```

Replace `YourFontName` with the name you'd like to refer to this font as in your CSS, and make sure the URL correctly points to the location where the `.ttf` file is stored.

### 4. Use the Font in Your Project

After linking the font in `fonts.css`, you can now use it anywhere in your project. For example:

```css
body {
  font-family: 'YourFontName', sans-serif;
}
```

This will set the body text of your HTML to use your custom font.

## Example

If we are adding a font named "CustomFont", and our project structure and `fonts.css` might look something like this:

### Project Structure

```text
project-root/
|-- src/
|   |-- theme/
|   |   |-- fonts.css
|-- fonts/
|   |-- CustomFont-Regular.ttf
```

### src/theme/fonts.css

```css
@font-face {
  font-family: 'CustomFont';
  src: url('../../fonts/CustomFont-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: 'CustomFont', sans-serif;
}
```

That's it! You've successfully added a custom TrueType font to your project.