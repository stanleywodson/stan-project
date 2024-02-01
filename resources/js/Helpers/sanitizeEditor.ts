export const sanitizeFildBodyEditor = (field: string) => {
    return field.replace(/<[^>]*>/g, '')
            .replace(/^\s*\n+/gm, '')
            .replace(/(&nbsp;|\r|\n)+/g, '')
            .trim()
}
