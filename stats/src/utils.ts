export const dateStringToDate = (dateString: string): Date => {
    const parts = dateString
        .split('/')
        .map(v => parseInt(v));

    if(!parts[0] || !parts[1] || !parts[2]) {
        throw new Error('invalid date format');
    }
    return new Date(parts[2], parts[1]-1, parts[0]);
}
