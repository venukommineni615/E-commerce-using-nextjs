"use client"
import Image from 'next/image'
import Link from 'next/link'
import LandingPageCarousel from './components/LandingPageCarousel'
import Navbar from './components/Navbar'
import Card from './components/Card'
import { useEffect } from 'react'
export default function Home() {
  return (
  <>
    <Navbar></Navbar>
    
    <LandingPageCarousel ></LandingPageCarousel>
    <h2 className='text-xl font-medium p-2 mt-16 mb-2'>New Arrivals</h2>
    <div className='grid grid-cols-4 place-items-center'>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    </div>
    <div className='pt-40'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ad, magnam ducimus molestias quisquam nobis. Aperiam, error ipsum officia sapiente suscipit, debitis veniam officiis veritatis eveniet vitae pariatur voluptatem alias.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ad, magnam ducimus molestias quisquam nobis. Aperiam, error ipsum officia sapiente suscipit, debitis veniam officiis veritatis eveniet vitae pariatur voluptatem alias.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ad, magnam ducimus molestias quisquam nobis. Aperiam, error ipsum officia sapiente suscipit, debitis veniam officiis veritatis eveniet vitae pariatur voluptatem alias.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ad, magnam ducimus molestias quisquam nobis. Aperiam, error ipsum officia sapiente suscipit, debitis veniam officiis veritatis eveniet vitae pariatur voluptatem alias.</p>
    </div>
  </>
  )
}
