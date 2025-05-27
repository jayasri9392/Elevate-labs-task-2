document.getElementById('addBtn').addEventListener('click', function () {
  const input = document.getElementById('taskInput');
  const task = input.value.trim();
  if (task === '') return;
 const li = document.createElement('li');
  li.textContent = task;
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(deleteBtn);
  document.getElementById('taskList').appendChild(li);
  input.value = '';
});