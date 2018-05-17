const sortText = ({value}) =>
    value
        .split(/\W+/)
        .sort((a, b) => a.localeCompare(b))
        .join(' ');

export const transform = (text) => {
    for(let i = 0; i < text.length; i++) {
        const x = text.item(i);
        x.innerHTML = sortText({value: x.innerHTML});
    };
}   

export const highlight = ({value, target, css}) =>
    value
        .replace(
            new RegExp(target, 'g'),
            `<span class="${css} h-text">${target}</span>`
        );