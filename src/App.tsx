'use client'

import { useState } from "react"
import SplashScreen from "../components/SplashScreen"
import ProductGallery from "../components/ProductGallery"

export default function App() {
    const [showSplash, setShowSplash] = useState(true)

    const handleSplashComplete = () => {
        setShowSplash(false)
    }

    if (showSplash) {
        return <SplashScreen onComplete={handleSplashComplete} />
    }

    return <ProductGallery />
}
