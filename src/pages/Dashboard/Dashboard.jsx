import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'

const Dashboard = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='bg-[#EFEFEF] h-fit pb-10 grid justify-items-center lg:grid-cols-3 pt-14'>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>

            </div>
        </>
    )
}

export default Dashboard