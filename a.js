document.getElementById('profile-picture').addEventListener('change', function(event) {
    var preview = document.getElementById('image-preview');
    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            preview.style.backgroundImage = 'url(' + e.target.result + ')';
            preview.classList.add('has-image');
        };
        reader.readAsDataURL(event.target.files[0]);
    } else {
        preview.style.backgroundImage = 'none';
        preview.classList.remove('has-image');
    }
});
