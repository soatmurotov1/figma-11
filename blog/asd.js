// Blog ma'lumotlari (baza o'rnida ishlatamiz)
const posts = [
    {
        id: 1,
        title: "HTML va CSS asoslari",
        excerpt: "Veb-sayt yaratishning eng asosiy bosqichlari haqida to'liq ma'lumot oling.",
        date: "2024-02-10",
        image: "https://via.placeholder.com/400x200/4a90e2/ffffff?text=HTML+CSS"
    },
    {
        id: 2,
        title: "JavaScript nima uchun kerak?",
        excerpt: "Saytga jon bag'ishlash va interaktivlik qo'shish sirlari.",
        date: "2024-02-12",
        image: "https://via.placeholder.com/400x200/f1c40f/333333?text=JavaScript"
    },
    {
        id: 3,
        title: "Responsive Dizayn qoidalari",
        excerpt: "Saytingizni barcha qurilmalarda chiroyli ko'rsatish usullari.",
        date: "2024-02-14",
        image: "https://via.placeholder.com/400x200/e74c3c/ffffff?text=Responsive"
    },
    {
        id: 4,
        title: "Dasturchi bo'lish yo'li",
        excerpt: "Qanday qilib noldan professional dasturchi bo'lish mumkin?",
        date: "2024-02-15",
        image: "https://via.placeholder.com/400x200/2ecc71/ffffff?text=Career"
    }
];

const blogGrid = document.getElementById('blog-grid');
const searchInput = document.getElementById('search-input');
const themeToggle = document.getElementById('theme-toggle');

// 1. Maqolalarni ekranga chiqarish funksiyasi
function displayPosts(postsToShow) {
    blogGrid.innerHTML = ''; // Tozalash
    postsToShow.forEach(post => {
        const postElement = document.createElement('article');
        postElement.classList.add('card');
        
        postElement.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
            <div class="card-content">
                <span class="card-date">${post.date}</span>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <a href="#" class="btn">O'qish</a>
            </div>
        `;
        
        blogGrid.appendChild(postElement);
    });
}

// 2. Qidiruv funksiyasi
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredPosts = posts.filter(post => 
        post.title.toLowerCase().includes(searchTerm) || 
        post.excerpt.toLowerCase().includes(searchTerm)
    );
    displayPosts(filteredPosts);
});

// 3. Dark Mode (Tungi rejim) funksiyasi
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Dastlab barcha maqolalarni chiqarish
displayPosts(posts);