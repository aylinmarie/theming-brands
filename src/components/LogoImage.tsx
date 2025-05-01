"use client"

import { Image } from "@chakra-ui/react"
import { useTheme } from "../context/ThemeContext"

export const LogoImage = ({}) => {
    const { theme } = useTheme()
    const adidasLogoSrc = "https://brandingguide.app/storage/uploads/AmNZT4QE0k6QbvZgTrS7QQPNjywLso6Id1xuUXT0.png"
    const nikeLogoSrc = "https://media.about.nike.com/img/cf68f541-fc92-4373-91cb-086ae0fe2f88/001-nike-logos-swoosh-black.jpg?m=eyJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjEwMH0sIndlYnAiOnsicXVhbGl0eSI6MTAwfSwiZXh0cmFjdCI6eyJsZWZ0IjowLCJ0b3AiOjAsIndpZHRoIjo1MDAwLCJoZWlnaHQiOjI4MTN9LCJyZXNpemUiOnsid2lkdGgiOjEwODB9fX0%3D&s=c29752cfe04e0502ca9f108ca130f79f08ce106d624d5c0e20432503c4ab34e4"
    const logoSrc = theme === "nike" ? nikeLogoSrc : adidasLogoSrc

    return <Image src={logoSrc} alt={theme} width={250} />
}