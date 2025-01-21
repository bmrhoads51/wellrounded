// Fetch data dynamically and display it
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const contentDiv = document.getElementById('dynamic-content');
        contentDiv.innerHTML = `
            <h2>${data.title}</h2>
            <p>${data.description}</p>
        `;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        document.getElementById('dynamic-content').textContent = 'Failed to load content.';
    });
