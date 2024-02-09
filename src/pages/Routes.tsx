import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Frontend from './frontend/index'

export default function Index() {
    return (
        <>
            <Routes>
                <Route path='/*' element={<Frontend />} />
            </Routes>
        </>
    )
}
