// Get references to the customization elements
const backgroundColorInput = document.getElementById('background-color');
const textColorInput = document.getElementById('text-color');
const fontFamilySelect = document.getElementById('font-family');

// Get reference to the content area
const contentArea = document.getElementById('content');

// Add event listeners to the customization elements
backgroundColorInput.addEventListener('input', updateBackgroundColor);
textColorInput.addEventListener('input', updateTextColor);
fontFamilySelect.addEventListener('change', updateFontFamily);

// Function to update the background color
function updateBackgroundColor() {
    document.body.style.backgroundColor = backgroundColorInput.value;
}

// Function to update the text color
function updateTextColor() {
    document.body.style.color = textColorInput.value;
}

// Function to update the font family
function updateFontFamily() {
    document.body.style.fontFamily = fontFamilySelect.value;
}
