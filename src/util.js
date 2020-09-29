export const getDate = () => {
    const now = new Date();
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
        'November', 'December'
    ];
    return `${months[now.getMonth()]} ${now.getFullYear()}`;
};

export const getFullDate = () => {
    const now = new Date();
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
        'November', 'December'
    ];
    return `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
};

export const getDay = () => {
    const now = new Date();
    const days = [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
    ]
    return `It's ${days[now.getDay()]}`;
};

export const getTime = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
};