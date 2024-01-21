import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';

export const Editor = () => {
	const editor = useRef(null);
	const [content, setContent] = useState('');

	return (
		<div className=''>
			<JoditEditor
				ref={editor}
				value={content}
				onBlur={newContent => setContent(newContent)}
				// onBlur={() => alert('stanley wodson')}
				config={{
					readonly: false,
					toolbar: true,
                    height: '300px',
                    language: 'pt-BR',
				}}
			/>
		</div>
	)

};
