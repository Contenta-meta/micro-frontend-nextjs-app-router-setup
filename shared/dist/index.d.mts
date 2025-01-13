import React from 'react';
import { ClassValue } from 'clsx';

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
}
declare function Header({ className, ...props }: HeaderProps): React.JSX.Element;

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
}
declare function Footer({ className, ...props }: FooterProps): React.JSX.Element;

declare function cn(...inputs: ClassValue[]): string;

export { Footer, Header, cn };
