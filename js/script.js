document.getElementById('uploadForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way
    
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    
    if (!file) {
        alert('Please select a file.');
        return;
    }

    try {
        // Upload the file to File.io
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('https://file.io', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Failed to upload file.');
        }

        const data = await response.json();
        const fileUrl = data.link; // Get the URL of the uploaded file

        // Create a form dynamically to open the file in Overleaf
        const overleafForm = document.createElement('form');
        overleafForm.action = 'https://www.overleaf.com/docs';
        overleafForm.method = 'post';
        overleafForm.target = '_blank';

        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = 'snip_uri';
        input.value = fileUrl;

        overleafForm.appendChild(input);
        document.body.appendChild(overleafForm);

        overleafForm.submit();
        document.body.removeChild(overleafForm); // Clean up
    } catch (error) {
        alert(`An error occurred: ${error.message}`);
    }
});
