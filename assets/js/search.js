document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-box');
    const resultsContainer = document.getElementById('search-results');
    const defaultList = document.getElementById('default-list');
    let posts = [];

    // Fetch data once
    fetch('/search.json')
        .then(response => response.json())
        .then(data => { posts = data; });

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();

        // If empty, show default list, hide results
        if (!query) {
            defaultList.style.display = 'block';
            resultsContainer.style.display = 'none';
            return;
        }

        // Filter posts (Fuzzy-ish match on title or content)
        const filtered = posts.filter(post => 
            post.title.toLowerCase().includes(query) || 
            post.content.toLowerCase().includes(query)
        );

        // Render Results
        defaultList.style.display = 'none';
        resultsContainer.style.display = 'block';
        
        if (filtered.length > 0) {
            resultsContainer.innerHTML = filtered.map(post => `
                <li style="margin-bottom: 2rem; list-style: none;">
                    <span style="font-family: 'Courier New'; opacity: 0.6; font-size: 0.9rem;">${post.date}</span><br>
                    <a href="${post.url}" style="font-size: 1.4rem; font-weight: bold; text-decoration: none;">${post.title}</a>
                    <p style="margin-top: 0.5rem; opacity: 0.8;">${post.content}...</p>
                </li>
            `).join('');
        } else {
            resultsContainer.innerHTML = '<p style="opacity:0.6;">No matching notes found.</p>';
        }
    });
});