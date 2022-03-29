import { default as Sidebar } from './Sidebar';
import { ReactNode } from 'react';

export default function Page ({children,}: { children: ReactNode}) {
    
return (

<Sidebar>
   {children} 
</Sidebar>

)
}