import React from 'react'

import {useState} from 'react'

import ListComponent from './ListComponent'

const alphanumeric = '0123456789abcdefghijklmnopqrstuvwxyz'

const List = () => {
    return (
        <div>
            {alphanumeric.split('').map((letter, i) => (<ListComponent letter={letter} key={i}/>))}
        </div>
    )
}

export default List