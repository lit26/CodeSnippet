import React from 'react'
import Urldict from './Urldict'
import {Accordion, Card} from 'react-bootstrap'
import './SideNav.css'

function SideNav({page, clickHandler}) {
    console.log(Urldict)
    return (
        <div className="sidenav">
            <Accordion>
            {
                Object.keys(Urldict[page]).map((key, index) =>{
                    return (
                        <Card key={index}>
                            <Accordion.Toggle as={Card.Header} variant="link" eventKey={index+""} className="sideNav__header">
                                {key}
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={index+""}>
                                <Card.Body>
                                    {
                                        Object.keys(Urldict[page][key]).map((blog, index2) =>{
                                            return (
                                                <li 
                                                    className="sideNav__item" 
                                                    key={index2}
                                                    onClick={()=>clickHandler(Urldict[page][key][blog])}
                                                >
                                                    {blog}
                                                </li>
                                            )
                                        })
                                    }
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    )
                })
            }
            </Accordion>
        </div>
    )
}

export default SideNav
