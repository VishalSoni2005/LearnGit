document.addEventListener('DOMContentLoaded', () => {
    const startTaskButton = document.getElementById('startTask');
    const taskStatusDiv = document.getElementById('taskStatus');

    function simulateTask(duration) {
        return new Promise((resolve, reject) => {
            taskStatusDiv.innerHTML = '<p>Task started...</p>';
            setTimeout(() => {
                const success = true; // Change this to false to simulate a failure
                if (success) {
                    resolve('Task completed successfully!');
                } else {
                    reject('Task failed.');
                }
            }, duration);
        });
    }

    startTaskButton.addEventListener('click', () => {
        simulateTask(3000)
            .then(message => {
                taskStatusDiv.innerHTML = `<p>${message}</p>`;
            })
            .catch(error => {
                taskStatusDiv.innerHTML = `<p>${error}</p>`;
            });
    });
});
