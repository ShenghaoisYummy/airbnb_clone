'use client'

import { ReloadIcon } from '@radix-ui/react-icons';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';

type SubmitButtonProps = {
    className?: string;
    text: string;
};

export function SubmitButton({ text = 'submit', className = '' }: SubmitButtonProps) {
    const { pending } = useFormStatus();

    return (
        <Button type="submit" className={`capitalize ${className}`} disabled={pending} size="lg">
            {pending ? (
                <>
                    <ReloadIcon className="w-4 h-4 mr-2 animate-spin" />
                </>
            ) : text}
        </Button>
    );
}

