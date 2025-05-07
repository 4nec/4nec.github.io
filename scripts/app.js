document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const deleteAllButton = document.getElementById("delete-all-button");
    const deleteCheckedButton = document.getElementById('delete-checked-button');  // Tombol delete checked

    const music = document.getElementById('background-music');
    const toggleButton = document.getElementById('toggle-music');
    const iconPath = document.getElementById('icon-path');
    const label = document.getElementById('music-label');
    const musicIcon = document.getElementById('music-icon');

    const aboutButton = document.getElementById("about-button");
    const aboutModal = document.getElementById("about-modal");
    const closeAbout = document.getElementById("close-about");

    const taskList = document.getElementById('task-list');
    deleteAllButton.addEventListener("click", deleteAllTasks);
    deleteCheckedButton.addEventListener("click", deleteCheckedTasks);  // Event listener untuk tombol delete checked

    addTaskButton.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskClick);

    addTaskButton.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    let isPlaying = false;

    toggleButton.addEventListener('click', () => {
        musicIcon.classList.add("animate");
    
        if (!isPlaying) {
            music.play();
            iconPath.setAttribute("d", "M6 19h4.5V5H6v14zm7.5-14v14H18V5h-4.5z"); // Pause Icon
            label.textContent = "Pause Music";
        } else {
            music.pause();
            music.currentTime = 0;
            iconPath.setAttribute("d", "M8 5v14l11-7z"); // Play Icon
            label.textContent = "Play Music";
        }
        isPlaying = !isPlaying;
    
        setTimeout(() => {
            musicIcon.classList.remove("animate");
        }, 300);
    });

    aboutButton.addEventListener("click", () => {
        aboutModal.style.display = "flex";
        aboutModal.classList.remove("hide");
        aboutModal.classList.add("show");
    });
    
    closeAbout.addEventListener("click", () => {
        aboutModal.classList.remove("show");
        aboutModal.classList.add("hide");
        setTimeout(() => {
            aboutModal.style.display = "none";
        }, 200);
    });
    
    window.addEventListener("click", (e) => {
        if (e.target === aboutModal) {
            aboutModal.classList.remove("show");
            aboutModal.classList.add("hide");
            setTimeout(() => {
                aboutModal.style.display = "none";
            }, 200);
        }
    });

    function deleteAllTasks() {
        const confirmation = confirm("Are you sure you want to delete all tasks?");
        if (confirmation) {
            const tasks = taskList.getElementsByTagName("li");
            Array.from(tasks).forEach((task) => {
                task.style.animation = "fadeOut 1s forwards"; 
            });
            setTimeout(() => {
                taskList.innerHTML = "";
            }, 1000); 
        }
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const listItem = document.createElement('li');
        listItem.classList.add('task-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('task-checkbox');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-task-button');

        listItem.appendChild(checkbox);
        listItem.appendChild(taskSpan);
        listItem.appendChild(removeButton);

        taskList.appendChild(listItem);
        taskInput.value = '';
    }

    function handleTaskClick(event) {
        if (event.target.classList.contains('remove-task-button')) {
            const taskItem = event.target.parentElement;
            taskItem.classList.add('removed');
            taskItem.addEventListener('transitionend', () => {
                taskList.removeChild(taskItem);
            });
        } else if (event.target.classList.contains('task-checkbox')) {
            const taskItem = event.target.parentElement;
            const taskSpan = taskItem.querySelector('span');
            if (event.target.checked) {
                taskSpan.classList.add('completed');
            } else {
                taskSpan.classList.remove('completed');
            }
        }
    }

    // Fungsi untuk menghapus task yang dicentang
    function deleteCheckedTasks() {
        const checkedTasks = document.querySelectorAll('input[type="checkbox"]:checked');
        
        // Hapus setiap task yang dicentang
        checkedTasks.forEach((checkbox) => {
            const taskItem = checkbox.closest('li');
            taskItem.classList.add('removed');
            taskItem.addEventListener('transitionend', () => {
                taskList.removeChild(taskItem);
            });
        });
    }
});
