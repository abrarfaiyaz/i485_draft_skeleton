async function convertTexToPdf() {
    const texInput = document.getElementById('texInput').value;
    const response = await fetch('https://api.example.com/convert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tex: texInput }),
    });

    if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        document.getElementById('pdfOutput').src = url;
    } else {
        alert('Failed to convert TeX to PDF. Please try again.');
    }
}
