let map, directionsService, directionsRenderer;

        function initMap() {
            map = new google.maps.Map(document.getElementById("map"), {
                zoom: 6,
                center: { lat: 40.7128, lng: -74.0060 } 
            });
        
            directionsService = new google.maps.DirectionsService();
            directionsRenderer = new google.maps.DirectionsRenderer();
            directionsRenderer.setMap(map);
        
            new google.maps.places.Autocomplete(document.getElementById("start"));
            new google.maps.places.Autocomplete(document.getElementById("end"));
        }
        
        function calculateRoute() {
            const start = document.getElementById("start").value;
            const end = document.getElementById("end").value;
        
            directionsService.route({
                origin: start,
                destination: end,
                travelMode: google.maps.TravelMode.DRIVING,
            }, (response, status) => {
                if (status === "OK") {
                    directionsRenderer.setDirections(response);
                } else {
                    window.alert("Directions request failed due to " + status);
                }
            });
        }

        document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('username').value = localStorage.getItem('username') || '';
    document.getElementById('phoneNumber').value = localStorage.getItem('phone') || '';
    document.getElementById('email').value = localStorage.getItem('email') || '';


    
});

