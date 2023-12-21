const projects = document.querySelector('.projects');
const addProjectBtn = document.querySelector('.addProjectBtn');
const projectInput = document.getElementById('projectInput');
const cancelProject = document.getElementById('cancelProject');
const form = document.querySelector('.hiddenForm');
const userInput = document.getElementById('userInput');
const errorMsg = document.querySelector('.errorMsg');

function createProjects() {

  addProjectBtn.addEventListener('click', () => {
    projectInput.style.display = (projectInput.style.display === 'none') ? 'block' : 'none';
  });
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formValidation();
    projectInput.style.display = 'none';
  });

  cancelProject.addEventListener('click', () => {
    projectInput.style.display = 'none';
  });
  
  const formValidation = () => {
    if (userInput.value === '') {
      errorMsg.innerHTML = 'Project can not be empty';
    } else {
      errorMsg.innerHTML = '';
      acceptData();
    }
  };
  
  const objProjects = {};
  const acceptData = () => {
    objProjects['key1'] = userInput.value;
    console.log('data accepted');
    createProject();
  };
  
  const createProject = () => {
    projects.innerHTML += `<div>
            <p>${objProjects.key1}</p>
            <span class="options">
                <i onClick = "deleteProject(this)" class="fa-solid fa-trash-can"></i>
                <i onClick = "editProject(this)" class="fa-regular fa-pen-to-square"></i>
            </span>
        </div>`;

  userInput.value = '';
  };

  window.deleteProject = (e) => {
      e.parentElement.parentElement.remove();
  }
    
  window.editProject = (e) => {
      userInput.value = e.parentElement.previousElementSibling.innerHTML;
      projectInput.style.display = 'block';
      e.parentElement.parentElement.remove();
  };

};


export default createProjects;
