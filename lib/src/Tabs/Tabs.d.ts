/// <reference types="react" />
import { TabsProps, TabsHeaderProps, TabProps, TabsContentProps } from './Tabs.types';
export declare const Tabs: ({ children, hover, id, responsive, direction, ...props }: TabsProps) => JSX.Element;
export declare const TabsHeader: ({ children, ...props }: TabsHeaderProps) => JSX.Element;
export declare const Tab: ({ children, href, index, onClick, ...props }: TabProps) => JSX.Element;
export declare const TabsContent: ({ children, id, ...props }: TabsContentProps) => JSX.Element;
