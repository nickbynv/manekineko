'use client'
import { ThemeProvider } from '@material-tailwind/react'

export default function Providers(props: {
    children: React.ReactNode
}) {
    return (
        <ThemeProvider>
            {props.children}
        </ThemeProvider>
    )
}