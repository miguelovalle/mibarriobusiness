
export const GetPosition = () => {
    let lng, lat
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (ubicacion) => {
            lng = ubicacion.coords.longitude;
            lat = ubicacion.coords.latitude;
            localStorage.setItem("long",lng);
            localStorage.setItem("lat",lat);         
            }
        );
    }


}
