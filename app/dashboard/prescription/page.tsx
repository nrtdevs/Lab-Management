'use client';

import { useState } from 'react';

export default function PrescriptionPage() {
    const [medications, setMedications] = useState([
        { id: 1, name: 'Diclofenac Sodium 50mg', dosage: '1-0-1', duration: '7 days', instruction: 'After meals' },
        { id: 2, name: 'Pantoprazole 40mg', dosage: '1-0-0', duration: '7 days', instruction: 'Before breakfast' }
    ]);

    const addMedication = () => {
        setMedications([...medications, { id: Date.now(), name: '', dosage: '', duration: '', instruction: '' }]);
    };

    const removeMedication = (id: number) => {
        setMedications(medications.filter(m => m.id !== id));
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Digital Prescription System</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Create customizable prescriptions with clinical diagrams and annotations
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content Form */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Patient Information Form */}
                    <Section title="Patient Information">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-500 mb-1">Select Patient</label>
                                <div className="relative">
                                    <div className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-3 flex items-center bg-white dark:bg-gray-800">
                                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold mr-3">
                                            AS
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-gray-900 dark:text-white">Amit Sharma</div>
                                            <div className="text-xs text-gray-500">P-2401</div>
                                        </div>
                                        <div className="ml-auto">
                                            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-medium text-gray-500 mb-1">Visit Date</label>
                                    <input type="date" defaultValue="2026-01-29" className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-800 text-sm focus:ring-blue-500 focus:border-blue-500 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-500 mb-1">Location</label>
                                    <select className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-800 text-sm focus:ring-blue-500 focus:border-blue-500 outline-none">
                                        <option>Apollo Hospital</option>
                                        <option>City Clinic</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </Section>

                    {/* Diagnosis */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2">Diagnosis</label>
                            <input type="text" defaultValue="Osteoarthritis of right knee - Grade 3" className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-3 bg-white dark:bg-gray-800 text-sm focus:ring-blue-500 focus:border-blue-500 outline-none" />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2">Chief Complaints</label>
                            <textarea rows={2} defaultValue="Pain and stiffness in right knee, difficulty in walking" className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-3 bg-white dark:bg-gray-800 text-sm focus:ring-blue-500 focus:border-blue-500 outline-none resize-none" />
                        </div>
                    </div>

                    {/* Medications */}
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <label className="block text-sm font-semibold text-gray-900 dark:text-gray-200">Medications</label>
                            <button onClick={addMedication} className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                Add Medication
                            </button>
                        </div>

                        <div className="space-y-4">
                            {medications.map((med, index) => (
                                <div key={med.id} className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700 relative group">
                                    <button onClick={() => removeMedication(med.id)} className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>

                                    <div className="space-y-3 pr-8">
                                        <div className="relative">
                                            <label className="absolute -top-2 left-2 bg-gray-50 dark:bg-gray-800 px-1 text-xs text-gray-500">Medicine Name</label>
                                            <input type="text" defaultValue={med.name} className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-transparent text-sm focus:ring-blue-500 focus:border-blue-500 outline-none" />
                                        </div>
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="relative">
                                                <label className="absolute -top-2 left-2 bg-gray-50 dark:bg-gray-800 px-1 text-xs text-gray-500">Dosage</label>
                                                <input type="text" defaultValue={med.dosage} className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-transparent text-sm focus:ring-blue-500 focus:border-blue-500 outline-none" />
                                            </div>
                                            <div className="relative">
                                                <label className="absolute -top-2 left-2 bg-gray-50 dark:bg-gray-800 px-1 text-xs text-gray-500">Duration</label>
                                                <input type="text" defaultValue={med.duration} className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-transparent text-sm focus:ring-blue-500 focus:border-blue-500 outline-none" />
                                            </div>
                                            <div className="relative">
                                                <label className="absolute -top-2 left-2 bg-gray-50 dark:bg-gray-800 px-1 text-xs text-gray-500">Instruction</label>
                                                <input type="text" defaultValue={med.instruction} className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-transparent text-sm focus:ring-blue-500 focus:border-blue-500 outline-none" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Canvas Accordion */}
                    <div className="border border-purple-200 dark:border-purple-900/50 rounded-lg overflow-hidden">
                        <button className="w-full flex items-center justify-between p-4 bg-purple-50 dark:bg-purple-900/20 text-left">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                                <div>
                                    <span className="font-semibold text-gray-900 dark:text-white">Drawing Canvas - Clinical Diagram</span>
                                    <p className="text-xs text-gray-500">Draw diagrams to explain treatment or mark affected areas</p>
                                </div>
                            </div>
                            <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">Interactive</span>
                            <svg className="w-5 h-5 text-gray-400 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>

                    {/* Text Areas */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2">Investigations Advised</label>
                            <textarea rows={2} defaultValue="X-ray Knee (AP & Lateral view)" className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-3 bg-white dark:bg-gray-800 text-sm focus:ring-blue-500 focus:border-blue-500 outline-none resize-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2">Advice & Instructions</label>
                            <textarea rows={3} defaultValue="Apply ice packs 3-4 times daily. Avoid climbing stairs. Continue physiotherapy exercises." className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-3 bg-white dark:bg-gray-800 text-sm focus:ring-blue-500 focus:border-blue-500 outline-none resize-none" />
                        </div>
                    </div>

                    {/* Follow Up */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div>
                            <label className="block text-xs font-medium text-gray-500 mb-1">Follow up Date</label>
                            <input type="date" defaultValue="2026-02-05" className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-800 text-sm focus:ring-blue-500 focus:border-blue-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-500 mb-1">Follow up Location</label>
                            <select className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-800 text-sm focus:ring-blue-500 focus:border-blue-500 outline-none">
                                <option>Apollo Hospital</option>
                                <option>City Clinic</option>
                            </select>
                        </div>
                    </div>

                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Template Settings */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-4">Template Settings</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-500 mb-1">Header Style</label>
                                <select className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-800 text-sm outline-none">
                                    <option>Professional</option>
                                    <option>Modern</option>
                                    <option>Classic</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-500 mb-1">Font Family</label>
                                <select className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-800 text-sm outline-none">
                                    <option>Arial</option>
                                    <option>Roboto</option>
                                    <option>Serif</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-500 mb-1">Color Theme</label>
                                <select className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-800 text-sm outline-none">
                                    <option>Blue</option>
                                    <option>Green</option>
                                    <option>Red</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-500 mb-1">Clinic Logo</label>
                                <button className="w-full border border-blue-300 text-blue-600 text-sm py-2 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                                    Upload Logo
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Preview */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-4">Preview</h3>
                        <div className="aspect-[3/4] bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center text-gray-400 text-xs text-center p-4">
                            Prescription preview will appear here
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-3">
                        <h3 className="font-bold text-gray-900 dark:text-white">Actions</h3>
                        <button className="w-full bg-purple-700 hover:bg-purple-800 text-white py-2.5 rounded-lg text-sm font-medium flex items-center justify-center transition-colors shadow-sm">
                            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            Preview Prescription
                        </button>
                        <button className="w-full bg-green-700 hover:bg-green-800 text-white py-2.5 rounded-lg text-sm font-medium flex items-center justify-center transition-colors shadow-sm">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Send via WhatsApp
                        </button>
                        <button className="w-full border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center transition-colors">
                            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download PDF
                        </button>
                        <button className="w-full border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center transition-colors">
                            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                            </svg>
                            Print Prescription
                        </button>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                        <label className="block text-xs font-medium text-gray-500 mb-1">PDF Naming Format</label>
                        <div className="text-xs text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded px-2 py-1">
                            <span className="bg-gray-200 dark:bg-gray-700 rounded px-1">PatientName</span>_Date_Location.pdf
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Section({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <fieldset className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
            <legend className="text-sm font-bold text-gray-900 dark:text-white px-2">{title}</legend>
            {children}
        </fieldset>
    );
}
