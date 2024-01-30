import JoditEditor from 'jodit-react';
interface EditorProps {
    setEditor?: any
    readonly?: boolean
    content?: string
}

export const Editor = ({ setEditor, readonly, content = '' }: EditorProps) => {
    return (
        <>
            <JoditEditor
                value={content}
                onBlur={(body) => setEditor('body', body)}
                config={{
                    readonly,
                    toolbar: true,
                    height: '300px',
                    language: 'pt-BR',
                }}
            />
        </>
    )

};
