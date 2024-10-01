export function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString(navigator.language, { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
}
