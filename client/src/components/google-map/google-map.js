
const GoogleMap = props => {
       
    return (
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.176517209872!2d9.08274!3d48.126119200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a16aee116095d%3A0x3b026ec9feb2793d!2zRXVyb3Bhc3RyYcOfZSAyNywgNzI1MTAgU3RldHRlbiBhbSBrYWx0ZW4gTWFya3QsINCT0LXRgNC80LDQvdC40Y8!5e0!3m2!1sru!2sua!4v1680245993534!5m2!1sru!2sua" 
        width="100%" 
        height="500px" 
        style={{border:0}} 
        allowFullScreen
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    );
    
}


export default GoogleMap;