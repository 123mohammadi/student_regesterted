


// د عکس لینک لپاره ایونت
document.getElementById('teacherPhoto').addEventListener('click', function() {
    window.open('https://example.com/teacher-profile', '_blank');
});

// د ثبت نام فورم مدیریت
const form = document.getElementById('registrationForm');
const studentsContainer = document.getElementById('studentsContainer');
const studentCount = document.getElementById('studentCount');

let students = JSON.parse(localStorage.getItem('students')) || [];

function updateStudentsList() {
    studentsContainer.innerHTML = '';
    students.forEach((student, index) => {
        const div = document.createElement('div');
        div.className = 'student-item';
        div.innerHTML = `
            <strong>${index + 1}.</strong> 
            ${student.name} - 
            ${student.email}
        `;
        studentsContainer.appendChild(div);
    });
    studentCount.textContent = students.length;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newStudent = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value
    };

    students.push(newStudent);
    localStorage.setItem('students', JSON.stringify(students));
    
    updateStudentsList();
    form.reset();
});

// لومړی چارج کول
updateStudentsList();

// د عکس لپاره د hover ایفکټ
const profileImg = document.querySelector('.profile-img');
profileImg.addEventListener('mouseover', () => {
    profileImg.style.transform = 'scale(1.05) rotate(5deg)';
});
profileImg.addEventListener('mouseout', () => {
    profileImg.style.transform = 'scale(1) rotate(0deg)';
});