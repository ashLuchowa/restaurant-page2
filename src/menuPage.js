import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.jpg';
import img5 from './assets/5.jpg';
import img6 from './assets/6.jpg';
import img7 from './assets/7.jpg';
import img8 from './assets/8.jpg';



class MenuPage {
    constructor(image, title, description, price) {
        this.image = image;
        this.title = title;
        this.description = description;
        this.price = price;
    }

    static contentContainer = document.querySelector('#content');
    static menuContainer = document.createElement('div');

    // create menu boxes
    render() {
        if(!MenuPage.contentContainer.contains(MenuPage.menuContainer)) {
            MenuPage.menuContainer.innerHTML = '';
            MenuPage.menuContainer.classList.add('menu-container');
            MenuPage.contentContainer.appendChild(MenuPage.menuContainer);
        }

        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item-box');
        MenuPage.menuContainer.appendChild(itemContainer);

        // Image
        const imgBox = document.createElement('div');
        imgBox.classList.add('image-box');
        const imgContent = document.createElement('img');
        imgBox.appendChild(imgContent);
        imgContent.src = this.image;

        // Title
        const titleBox = document.createElement('div');
        titleBox.classList.add('title-box');
        const titleContent = document.createElement('p');
        titleBox.appendChild(titleContent);
        titleContent.textContent = this.title;

        // Description
        const descriptionBox = document.createElement('div');
        descriptionBox.classList.add('description-box');
        const descriptionContent = document.createElement('p');
        descriptionBox.appendChild(descriptionContent);
        descriptionContent.textContent = this.description;

        // Price
        const priceBox = document.createElement('div');
        priceBox.classList.add('price-box');
        const priceContent = document.createElement('p');
        priceBox.appendChild(priceContent);
        priceContent.textContent = this.price;

        // Add to item container
        itemContainer.appendChild(imgBox);
        itemContainer.appendChild(titleBox);
        itemContainer.appendChild(descriptionBox);
        itemContainer.appendChild(priceBox);
    }
}

function renderTitle() {
    const displayTitleContainer = document.createElement('div');
    displayTitleContainer.classList.add('display-title-container');

    const titleText = document.createElement('h1');
    displayTitleContainer.appendChild(titleText);
    titleText.textContent = 'Check out our menu';

    MenuPage.contentContainer.appendChild(displayTitleContainer);
}

const menuContent = [
    new MenuPage(img2, 'Item Title', 'This is the item description', '$25'),
    new MenuPage(img3, 'Item Title', 'This is the item description', '$25'),
    new MenuPage(img4, 'Item Title', 'This is the item description', '$25'),
    new MenuPage(img5, 'Item Title', 'This is the item description', '$25'),
    new MenuPage(img6, 'Item Title', 'This is the item description', '$25'),
    new MenuPage(img7, 'Item Title', 'This is the item description', '$25'),
    new MenuPage(img8, 'Item Title', 'This is the item description', '$25'),
]

export { menuContent, renderTitle };