'use client'
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

const Page = () => {
    const router = useRouter()

    return (
        <div>
            <h3 className='title-1'>About Page</h3>
            <Button onClick={() => router.push("/services")} variant="link">Go to Services</Button>
        </div>
    );
};

export default Page;