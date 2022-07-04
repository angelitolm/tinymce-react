/**
 * @author Angel Labrada
 * @since v0.0.1
 * @date 3/7/22
 */
import React, {FC, memo} from 'react';
import {Editor} from "@tinymce/tinymce-react";
import styles from "../../App.css";

type Props = {};

const InlinesEditors: FC<Props> = ({}) => {
    return (
        <div className="editor-class">
            <Editor
                init={{ body_class: styles }}
                initialValue="<div class='demo-inline'>
                        <p><img src='https://www.tiny.cloud/docs/tinymce/6/_images/tiny-banner.png' style={{width: '100%'}}/></p>
                        </div>"
                inline
            />
            <Editor
                init={{ body_class: styles }}
                initialValue="<div class='demo-inline'>
                        <h1 class='tinymce-heading'>The world&rsquo;s first rich text editor in the cloud</h1>
                        </div>"
                inline
            />
            <Editor
                init={{ body_class: styles }}
                initialValue="<div class='demo-inline'>
                        <p><img src='https://www.tiny.cloud/images/image-two.jpg'/></p>
                        </div>"
                inline
            />
            <Editor
                init={{ body_class: styles }}
                initialValue="<div class='demo-inline'>
                        <div className='tinymce-body'>
                            <p>Have you heard about Tiny Cloud? It&rsquo;s the first step in our journey to help you deliver
                            great content creation experiences, no matter your level of expertise. 50,000 developers already
                            agree. They get free access to our global CDN, image proxy services and auto updates to the
                            TinyMCE editor. They&rsquo;re also ready for some exciting updates coming soon.</p>
                        </div>
                        </div>"
                inline
            />
        </div>
    );
}

export default memo(InlinesEditors);
