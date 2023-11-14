let scene, camera, renderer;
        let earthMesh;

        class Marker {
            constructor(longitude, latitude, info) {
                this.longitude = longitude;
                this.latitude = latitude;
                this.info = info;
                this.mesh = this.createMesh();
            }

            createMesh() {
                const geometry = new THREE.SphereGeometry(0.02, 8, 8);
                const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
                const mesh = new THREE.Mesh(geometry, material);

                const phi = (90 - this.latitude) * (Math.PI / 180);
                const theta = (this.longitude + 180) * (Math.PI / 180);

                mesh.position.x = -Math.sin(phi) * Math.cos(theta);
                mesh.position.y = Math.cos(phi);
                mesh.position.z = Math.sin(phi) * Math.sin(theta);

                mesh.userData = { info: this.info };
                const hoverDistance = 1.05; // Adjust this value as needed
                mesh.position.multiplyScalar(hoverDistance);

                mesh.userData = { info: this.info };

                return mesh;
            }
        }
        const empires = [
    { name: "Roman Empire", longitude: 12.4964, latitude: 41.9028, info: "Roman Empire: Founded in 27 BC..." },
    { name: "Mongol Empire", longitude: 106.9172, latitude: 47.8864, info: "Mongol Empire: Founded in 1206..." },
    // ... add other empires ...
];
        function init() {

            scene = new THREE.Scene();

            
            
            camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);



            renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable transparency
            renderer.setClearColor(0x000000, 0); // Set clear color to black with 0 opacity
            renderer.setSize(window.innerWidth, window.innerHeight);
            earthDiv = document.querySelector('.Earth');
            earthDiv.appendChild(renderer.domElement);
            renderer.domElement.addEventListener('click', onMouseClick, false);

            const geometry = new THREE.SphereGeometry(1, 32, 32);
            const texture = new THREE.TextureLoader().load('images/ear0xuu2.jpg');
            const material = new THREE.MeshBasicMaterial({ map: texture });

            earthMesh = new THREE.Mesh(geometry, material);
            scene.add(earthMesh);
            earthMesh.position.x = 0; // Adjust as needed
            earthMesh.scale.set(1, 1, 1); // Ensures uniform scaling



            camera.position.set(2, 0.1, 3); // Adjust the x-value to move the Earth left or right within the view
 


            const ambientLight = new THREE.AmbientLight(0xcccccc);
            scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0xffffff);
            directionalLight.position.set(0, 3, 3);
            scene.add(directionalLight);

            let markers = empires.map(empire => new Marker(empire.longitude, empire.latitude, empire.info));

            markers.forEach(marker => {
        earthMesh.add(marker.mesh);
    });

            animate();
        }

        function animate() {
            requestAnimationFrame(animate);
            earthMesh.rotation.y += 0.003;
            renderer.render(scene, camera);
        }

        window.addEventListener('resize', onWindowResize, false);

        function onWindowResize() {
            camera.aspect = earthDiv.clientWidth / earthDiv.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(earthDiv.clientWidth, earthDiv.clientHeight);
        }
        window.addEventListener('resize', onWindowResize, false);
        
        
       
        
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        function onMouseClick(event) {
            event.preventDefault();

    const bounds = renderer.domElement.getBoundingClientRect();

    mouse.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
    mouse.y = - ((event.clientY - bounds.top) / bounds.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(earthMesh.children);

    console.log("Intersects: ", intersects);
    if (intersects.length > 0) {
        console.log("Intersected Object: ", intersects[0].object); // Log intersected object
    }
            

            for (let i = 0; i < intersects.length; i++) {
                if (intersects[i].object.userData.info) {
                    showCard(intersects[i].object.userData.info);
                    break;
                }
            }
        }

        window.addEventListener('click', onMouseClick, false);

        function showCard(info) {
            console.log("Showing card for: ", info);
    const existingCard = document.querySelector('.infoCard');
    if (existingCard) {
        existingCard.remove();
    }

    const infoCard = document.createElement('div');
    infoCard.classList.add('infoCard');

    // Assuming 'info' is an object with title, imgSrc, and description
    infoCard.innerHTML = `
        <h3>${info.title}</h3>
        <img src="${info.imgSrc}" alt="${info.title}" style="width:100%;">
        <p>${info.description}</p>
    `;

    document.body.appendChild(infoCard);
}




        init();