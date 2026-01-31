'use client';

import { useState } from 'react';

export default function AppointmentPage() {
    const [activeTab, setActiveTab] = useState('clinic');

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Appointment & Schedule Management</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Clinic schedule + On-demand hospital consultations
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 border border-red-200 text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/20 rounded-lg text-sm font-medium transition-colors flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                        </svg>
                        BLOCK TIME
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-colors shadow-sm shadow-blue-500/30">
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        NEW APPOINTMENT
                    </button>
                </div>
            </div>

            {/* Clinic Info Card */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white p-3 rounded-full shrink-0">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Dr. Kumar Orthopedic Clinic</h2>
                                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Your Primary Practice Location</p>
                            </div>

                        </div>

                        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                            <div>
                                <span className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Regular Days</span>
                                <span className="font-semibold text-gray-900 dark:text-gray-200">Monday, Wednesday, Friday, Saturday</span>
                            </div>
                            <div>
                                <span className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Timings</span>
                                <span className="font-semibold text-gray-900 dark:text-gray-200">10:00 AM - 2:00 PM, 5:00 PM - 8:00 PM</span>
                            </div>
                            <div>
                                <span className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Slot Duration</span>
                                <span className="font-semibold text-gray-900 dark:text-gray-200">15 min</span>
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-800/50">
                            <button className="flex items-center text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 transition-colors">
                                <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                                MODIFY CLINIC SCHEDULE
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Toolbar */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-2 flex flex-wrap items-center gap-4">
                <div className="relative">
                    <input type="date" defaultValue="2026-01-31" className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1.5 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white outline-none focus:ring-1 focus:ring-blue-500" />
                </div>

                <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-md p-0.5">
                    <button className="px-3 py-1 text-sm font-medium rounded shadow-sm bg-white dark:bg-gray-600 text-blue-600 dark:text-white">TODAY</button>
                    <button className="px-3 py-1 text-sm font-medium rounded text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">THIS WEEK</button>
                </div>

                <div className="ml-auto bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-full text-xs font-bold">
                    4 Clinic | 2 Hospital
                </div>
            </div>

            {/* Tabs Navigation */}
            <div className="border-b border-gray-200 dark:border-gray-700">
                <nav className="-mb-px flex space-x-8 overflow-x-auto">
                    {[
                        { id: 'clinic', label: 'CLINIC APPOINTMENTS (4)' },
                        { id: 'hospital', label: 'HOSPITAL CONSULTATIONS (2)' },
                        { id: 'surgery', label: 'SURGERY SCHEDULE (2)' },
                        { id: 'blocked', label: 'BLOCKED TIME' },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors
                                ${activeTab === tab.id
                                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}
                            `}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Hospital Warning for Hospital Tab */}
            {activeTab === 'hospital' && (
                <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-md p-3 flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <p className="text-sm text-orange-700 dark:text-orange-400 font-medium">
                        Hospital consultations are on-demand. You'll be notified via WhatsApp when requested.
                    </p>
                </div>
            )}

            {/* Tab Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* CLINIC APPOINTMENTS */}
                {activeTab === 'clinic' && (
                    <>
                        <AppointmentCard
                            initials="AS"
                            name="Amit Sharma"
                            id="C-001 • +91 98765 43210"
                            time="10:30 AM"
                            location="Dr. Kumar Orthopedic Clinic"
                            badges={[{ text: 'Follow-up', color: 'gray' }, { text: 'Confirmed', color: 'green' }]}

                        />
                        <AppointmentCard
                            initials="PP"
                            name="Priya Patel"
                            id="C-002 • +91 98765 43211"
                            time="11:00 AM"
                            location="Dr. Kumar Orthopedic Clinic"
                            badges={[{ text: 'New Patient', color: 'gray' }, { text: 'Waiting', color: 'orange' }]}
                        />
                        <AppointmentCard
                            initials="RK"
                            name="Rajesh Kumar"
                            id="C-003 • +91 98765 43212"
                            time="11:30 AM"
                            location="Dr. Kumar Orthopedic Clinic"
                            badges={[{ text: 'Post-Surgery Review', color: 'gray' }, { text: 'Confirmed', color: 'green' }]}
                        />
                        <AppointmentCard
                            initials="SR"
                            name="Sneha Reddy"
                            id="C-004 • +91 98765 43213"
                            time="5:15 PM"
                            location="Dr. Kumar Orthopedic Clinic"
                            badges={[{ text: 'Consultation', color: 'gray' }, { text: 'Confirmed', color: 'green' }]}
                        />
                    </>
                )}

                {/* HOSPITAL CONSULTATIONS */}
                {activeTab === 'hospital' && (
                    <>
                        <HospitalCard
                            isUrgent={true}
                            initials="RG"
                            name="Ramesh Gupta"
                            subInfo="H-001 • +91 98765 43214"
                            hospital="Apollo Hospital"
                            time="4:00 PM (Tentative)"
                            requestedBy="Dr. Mehta"
                            badges={[{ text: 'Emergency Consult', color: 'gray' }, { text: 'Urgent', color: 'red' }]}
                        />
                        <HospitalCard
                            isUrgent={false}
                            initials="MS"
                            name="Meera Singh"
                            subInfo="H-002 • +91 98765 43215"
                            hospital="Fortis Hospital"
                            time="3:00 PM (Tentative)"
                            requestedBy="Hospital Staff"
                            badges={[{ text: 'Pre-Surgery Evaluation', color: 'gray' }, { text: 'Scheduled', color: 'blue' }]}
                        />
                    </>
                )}

                {/* SURGERY SCHEDULE */}
                {activeTab === 'surgery' && (
                    <>
                        <SurgeryCard
                            initials="VJ"
                            name="Vikram Joshi"
                            detail="Total Knee Replacement"
                            hospital="Apollo Hospital"
                            date="Jan 30, 2026"
                            time="8:00 AM - 11:00 AM"
                        />
                        <SurgeryCard
                            initials="AD"
                            name="Anjali Desai"
                            detail="ACL Reconstruction"
                            hospital="Fortis Hospital"
                            date="Feb 1, 2026"
                            time="7:00 AM - 10:00 AM"
                        />
                    </>
                )}

                {/* BLOCKED TIME */}
                {activeTab === 'blocked' && (
                    <div className="col-span-1 lg:col-span-2 space-y-4">
                        <div className="w-full text-left">
                            <button className="text-xs text-red-600 border border-red-200 bg-red-50 px-3 py-1.5 rounded hover:bg-red-100 transition-colors">
                                + BLOCK NEW TIME SLOT
                            </button>
                        </div>

                        <BlockedCard
                            title="Surgery at Apollo"
                            date="Jan 30, 2026"
                            time="8:00 AM - 12:00 PM"
                        />
                        <BlockedCard
                            title="CME Conference"
                            date="Jan 31, 2026"
                            time="All Day"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

// Subcomponents

function AppointmentCard({ initials, name, id, time, location, badges }: any) {
    return (
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
                <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                        {initials}
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white">{name}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{id}</p>
                    </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" /></svg>
                </button>
            </div>

            <div className="mt-4 space-y-2">
                <div className="flex items-center text-xs text-gray-700 dark:text-gray-300 font-semibold">
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {time}
                </div>
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    {location}
                </div>
                <div className="flex gap-2 mt-2">
                    {badges.map((badge: any, i: number) => (
                        <span key={i} className={`text-[10px] px-2 py-0.5 rounded-full border ${badge.color === 'green' ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800' :
                                badge.color === 'orange' ? 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-800' :
                                    'bg-gray-50 text-gray-600 border-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600'
                            }`}>
                            {badge.text}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-gray-100 dark:border-gray-700 pt-4">
                <button className="flex items-center justify-center text-xs border border-green-200 text-green-700 hover:bg-green-50 dark:border-green-800 dark:text-green-400 dark:hover:bg-green-900/20 py-1.5 rounded transition-colors">
                    <svg className="w-3 h-3 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    SEND REMINDER
                </button>
                <button className="flex items-center justify-center text-xs border border-red-200 text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/20 py-1.5 rounded transition-colors">
                    <svg className="w-3 h-3 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    CANCEL
                </button>
            </div>
        </div>
    )
}

function HospitalCard({ isUrgent, initials, name, subInfo, hospital, time, requestedBy, badges }: any) {
    const cardClass = isUrgent
        ? "bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-800"
        : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700";

    return (
        <div className={`border rounded-xl p-5 shadow-sm ${cardClass}`}>
            <div className="flex justify-between items-start">
                <div className="flex gap-4">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${isUrgent ? 'bg-red-500' : 'bg-purple-600'}`}>
                        {initials}
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white">{name}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{subInfo}</p>
                    </div>
                </div>
            </div>

            <div className="mt-4 space-y-2">
                <div className="flex items-center text-xs text-gray-700 dark:text-gray-300 font-semibold">
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    {hospital}
                </div>
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {time}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 pl-6">
                    Requested by: <span className="text-gray-700 dark:text-gray-300 font-medium">{requestedBy}</span>
                </div>
                <div className="flex gap-2 mt-2">
                    {badges.map((badge: any, i: number) => (
                        <span key={i} className={`text-[10px] px-2 py-0.5 rounded-full border ${badge.color === 'red' ? 'bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800' :
                                badge.color === 'blue' ? 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800' :
                                    'bg-gray-100 text-gray-600 border-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600'
                            }`}>
                            {badge.text}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                <button className="flex items-center justify-center text-xs bg-green-700 hover:bg-green-800 text-white py-1.5 rounded transition-colors shadow-sm">
                    <svg className="w-3 h-3 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    ACCEPT
                </button>
                <button className="flex items-center justify-center text-xs border border-red-200 text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/20 py-1.5 rounded transition-colors">
                    <svg className="w-3 h-3 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    DECLINE
                </button>
            </div>
        </div>
    )
}

function SurgeryCard({ initials, name, detail, hospital, date, time }: any) {
    return (
        <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-xl p-5 shadow-sm lg:col-span-2">
            <div className="flex justify-between items-start">
                <div className="flex gap-4 items-center">
                    <div className="h-10 w-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                        {initials}
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white">{name}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{detail}</p>
                    </div>
                </div>
                <div className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Confirmed
                </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-6">
                <div>
                    <span className="block text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wide font-semibold">Hospital</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-200">{hospital}</span>
                </div>
                <div>
                    <span className="block text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wide font-semibold">Date</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-200">{date}</span>
                </div>
                <div>
                    <span className="block text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wide font-semibold">Time</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-200">{time}</span>
                </div>
            </div>

            <div className="mt-4 pt-3 border-t border-green-200 dark:border-green-800/50 flex gap-3">
                <button className="flex items-center text-xs text-emerald-700 hover:text-emerald-800 dark:text-emerald-400 font-medium">
                    <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    CONTACT PATIENT
                </button>
                <button className="flex items-center text-xs text-emerald-700 hover:text-emerald-800 dark:text-emerald-400 font-medium">
                    <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    MODIFY
                </button>
            </div>
        </div>
    )
}

function BlockedCard({ title, date, time }: any) {
    return (
        <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/50 rounded-lg p-4 flex items-center justify-between group">
            <div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">{title}</h4>
                <div className="flex items-center gap-3 mt-1 text-xs text-red-600 dark:text-red-400">
                    <span className="flex items-center"><svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>{date}</span>
                    <span className="flex items-center"><svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>{time}</span>
                </div>
            </div>
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1.5 hover:bg-red-100 dark:hover:bg-red-900/30 rounded text-gray-400 hover:text-red-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                </button>
                <button className="p-1.5 hover:bg-red-100 dark:hover:bg-red-900/30 rounded text-gray-400 hover:text-red-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
        </div>
    )
}
