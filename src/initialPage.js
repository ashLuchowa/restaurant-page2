import titleImage from './assets/1.jpg';

// main content
class InitialPage {
    constructor(title, image, description) {
        this.title = title;
        this.image = image;
        this.description = description;
    }

    render() {
        // Content Container
        const contentContainer = document.querySelector('#content');

        // Title
        const maintitle = document.createElement('div');
        maintitle.classList.add('main-title');
        const mainTitleText = document.createElement('h1');
        mainTitleText.textContent = this.title;

        // Image
        const mainImage = document.createElement('div');
        mainImage.classList.add('main-image');
        const mainImageContent = document.createElement('img');
        mainImageContent.src = this.image;

        // Description
        const mainDescription = document.createElement('div');
        mainDescription.classList.add('main-description');
        const mainDescriptionText = document.createElement('p');
        mainDescriptionText.textContent = this.description;

        // Append Children
        maintitle.appendChild(mainTitleText);
        contentContainer.appendChild(maintitle);
        mainImage.appendChild(mainImageContent);
        contentContainer.appendChild(mainImage);
        mainDescription.appendChild(mainDescriptionText);
        contentContainer.appendChild(mainDescription);

        return contentContainer;
    }
}

const mainContent = new InitialPage(
    'Welcome to Ashwin\'s Donut Shop',
    titleImage,
    'A cozy donut shop offering fresh, handmade donuts, rich coffee, and a warm, inviting atmosphere.',
);

export { mainContent };