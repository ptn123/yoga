document.addEventListener('DOMContentLoaded', () => {
    const challenges = [
        { 
            name: "Tree Pose (Vrikshasana)", 
            image: "vrikshasana.jpg",
            steps: "1. Stand tall and shift your weight to the left leg.\n2. Place the sole of your right foot on your left inner thigh.\n3. Bring your hands to a prayer position in front of your chest.\n4. Hold for 5-10 breaths and switch sides.",
            benefits: "Improves balance and stability in the legs, strengthens the tendons and ligaments of the feet, and helps you focus."
        },
        { 
            name: "Lotus Crown (Padma Bakasana)", 
            image: "images/padma_bakasana.jpg",
            steps: "1. Stand with feet wide apart.\n2. Turn your right foot out 90 degrees and left foot slightly in.\n3. Bend your right knee over the ankle.\n4. Extend your arms parallel to the floor and gaze over your right hand.\n5. Hold for 5-10 breaths and switch sides.",
            benefits: "Strengthens legs, opens hips and chest, and improves focus, balance, and stability."
        },
        // Add other poses similarly...
    ];

    const date = new Date();
    const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const challengeIndex = dayOfYear % challenges.length;

    document.getElementById('challenge-display').textContent = challenges[challengeIndex].name;
    document.getElementById('pose-steps').textContent = challenges[challengeIndex].steps;
    document.getElementById('pose-benefits').textContent = challenges[challengeIndex].benefits;

    const viewPoseBtn = document.getElementById('view-pose-btn');
    const poseImageContainer = document.getElementById('pose-image-container');
    const poseImage = document.getElementById('pose-image');

    viewPoseBtn.addEventListener('click', () => {
        if (poseImageContainer.style.display === 'none' || !poseImageContainer.style.display) {
            poseImage.src = challenges[challengeIndex].image;
            poseImageContainer.style.display = 'block';
            poseImageContainer.classList.add('active');
        } else {
            poseImageContainer.style.display = 'none';
            poseImageContainer.classList.remove('active');
        }
    });

    // Handle photo upload
    const uploadPhotoBtn = document.getElementById('upload-photo-btn');
    const photoInput = document.getElementById('photo-input');
    const userPhotoContainer = document.getElementById('user-photo-container');
    const userPhoto = document.getElementById('user-photo');

    uploadPhotoBtn.addEventListener('click', () => {
        photoInput.click();
    });

    photoInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                userPhoto.src = e.target.result;
                userPhotoContainer.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });
});
