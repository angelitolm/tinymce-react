/**
 * @author Angel Labrada
 * @since v0.0.1
 * @date 3/7/22
 */
import React, {FC, memo} from 'react';
import {Editor} from "@tinymce/tinymce-react";
import styles from '../../App.css';

type Props = {
};

const ClassicEditor: FC<Props> = () => {
    return (
        <div className="editor-class">
            <Editor
            init={{
                max_height: 700,
                body_class: styles,
                plugins: "a11ychecker advcode table advlist lists image media anchor hr link autoresize",
                toolbar: "a11ycheck | formatselect bold forecolor backcolor fonts | bullist numlist | link image media anchor | table | code"
            }}
            initialValue="<div class='demo-inline'>
                    <p><img src='https://www.tiny.cloud/docs/tinymce/6/_images/tiny-banner.png' style={{width: '100%'}}/></p>
                    <h1 class='tinymce-heading'>The world&rsquo;s first rich text editor in the cloud</h1>
                    <p><img src='https://www.tiny.cloud/images/image-two.jpg'/></p>
                    <div class='tinymce-body'>
                    <p>Have you heard about Tiny Cloud? It&rsquo;s the first step in our journey to help you deliver
                    great content creation experiences, no matter your level of expertise. 50,000 developers already
                    agree. They get free access to our global CDN, image proxy services and auto updates to the
                    TinyMCE editor. They&rsquo;re also ready for some exciting updates coming soon.</p>
                    <p>One of these enhancements is <strong>Tiny Drive</strong>: imagine file management for TinyMCE, in
                    the cloud, made super easy. Learn more at <a
                    href='https://www.tiny.cloud/drive/'>tiny.cloud/drive/</a>, where you&rsquo;ll find a
                    working demo and an opportunity to provide feedback to the product team.</p>
                    </div>
                    </div>
                    <h2 class='tinymce-heading'>An editor for every project</h2>
                    <div class='tinymce-body'>
                    <p>Here are some of our customer&rsquo;s most common use cases for TinyMCE:</p>
                    <ul>
                    <li>Content Management Systems (<em>e.g. WordPress, Umbraco</em>)</li>
                    <li>Learning Management Systems (<em>e.g. Blackboard</em>)</li>
                    <li>Customer Relationship Management and marketing automation (<em>e.g. Marketo</em>)</li>
                    <li>Email marketing (<em>e.g. Constant Contact</em>)</li>
                    <li>Content creation in SaaS systems (<em>e.g. Eventbrite, Evernote, GoFundMe, Zendesk</em>)</li>
                    </ul>
                    <p>And those use cases are just the start. TinyMCE is incredibly flexible, and with hundreds of APIs
                    there&rsquo;s likely a solution for your editor project. If you haven&rsquo;t experienced Tiny
                    Cloud, get started today. You&rsquo;ll even get a free trial of our premium plugins &ndash; no
                    credit card required!</p>
                    </div>
                    </div>"
        />
        </div>
    )
}

export default memo(ClassicEditor);
