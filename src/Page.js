import React, { useState, useEffect } from 'react'
import SideNav from './components/SideNav'
import './page.css'
import indexReact from './markdown/index_react.md'
import indexPython from './markdown/index_python.md'
import MarkdownPreview from '@uiw/react-markdown-preview';


function Page({page}) {
    const [source, setSource] = useState(null)

    useEffect(() => {
        if(page === "React"){
            clickHandler(indexReact)
        }else if (page === "Python"){
            clickHandler(indexPython)
        }
    }, [page])

    const clickHandler = (content) => {
        fetch(content)
            .then(res => res.text())
            .then(text => {
                setSource(text)
            }
        );
    }

    return (
        <div className="page">
            <div className="page__left">
                <SideNav page={page} clickHandler={clickHandler} />
            </div>

            <div className="page__right">
                <MarkdownPreview source={source} />
            </div>
        </div>
    )
}

export default Page
