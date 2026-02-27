const API_URL = '/api/tasks';

// DOM Elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const emptyState = document.getElementById('empty-state');
const completedCountEl = document.getElementById('completed-count');
const totalCountEl = document.getElementById('total-count');

// State
let tasks = [];

// Initialize app
document.addEventListener('DOMContentLoaded', fetchTasks);

// Event Listeners
taskForm.addEventListener('submit', addTask);

// Functions
async function fetchTasks() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Falha ao buscar tarefas');
        
        tasks = await response.json();
        renderTasks();
    } catch (error) {
        console.error('Erro:', error);
        // Exibir erro amigável ao usuário
    }
}

async function addTask(e) {
    e.preventDefault();
    
    const title = taskInput.value.trim();
    if (!title) return;
    
    const newTask = {
        title: title,
        completed: false
    };
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTask)
        });
        
        if (!response.ok) throw new Error('Falha ao adicionar tarefa');
        
        const addedTask = await response.json();
        tasks.push(addedTask);
        
        taskInput.value = '';
        renderTasks();
    } catch (error) {
        console.error('Erro:', error);
    }
}

async function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;
    
    const updatedTask = { ...task, completed: !task.completed };
    
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedTask)
        });
        
        if (!response.ok) throw new Error('Falha ao atualizar tarefa');
        
        const returnedTask = await response.json();
        tasks = tasks.map(t => t.id === id ? returnedTask : t);
        renderTasks();
    } catch (error) {
        console.error('Erro:', error);
        // Reverter UI em caso de erro
        renderTasks();
    }
}

async function deleteTask(id) {
    // Animação de saída
    const taskElement = document.getElementById(`task-${id}`);
    if (taskElement) {
        taskElement.style.transform = 'translateX(20px)';
        taskElement.style.opacity = '0';
    }
    
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) throw new Error('Falha ao deletar tarefa');
        
        tasks = tasks.filter(t => t.id !== id);
        setTimeout(renderTasks, 300); // Esperar a animação terminar
    } catch (error) {
        console.error('Erro:', error);
        renderTasks();
    }
}

function renderTasks() {
    // Update stats
    const completedCount = tasks.filter(t => t.completed).length;
    completedCountEl.textContent = completedCount;
    totalCountEl.textContent = tasks.length;
    
    // Clear current list (except empty state)
    taskList.innerHTML = '';
    
    if (tasks.length === 0) {
        taskList.appendChild(emptyState);
        emptyState.style.display = 'block';
        return;
    }
    
    emptyState.style.display = 'none';
    
    // Render tasks
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        li.id = `task-${task.id}`;
        
        li.innerHTML = `
            <div class="task-content">
                <input type="checkbox" class="checkbox" ${task.completed ? 'checked' : ''} 
                       onchange="toggleTask(${task.id})">
                <span class="task-title">${escapeHTML(task.title)}</span>
            </div>
            <button class="delete-btn" onclick="deleteTask(${task.id})" aria-label="Deletar tarefa">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        `;
        
        taskList.appendChild(li);
    });
}

// Utility to prevent XSS
function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}
