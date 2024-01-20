import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Fronend from './frontend/index'

export default function Index() {
    return (
        <>
            <Routes>
                <Route path='/*' element={<Fronend />} />
            </Routes>
        </>
    )
}
