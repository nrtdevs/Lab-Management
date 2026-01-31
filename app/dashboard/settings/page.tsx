export default function SettingsPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Settings</h2>

            <div className="space-y-6">
                {/* Appearance Section */}
                <section className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">Appearance</h3>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-gray-700 dark:text-gray-200">Dark Mode</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Toggle dark mode theme for the dashboard</p>
                        </div>
                        <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                            <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                        </button>
                    </div>
                </section>

                {/* Notifications Section */}
                <section className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">Notifications</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium text-gray-700 dark:text-gray-200">Email Notifications</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Receive emails about account activity</p>
                            </div>
                            <input type="checkbox" className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium text-gray-700 dark:text-gray-200">Marketing Emails</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Receive emails about new features</p>
                            </div>
                            <input type="checkbox" className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                        </div>
                    </div>
                </section>

                {/* Security Section */}
                <section className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">Security</h3>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-gray-700 dark:text-gray-200">Change Password</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Update your account password</p>
                        </div>
                        <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                            Change
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}
