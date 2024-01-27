import JoditEditor from 'jodit-react';

export const Editor = (props: any) => {
	return (
		<>
			<JoditEditor
                value={props.editor}
                onBlur={(editor) => props.setEditor('editor', editor)}
				config={{
					readonly: false,
					toolbar: true,
                    height: '300px',
                    language: 'pt-BR',
				}}
			/>
		</>
	)

};
