import React from 'react'

const StudentLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            {children}
        </>
    )
}

export default StudentLayout