// Modal Handling - Updated with proper event listeners
const dietPlanModal = document.getElementById('dietPlanModal');
const gymWorkoutModal = document.getElementById('gymWorkoutModal');
const calisthenicsWorkoutModal = document.getElementById('calisthenicsWorkoutModal');

// Get all modal close buttons
const dietPlanClose = document.getElementById('dietPlanClose');
const gymWorkoutClose = document.getElementById('gymWorkoutClose');
const calisthenicsWorkoutClose = document.getElementById('calisthenicsWorkoutClose');

// Function to open modal
function openModal(modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Function to close modal
function closeModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners for opening modals
document.getElementById('viewDietPlan').addEventListener('click', () => openModal(dietPlanModal));
document.getElementById('viewGymWorkout').addEventListener('click', () => openModal(gymWorkoutModal));
document.getElementById('viewCalisthenicsWorkout').addEventListener('click', () => openModal(calisthenicsWorkoutModal));

// Event listeners for closing modals
dietPlanClose.addEventListener('click', () => closeModal(dietPlanModal));
gymWorkoutClose.addEventListener('click', () => closeModal(gymWorkoutModal));
calisthenicsWorkoutClose.addEventListener('click', () => closeModal(calisthenicsWorkoutModal));

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === dietPlanModal) closeModal(dietPlanModal);
    if (e.target === gymWorkoutModal) closeModal(gymWorkoutModal);
    if (e.target === calisthenicsWorkoutModal) closeModal(calisthenicsWorkoutModal);
});
