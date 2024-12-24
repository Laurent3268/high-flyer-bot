// Update the current time
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('current-time').textContent = timeString;
}
setInterval(updateTime, 1000);
updateTime(); // Initial call to display time immediately

// Generate random predictions with new rules
function generatePredictions() {
    const now = new Date();

    // Generate exit prediction
    let exit;
    if (Math.random() < 0.77) {
        exit = (Math.random() * (9.00 - 3.01) + 3.01).toFixed(2);
    } else {
        exit = (Math.random() * (100.00 - 9.01) + 9.01).toFixed(2);
    }

    // Generate protection prediction
    let protection;
    if (exit >= 20.00) {
        protection = (Math.random() * (9.00 - 5.00) + 5.00).toFixed(2);
    } else {
        protection = (Math.random() * (3.00 - 1.50) + 1.50).toFixed(2);
    }

    // Calculate next entry times (10-30 seconds ahead)
    const protectionTime = new Date(now.getTime() + (Math.random() * (30 - 10) + 10) * 1000);
    const exitTime = new Date(now.getTime() + (Math.random() * (30 - 10) + 10) * 1000);

    // Update the DOM
    document.getElementById('protection-value').textContent = `${protection}x`;
    document.getElementById('protection-time').textContent = `Next Entry: ${protectionTime.toLocaleTimeString()}`;
    document.getElementById('exit-value').textContent = `${exit}x`;
    document.getElementById('exit-time').textContent = `Next Entry: ${exitTime.toLocaleTimeString()}`;
}

// Open betting site
function openBettingSite() {
    window.open('https://media.premierbetpartners.com/redirect.aspx?pid=54483&bid=5072', '_blank');
}

// Update predictions at intervals between 50 and 90 seconds
function startPredictionUpdates() {
    generatePredictions();
    const interval = Math.random() * (90000 - 50000) + 50000; // Random interval between 50s and 90s
    setTimeout(startPredictionUpdates, interval);
}
startPredictionUpdates();
