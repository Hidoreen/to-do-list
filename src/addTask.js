/* eslint-disable no-alert */
export default function addTask() {
  const addTaskBtn = document.querySelector('.addBtn');
  const displayBar = document.querySelector('.left-sidebar');
  let isButtonClicked = false;

  const handleClick = () => {
    if (!isButtonClicked) {
      isButtonClicked = true;

      const userInput = document.createElement('input');
      userInput.classList.add('taskTitle');
      userInput.placeholder = 'Enter Task Title';

      const submitButton = document.createElement('button');
      submitButton.classList.add('submitButton');
      submitButton.textContent = 'Add';

      const cancelButton = document.createElement('button');
      cancelButton.classList.add('cancelButton');
      cancelButton.textContent = 'Cancel';

      // append children
      displayBar.appendChild(userInput);
      displayBar.appendChild(submitButton);
      displayBar.appendChild(cancelButton);

      const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      // Display stored tasks on the webpage
      storedTasks.forEach((task) => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('taskDiv');
        taskDiv.textContent = task;
        displayBar.insertBefore(taskDiv, userInput);
      });

      // Submit Button Event
      submitButton.addEventListener('click', () => {
        const taskContent = userInput.value.trim();
        if (taskContent === '') {
          alert('Task cannot be empty');
        } else {
          const taskDiv = document.createElement('div');
          taskDiv.classList.add('taskDiv');
          taskDiv.textContent = taskContent;
          displayBar.insertBefore(taskDiv, userInput);

          storedTasks.push(taskContent);
          localStorage.setItem('tasks', JSON.stringify(storedTasks));
          userInput.value = '';
        }
      });

      // Cancel Button Event
      cancelButton.addEventListener('click', () => {
        displayBar.removeChild(userInput);
        displayBar.removeChild(submitButton);
        displayBar.removeChild(cancelButton);
        isButtonClicked = false; // Reset the flag
      });
    }
  };

  addTaskBtn.addEventListener('click', handleClick);
}
