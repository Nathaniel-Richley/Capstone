function addExercise() {
    const exercise = document.getElementById('exercise').value;
    const sets = document.getElementById('sets').value;
    const reps = document.getElementById('reps').value;
    const calories = document.getElementById('calories').value;
    const equipment = document.getElementById('equipment').value;

    if (exercise && sets && reps && calories && equipment) {
        const listItem = document.createElement('li');
        listItem.textContent = `${exercise} - ${sets} sets of ${reps} reps, ${calories} calories burned, Equipment: ${equipment}`;
        listItem.onclick = function() {
            listItem.remove(); 
        };

        document.getElementById('exerciseList').appendChild(listItem);

        
        document.getElementById('exercise').value = '';
        document.getElementById('sets').value = '';
        document.getElementById('reps').value = '';
        document.getElementById('calories').value = '';
        document.getElementById('equipment').value = '';
    } else {
        alert('Please fill out all fields');
    }
}
