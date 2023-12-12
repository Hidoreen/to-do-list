export default function addProject() {
  const leftSidebar = document.querySelector('.left-sidebar');
  const addButton = document.querySelector('.addBtn');
  let clicked = false;

  function createProject() {
    if (!clicked) {
      const projectContent = document.createElement('div');
      projectContent.setAttribute('class', 'projectContent');

      const userInput = document.createElement('input');
      userInput.classList.add('userInput');
      userInput.placeholder = 'Add Project';
      projectContent.appendChild(userInput);

      const addProjectBtn = document.createElement('button');
      addProjectBtn.classList.add('addProjectBtn');
      addProjectBtn.textContent = 'Add';
      projectContent.appendChild(addProjectBtn);

      const cancelButton = document.createElement('button');
      cancelButton.classList.add('cancelButton');
      cancelButton.textContent = 'Cancel';
      projectContent.appendChild(cancelButton);

      // append children
      leftSidebar.insertBefore(projectContent, addButton);

      // add eventListeners to project buttons
      addProjectBtn.addEventListener('click', () => {
        const userContent = userInput.value.trim();
        if (!userContent) {
          alert('Project can not be empty');
        } else {
          const projectDisplay = document.createElement('div');
          projectDisplay.classList.add('projectDisplay');
          projectDisplay.textContent = userContent;
          projectDisplay.style.backgroundColor = 'red';

          const iconElement = document.createElement('i');
          iconElement.classList.add('fa-solid', 'fa-xmark');

          projectDisplay.appendChild(iconElement);
          leftSidebar.insertBefore(projectDisplay, projectContent);

          userInput.value = '';
        }
      });

      cancelButton.addEventListener('click', () => {
        leftSidebar.removeChild(projectContent);
      });

      clicked = true;
    }
  }

  addButton.addEventListener('click', createProject);
}
