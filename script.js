//your JS code here. If required.
document.getElementById('enterBtn').addEventListener('click', function() {
    // Get the status paragraph element
    const statusParagraph = document.getElementById('status');

    // Change the text to "Entered Metaverse" and wrap it in an <h1> tag
    statusParagraph.innerHTML = '<h1>Entered Metaverse</h1>';
});