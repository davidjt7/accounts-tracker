export const getDate = () => {
    const now = new Date();
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
        'November', 'December'
    ];
    return `${months[now.getMonth()]} ${now.getFullYear()}`;
};