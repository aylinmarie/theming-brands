"use client"
import { Box, Container, Flex, Heading, Text, Button, Stack, Image, Spinner } from "@chakra-ui/react"
import { ThemeSwitcher } from "../components/ThemeSwitcher"
import { useTheme } from "../context/ThemeContext"
import { LogoImage } from "../components/LogoImage"
import { useState, useEffect } from "react"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <Box minH="100vh" display="flex" alignItems="center" justifyContent="center">
        <Spinner size="xl" />
      </Box>
    )
  }

  const { theme } = useTheme()
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      {/* Navigation */}
      <Box as="nav" py={6} px={4} borderBottom="1px" borderColor="gray.200">
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center" px={4}>
            <Heading size="md">Theme Brands</Heading>
            <Stack direction="row" gap={4}>
              <Button variant="ghost">Features</Button>
              <Button variant="ghost">Pricing</Button>
              <Button variant="ghost">About</Button>
              <Button>Get Started</Button>
              <ThemeSwitcher />
            </Stack>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box as="section" flex="1" display="flex" alignItems="center" justifyContent="center">
        <Container maxW="container.xl">
          <Stack gap={8} align="center" textAlign="center">
            <LogoImage />
            <Heading size="2xl" maxW="800px">
              Theme it, but make it {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="600px">
              Our platform helps you create stunning websites that look great on any device. 
              Get started today and bring your vision to life.
            </Text>
            <Stack direction="row" gap={4}>
              <Button size="lg">
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
