
const GoogleMap = props => {
       
    return (
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.2928309230815!2d9.075354151204136!3d48.12387595999214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a16ab95486521%3A0x83e126c212fe86b3!2sLagerstra%C3%9Fe%2015%2C%2072510%20Stetten%20am%20kalten%20Markt!5e0!3m2!1sru!2sde!4v1680543857901!5m2!1sru!2sde" 
        title="gmap"
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
