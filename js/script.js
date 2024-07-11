// document.getElementById('uploadForm').addEventListener('submit', async function(event) {
//     event.preventDefault(); // Prevent the form from submitting the default way

//     const pApplicant = document.getElementById('pApplicant').value;
//     const pPhone = document.getElementById('pPhone').value;
//     const pEmail = document.getElementById('pEmail').value;
//     const pAddress = document.getElementById('pAddress').value;
//     const pCity = document.getElementById('pCity').value;
//     const pState = document.getElementById('pState').value;
//     const pZip = document.getElementById('pZip').value;
//     const Anum = document.getElementById('Anum').value;
//     const priorityDate = document.getElementById('priorityDate').value;
//     const ReceiptNumber = document.getElementById('ReceiptNumber').value;

//     const dApplicant = document.getElementById('dApplicant').value;
//     const dPhone = document.getElementById('dPhone').value;
//     const dEmail = document.getElementById('dEmail').value;
//     const dAddress = document.getElementById('dAddress').value;
//     const dCity = document.getElementById('dCity').value;
//     const dState = document.getElementById('dState').value;
//     const dZip = document.getElementById('dZip').value;

//     const USCISATTN = document.getElementById('USCISATTN').value;
//     const USCISPOBOX = document.getElementById('USCISPOBOX').value;
//     const USCISCITY = document.getElementById('USCISCITY').value;
//     const USCISSTATE = document.getElementById('USCISSTATE').value;
//     const USCISzip = document.getElementById('USCISzip').value;

//     const texFiles = [
//         'https://raw.githubusercontent.com/abrarfaiyaz/i485_draft_skeleton/main/files/dervative_applicant_list_of_doc.tex',
//         'https://raw.githubusercontent.com/abrarfaiyaz/i485_draft_skeleton/main/files/evidence_p_applicant.tex',
//         'https://raw.githubusercontent.com/abrarfaiyaz/i485_draft_skeleton/main/files/evidences_d_applicant.tex',
//         'https://raw.githubusercontent.com/abrarfaiyaz/i485_draft_skeleton/main/files/main.tex',
//         'https://raw.githubusercontent.com/abrarfaiyaz/i485_draft_skeleton/main/files/principal_applicant_list_of_doc.tex'
//     ];

//     try {
//         // Create the variables TeX file with user input
//         const variablesTex = `
// \\newcommand{\\pApplicant}{${pApplicant}}
// \\newcommand{\\pPhone}{${pPhone}}
// \\newcommand{\\pEmail}{${pEmail}}
// \\newcommand{\\pAddress}{${pAddress}}
// \\newcommand{\\pCity}{${pCity}}
// \\newcommand{\\pState}{${pState}}
// \\newcommand{\\pZip}{${pZip}}
// \\newcommand{\\Anum}{${Anum}}
// \\newcommand{\\priorityDate}{${priorityDate}}
// \\newcommand{\\ReceiptNumber}{${ReceiptNumber}}
// \\newcommand{\\dApplicant}{${dApplicant}}
// \\newcommand{\\dPhone}{${dPhone}}
// \\newcommand{\\dEmail}{${dEmail}}
// \\newcommand{\\dAddress}{${dAddress}}
// \\newcommand{\\dCity}{${dCity}}
// \\newcommand{\\dState}{${dState}}
// \\newcommand{\\dZip}{${dZip}}
// \\newcommand{\\USCISATTN}{${USCISATTN}}
// \\newcommand{\\USCISPOBOX}{${USCISPOBOX}}
// \\newcommand{\\USCISCITY}{${USCISCITY}}
// \\newcommand{\\USCISSTATE}{${USCISSTATE}}
// \\newcommand{\\USCISzip}{${USCISzip}}
// \\newcommand{\\USCISaddress}{U.S. Department of Homeland Security (USCIS)\\\\Attn: \\USCISATTN\\\\PO Box \\USCISPOBOX\\\\\\USCISCITY, \\USCISSTATE - \\USCISzip}
//         `;

