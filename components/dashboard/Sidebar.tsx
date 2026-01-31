'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOutAction } from '@/app/lib/signout';
import { useState } from 'react';

interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (isOpen: boolean) => void;
    isCollapsed: boolean;
    setIsCollapsed: (isCollapsed: boolean) => void;
}

// Navigation Data with Submenus
const navigation = [
    {
        name: 'Dashboard',
        href: '/dashboard',
        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    },
    {
        name: 'OPD Management',
        href: '/dashboard/opd',
        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
    },
    {
        name: 'Patient Management',
        href: '/dashboard/patients',
        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    },
    {
        name: 'Appointments',
        href: '/dashboard/appointments',
        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    },
    {
        name: 'Prescription',
        href: '/dashboard/prescription',
        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    },
    {
        name: 'Pharmacy',
        href: '/dashboard/pharmacy',
        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    },
    {
        name: 'Lab Management',
        href: '/dashboard/lab',
        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    },
    {
        name: 'Billing & Insurance',
        href: '/dashboard/billing',
        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
    },
    {
        name: 'Income & Commission',
        href: '/dashboard/income',
        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    {
        name: 'Expenses',
        href: '/dashboard/expenses',
        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    },
    {
        name: 'WhatsApp',
        href: '/dashboard/whatsapp',
        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
    },
    {
        name: 'Analytics & CRM',
        href: '/dashboard/analytics',
        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    },
    {
        name: 'Vendor',
        href: '/dashboard/vendor',
        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    },
    {
        name: 'Settings',
        href: '#',
        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
        subItems: [
            { name: 'Profile', href: '/dashboard/profile' },
            { name: 'General', href: '/dashboard/settings' },
        ]
    },
];

export default function Sidebar({
    sidebarOpen,
    setSidebarOpen,
    isCollapsed,
    setIsCollapsed,
}: SidebarProps) {
    const pathname = usePathname();
    const [isHovered, setIsHovered] = useState(false);
    const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

    // Effective Sidebar State: Expanded if not collapsed (Pinned) OR if Collapsed but Hovered
    // Actually, standard behavior: Pinned = Always expanded. Unpinned = Mini, expands on Hover.
    // "isCollapsed" here means "Unpinned".
    const isExpanded = !isCollapsed || (isCollapsed && isHovered);

    // Toggle Submenu
    const toggleMenu = (name: string) => {
        setExpandedMenus(prev =>
            prev.includes(name) ? prev.filter(item => item !== name) : [...prev, name]
        );
    };

    return (
        <>
            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'
                    }`}
                onClick={() => setSidebarOpen(false)}
            ></div>

            {/* Sidebar Placeholder to reserve space in layout when Pinned (w-64) or Unpinned (w-20) */}
            <div className={`hidden lg:block transition-all duration-300 ease-in-out shrink-0 ${isCollapsed ? 'w-20' : 'w-64'}`} />

            {/* Sidebar Container - Fixed/Absolute for Hover effect */}
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`fixed inset-y-0 left-0 z-30 flex flex-col bg-white border-r border-gray-200 text-gray-900 transition-all duration-300 ease-in-out lg:absolute dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 dark:border-white/5 dark:text-white ${isExpanded ? 'w-64 shadow-2xl lg:shadow-xl' : 'w-20 lg:shadow-none'
                    } ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} h-full backdrop-blur-xl`}
            >
                {/* Top Section: Logo + Collapse Button */}
                {/* Top Section: Logo + Collapse Button */}
                <div className={`relative flex items-center h-20 shrink-0 border-b border-gray-200 dark:border-white/5 transition-all duration-300 ${!isExpanded ? 'justify-center' : 'px-6'}`}>

                    {/* Expanded: Full Logo & Name */}
                    <div className={`flex items-center gap-3 transition-all duration-300 overflow-hidden ${!isExpanded ? 'w-0 opacity-0' : 'w-full opacity-100'}`}>
                        <div className="h-8 w-8 shrink-0 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </div>
                        <div className="flex flex-col whitespace-nowrap">
                            <span className="text-lg font-bold text-gray-900 dark:text-white leading-none tracking-tight">MedSuite</span>
                            <span className="text-[10px] font-semibold text-blue-500 tracking-widest uppercase mt-0.5">Clinical Dashboard</span>
                        </div>
                    </div>

                    {/* Collapsed: Mini Logo */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${!isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg">
                            <span className="text-xl">M</span>
                        </div>
                    </div>

                    {/* Radio Button Toggle (Right End) */}
                    {isExpanded && (
                        <button
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            className="absolute right-5 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                            title={isCollapsed ? "Pin Sidebar" : "Unpin Sidebar"}
                        >
                            <div className={`w-5 h-5 rounded-full border-2 border-current flex items-center justify-center transition-all ${!isCollapsed ? 'border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400' : ''}`}>
                                <div className={`w-2.5 h-2.5 rounded-full bg-current transition-transform duration-200 ${!isCollapsed ? 'scale-100' : 'scale-0'}`} />
                            </div>
                        </button>
                    )}
                </div>

                {/* Navigation */}
                <div className="flex flex-col flex-1 px-3 mt-6 gap-2 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-700">
                    {navigation.map((item) => {
                        const isActive = item.href !== '#' && pathname === item.href;
                        const isMenuOpen = expandedMenus.includes(item.name);
                        const hasSubItems = !!item.subItems;

                        return (
                            <div key={item.name}>
                                <button
                                    onClick={() => hasSubItems ? toggleMenu(item.name) : null}
                                    className={`w-full flex items-center rounded-xl px-3 py-2.5 transition-all duration-200 group ${isActive
                                        ? 'bg-blue-600/90 text-white shadow-lg shadow-blue-500/20'
                                        : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white'
                                        } ${!isExpanded ? 'justify-center' : ''} ${hasSubItems ? 'cursor-pointer' : ''}`}
                                >
                                    <Link href={hasSubItems ? '#' : item.href} className="flex items-center w-full" onClick={(e) => hasSubItems && e.preventDefault()}>
                                        <span className={`shrink-0 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors'}`}>
                                            {item.icon}
                                        </span>

                                        <span className={`ml-3 text-sm font-medium whitespace-nowrap transition-all duration-300 ${!isExpanded ? 'w-0 opacity-0 overflow-hidden' : 'w-auto opacity-100'}`}>
                                            {item.name}
                                        </span>
                                    </Link>

                                    {/* Chevron for Submenus */}
                                    {hasSubItems && isExpanded && (
                                        <svg
                                            className={`w-4 h-4 ml-auto transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </button>

                                {/* SubItems */}
                                {hasSubItems && isExpanded && (
                                    <div className={`mt-1 space-y-1 overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        {item.subItems?.map(sub => (
                                            <Link
                                                key={sub.name}
                                                href={sub.href}
                                                className={`flex items-center w-full pl-11 pr-3 py-2 text-sm text-gray-400 rounded-lg hover:text-white hover:bg-white/5 transition-colors ${pathname === sub.href ? 'text-white bg-white/10' : ''}`}
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Section: User Info + Logout */}
                <div className="p-4 border-t border-gray-200 dark:border-white/5 mt-auto">
                    <div className={`flex items-center ${!isExpanded ? 'justify-center flex-col gap-4' : 'justify-between'}`}>
                        {/* User Info */}
                        <div className="flex items-center overflow-hidden">
                            <img
                                className="object-cover w-9 h-9 rounded-full ring-2 ring-gray-700 shrink-0"
                                src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
                                alt="User"
                            />
                            <div className={`ml-3 transition-all duration-300 ${!isExpanded ? 'w-0 opacity-0' : 'w-auto opacity-100'} whitespace-nowrap`}>
                                <p className="text-sm font-semibold text-gray-900 dark:text-white">Test User</p>
                                <p className="text-xs text-gray-400">user@nextjs.com</p>
                            </div>
                        </div>


                        {/* Logout Button */}
                        <form action={signOutAction} className={!isExpanded ? '' : ''}>
                            <button
                                type="submit"
                                className={`text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:text-red-400 dark:hover:bg-white/5 transition-colors p-2 rounded-lg ${!isExpanded ? '' : 'ml-1'}`}
                                title="Sign out"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
