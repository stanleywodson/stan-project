import JoditEditor, { Jodit } from 'jodit-react';
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
                    // height: '300px',
                    language: 'pt_br',
                    placeholder: 'Digite aqui...',
                    speechRecognize: {
                        lang: 'pt-BR'
                    },
                    // imageeditor: {
                    //     closeAfterSave: true,
                    //     crop: false,
                    //     resize: true,
                    //     width: 500
                    // },
                    // uploader: {
                    //     url: 'wordcell?action=upload', // This is a required parameter
                    //     prepareData: function (formdata: { append: (arg0: string, arg1: string | number) => void; }) {
                    //       formdata.append('id', 24); // $_POST['id'] on server
                    //       formdata.append('name', 'Some parameter'); // $_POST['name'] on server
                    //     }
                    //   },
                    style: {
                        'background-color': '#f4f4f5',
                    },
                    // iframe: true,
                    // iframeBaseUrl: 'https://xdsoft.net/jodit/docs/',
                    // iframeDefaultSrc: 'https://xdsoft.net/jodit/docs/',
                    // iframeStyle: 'html{margin: 0px;}',
                    controls: {
                        fontsize: {
                          list: Jodit.atom([8, 10, 12, 14, 16, 18, 20, 24, 30, 36])
                        }
                      }

                }}

            />
        </>
    )

};
