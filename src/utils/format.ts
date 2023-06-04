export const truncateText = (text: string, maxText: number) => {
    return `${text.slice(0, maxText)}...`
}

export const truncateTitle = (text: string) => {
    return truncateText(text, 45)
}

export const truncateDescription = (text: string) => {
    return truncateText(text, 130)
}