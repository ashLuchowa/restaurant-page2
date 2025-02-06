class ContactForm {
    constructor(labelText, inputType, inputId) {
        this.labelText = labelText;
        this.inputType = inputType;
        this.inputId = inputId;
    }

    static contentContainer = document.querySelector('#content');
    static contactContainer = document.createElement('form');

    render() {
        if(!ContactForm.contentContainer.contains(ContactForm.contactContainer)) {
            ContactForm.contactContainer.innerHTML = '';
            ContactForm.contactContainer.classList.add('contact-container');
            ContactForm.contentContainer.appendChild(ContactForm.contactContainer);
        }

        // Label
        const textLabel = document.createElement('label');
        textLabel.setAttribute('for', this.inputId);
        textLabel.textContent = this.labelText;

        // firstName Input
        const textInput = document.createElement('input');
        textInput.setAttribute('type', this.inputType);
        textInput.setAttribute('id', this.inputId);
        textInput.setAttribute('name', this.inputId);
        textInput.textContent = this.labelText;
        

        // Append Children
        ContactForm.contactContainer.appendChild(textLabel);
        ContactForm.contactContainer.appendChild(textInput);
    }
}

function renderContactTitle() {
    const contactTitleContainer = document.createElement('div');
    contactTitleContainer.classList.add('contact-title-container');

    const titleText = document.createElement('h1');
    contactTitleContainer.appendChild(titleText);
    titleText.textContent = 'Get in Touch';

    ContactForm.contentContainer.appendChild(contactTitleContainer);
}

const formContent = [
    new ContactForm('First Name', 'text', 'firstName'),
    new ContactForm('Last Name', 'text', 'lastName'),
    new ContactForm('Phone Number', 'number', 'phoneNumber'),
    new ContactForm('Email', 'text', 'email'),
    new ContactForm('Submit', 'submit', 'submit'),
];

export { formContent, renderContactTitle };