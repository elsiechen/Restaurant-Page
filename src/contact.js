
const contactTab = () => {
    const contact = document.createElement('div');
    contact.classList.add('contactContainer');

    const map = document.createElement('iframe');
    map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3096.5273385832993!2d-77.15688822397169!3d39.094462771682736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7cd79f841699b%3A0x1afedb81823f1f70!2s802%20Hungerford%20Dr%2C%20Rockville%2C%20MD%2020850!5e0!3m2!1sen!2sus!4v1684202059900!5m2!1sen!2sus');
    map.setAttribute('allowfullscreen', '');
    map.setAttribute('loading', 'lazy');
    map.setAttribute('referrerplicy', 'no-referrer-when-downgrade');
    map.classList.add('map');

    contact.appendChild(map);

    return { contact };
};

export default contactTab;


