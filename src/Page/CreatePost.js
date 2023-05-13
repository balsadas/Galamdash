import React, { useEffect, useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';



function CreatePost() {
    let editorState = EditorState.createEmpty();
    const [description,setDescription]=useState(editorState)
    const onEditorStateChange = (editorState) => {
        setDescription(editorState);
    }
    return (
        <>
            <div>
                
                <div className='flex justify-center'>
                    <div className='bg-slate-200 w-[60%] p-3'>
                        <Editor editorState={description}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName='wrapperClassName'
                        editorClassName='editorClassName'
                        onEditorStateChange={onEditorStateChange}
                        />
                        {/* <textarea className='hidden' disabled ref={(val) => userinfo.description = val} value={draftToHtml(convertToRaw(description.getCurrentContent()))}/> */}
                    </div>
                </div>

            </div>
        </>
    );
}

export default CreatePost;
