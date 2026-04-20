const studentBtn = document.getElementById('studentBtn');
const teacherBtn = document.getElementById('teacherBtn');
const teacherIdInput = document.getElementById('teacherId');
const teacherFields = document.querySelectorAll('.teacher-field');

studentBtn.addEventListener('click', () => {
  studentBtn.classList.add('active');
  teacherBtn.classList.remove('active');
  teacherIdInput.style.display = 'none';
  teacherFields.forEach(field => field.style.display = 'block');
});

teacherBtn.addEventListener('click', () => {
  teacherBtn.classList.add('active');
  studentBtn.classList.remove('active');
  teacherIdInput.style.display = 'block';
  teacherFields.forEach(field => field.style.display = 'none');
});
