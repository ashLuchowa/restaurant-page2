// Import CSS
import './style.scss';
// Import Pages
import { mainContent } from './initialPage';
import { menuContent, renderTitle } from './menuPage';
import { formContent, renderContactTitle } from './contactPage';

const contentContainer = document.querySelector('#content');

// Footer Content
class Footer {
    constructor(footerText) {
        this.footerText = footerText;
    }

    render() {
        const footerContainer = document.querySelector('#main-footer');
        const footerContent = document.createElement('p');
        footerContent.textContent = this.footerText;
        footerContainer.appendChild(footerContent);

        return footerContainer;
    }
}
const footerDisplay = new Footer(
    'Ashwin\'s Restaurant. \u00A9 Copyright 2025.'
);

// Button Event Listener
(function switchPages() {
    const buttons = document.querySelectorAll('header nav button');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.textContent === 'Home') {
                removeDisplay();
                displayPage(mainContent);
            }
            if (e.target.textContent === 'Menu') {
                removeDisplay();
                renderTitle();
                menuContent.forEach(item => {
                    item.render();
                })
            }
            if (e.target.textContent === 'Contact') {
                removeDisplay();
                renderContactTitle();
                formContent.forEach(item => {
                    item.render();
                });
            }
        });
    });
})();

// Display Main Content on DOM
function displayPage(coreDisplay) {
    document.body.appendChild(coreDisplay.render());
}

// Remove Content from DOM
function removeDisplay() {
    contentContainer.innerHTML = '';
}

// Initialise Page
(function initApp() {
    document.body.appendChild(mainContent.render());
    document.body.appendChild(footerDisplay.render());
})();

