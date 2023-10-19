//This module parses .env file data

module.exports = data => Object.fromEntries(data.split('\n').map(line => {
    if (!line.includes('=') || line.trim().startsWith('#')) return null;
    const key = line.slice(0, line.indexOf('='));
    const value = line.slice(line.indexOf('=') + 1);
    return (key && value) ? [key, value] : null;
}).filter(item => item !== null))