//         const variablesFile = new Blob([variablesTex], { type: 'text/plain' });

//         // Prepare FormData for the files to be uploaded
//         const formData = new FormData();
//         formData.append('snip_name[]', 'variables.tex');
//         formData.append('snip_uri[]', URL.createObjectURL(variablesFile));

//         texFiles.forEach((fileUrl, index) => {
//             const fileName = fileUrl.split('/').pop();
//             formData.append('snip_name[]', fileName);
//             formData.append('snip_uri[]', fileUrl);
//         });

//         // Open files in Overleaf
//         const response = await fetch('https://www.overleaf.com/docs', {
//             method: 'POST',
//             body: formData,
//         });

//         if (response.ok) {
//             window.open(response.url, '_blank');
//         } else {
//             alert('Failed to open in Overleaf. Please try again.');
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         alert('An error occurred. Please try again.');
//     }
// });

document.getElementById('uploadForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // const pApplicant = document.getElementById('pApplicant').value;
    // const dApplicant = document.getElementById('dApplicant').value;
    // const pPhone = document.getElementById('pPhone').value;
    // const dPhone = document.getElementById('dPhone').value;
    // const pEmail = document.getElementById('pEmail').value;
    // const dEmail = document.getElementById('dEmail').value;
    // const pAddress = document.getElementById('pAddress').value;
    // const pCity = document.getElementById('pCity').value;
    // const dAddress = document.getElementById('dAddress').value;
    // const dCity = document.getElementById('dCity').value;
    // const Anum = document.getElementById('Anum').value;
    // const priorityDate = document.getElementById('priorityDate').value;
    // const ReceiptNumber = document.getElementById('ReceiptNumber').value;
    // const USCISaddress = document.getElementById('USCISaddress').value;

    const pApplicant = document.getElementById('pApplicant').value;
    const dApplicant = document.getElementById('dApplicant').value;
    const pPhone = document.getElementById('pPhone').value;
    const dPhone = document.getElementById('dPhone').value;
    const pEmail = document.getElementById('pEmail').value;
    const dEmail = document.getElementById('dEmail').value;
    const pAddress = document.getElementById('pAddress').value;
    const pCity = document.getElementById('pCity').value;
    const pState = document.getElementById('pState').value;
    const pZip = document.getElementById('pZip').value;
    const dAddress = document.getElementById('dAddress').value;
    const dCity = document.getElementById('dCity').value;
    const dState = document.getElementById('dState').value;
    const dZip = document.getElementById('dZip').value;
    const Anum = document.getElementById('Anum').value;
    const priorityDate = document.getElementById('priorityDate').value;
    const ReceiptNumber = document.getElementById('ReceiptNumber').value;
    const USCISATTN = document.getElementById('USCISATTN').value;
    const USCISPOBOX = document.getElementById('USCISPOBOX').value;
    const USCISCITY = document.getElementById('USCISCITY').value;
    const USCISSTATE = document.getElementById('USCISSTATE').value;
    const USCISzip = document.getElementById('USCISzip').value;

    const texFiles = [
        'https://raw.githubusercontent.com/abrarfaiyaz/i485_draft_skeleton/main/files/dervative_applicant_list_of_doc.tex',
        'https://raw.githubusercontent.com/abrarfaiyaz/i485_draft_skeleton/main/files/evidence_p_applicant.tex',
        'https://raw.githubusercontent.com/abrarfaiyaz/i485_draft_skeleton/main/files/evidences_d_applicant.tex',
        'https://raw.githubusercontent.com/abrarfaiyaz/i485_draft_skeleton/main/files/main.tex',
        'https://raw.githubusercontent.com/abrarfaiyaz/i485_draft_skeleton/main/files/principal_applicant_list_of_doc.tex'
    ];

    try {
        // Create the variables TeX file with user input
        // const variablesTex = `
        // \\newcommand{\\pApplicant}{${pApplicant}}
        // \\newcommand{\\dApplicant}{${dApplicant}}
        // \\newcommand{\\pPhone}{${pPhone}}
        // \\newcommand{\\dPhone}{${dPhone}}
        // \\newcommand{\\pEmail}{${pEmail}}
        // \\newcommand{\\dEmail}{${dEmail}}
        // \\newcommand{\\pAddress}{${pAddress}}
        // \\newcommand{\\pCity}{${pCity}}
        // \\newcommand{\\dAddress}{${dAddress}}
        // \\newcommand{\\dCity}{${dCity}}
        // \\newcommand{\\Anum}{${Anum}}
        // \\newcommand{\\priorityDate}{${priorityDate}}
        // \\newcommand{\\ReceiptNumber}{${ReceiptNumber}}
        // \\newcommand{\\USCISaddress}{${USCISaddress}}
        // `;
        const variablesTex = `
        \\newcommand{\\pApplicant}{${pApplicant}}
        \\newcommand{\\pPhone}{${pPhone}}
        \\newcommand{\\pEmail}{${pEmail}}
        \\newcommand{\\pAddress}{${pAddress}}
        \\newcommand{\\pCity}{${pCity}}
        \\newcommand{\\pState}{${pState}}
        \\newcommand{\\pZip}{${pZip}}
        \\newcommand{\\Anum}{${Anum}}
        \\newcommand{\\priorityDate}{${priorityDate}}
        \\newcommand{\\ReceiptNumber}{${ReceiptNumber}}
        \\newcommand{\\dApplicant}{${dApplicant}}
        \\newcommand{\\dPhone}{${dPhone}}
        \\newcommand{\\dEmail}{${dEmail}}
        \\newcommand{\\dAddress}{${dAddress}}
        \\newcommand{\\dCity}{${dCity}}
        \\newcommand{\\dState}{${dState}}
        \\newcommand{\\dZip}{${dZip}}      
        \\newcommand{\\USCISATTN}{${USCISATTN}}
        \\newcommand{\\USCISPOBOX}{${USCISPOBOX}}
        \\newcommand{\\USCISCITY}{${USCISCITY}}
        \\newcommand{\\USCISSTATE}{${USCISSTATE}}
        \\newcommand{\\USCISzip}{${USCISzip}}
        \\newcommand{\\USCISaddress}{U.S. Department of Homeland Security(USCIS)\\\\Attn: \\USCISATTN\\\\PO Box \\USCISPOBOX\\\\\\USCISCITY, \\USCISSTATE - \\USCISzip}
    `;

        // Upload the variables TeX file to File.io or another service
        const formData = new FormData();
        const blob = new Blob([variablesTex], { type: 'text/plain' });
        formData.append('file', blob, 'variables.tex');

        const response = await fetch('https://file.io', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Failed to upload variables file.');
        }

        const data = await response.json();
        const variablesTexUrl = data.link;

        // Prepare the snip_uri and snip_name arrays for Overleaf
        const snipUris = [variablesTexUrl, ...texFiles];
        const snipNames = ['variables.tex', 'dervative_applicant_list_of_doc.tex', 'evidence_p_applicant.tex', 'evidences_d_applicant.tex', 'main.tex', 'principal_applicant_list_of_doc.tex'];

        // Construct the URL for opening in Overleaf
        const overleafUrl = 'https://www.overleaf.com/docs?' +
                            snipUris.map(uri => `snip_uri[]=${encodeURIComponent(uri)}`).join('&') +
                            '&' +
                            snipNames.map(name => `snip_name[]=${encodeURIComponent(name)}`).join('&');

        // Open Overleaf in a new tab/window
        window.open(overleafUrl, '_blank');
    } catch (error) {
        alert(`An error occurred: ${error.message}`);
    }
});

