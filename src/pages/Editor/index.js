import { Card } from "antd";
import BraftEditor from 'braft-editor'
import { useState, useEffect } from "react";
import 'braft-editor/dist/index.css'

import CustomerBreadcrumb from "../../component/CustomerBreadcrumb";
import './index.scss'


function Editor(){
    const [editorState, setEditorState] = useState();
    const [outputHtml, setOutputHtml] = useState();

    useEffect(()=>{
        const initValue = async()=>{
            await setEditorState(BraftEditor.createEditorState('<p>So happy can meet you here :)</p>'));
            setOutputHtml(editorState.toHTML());
        }
        initValue();
    },[])
    
    const handleEditorChange = (editorState) => {
        setEditorState(editorState);
        setOutputHtml(editorState.toHTML())
    }

    const submitContent = ()=>{
        setOutputHtml(editorState.toHTML())
    }

    return (
        <div>
            <CustomerBreadcrumb arr={['Others','Rich Text']}></CustomerBreadcrumb>
            <div className="site-card-border-less-wrapper">
                <Card
                title="When to use"
                bordered={false}
                style={{
                    width: "100%",
                }}
                >
                <p>When user need some specific input</p>
                <p>The rich text component that used below provided by @braft-editor</p>
                </Card>
            </div>
            
            <div className ='form-content'>
                <BraftEditor
                    value={editorState}
                    onChange = {handleEditorChange}
                    onSave = {submitContent}
                />
            </div>

            <div className="form-content">
                {outputHtml}
            </div>

        </div>
    )
}

export default Editor;