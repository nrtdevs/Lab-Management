export default function Footer() {
    return (
        <footer className="w-full bg-white border-t border-gray-200 py-4 px-6 text-center text-sm text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
            <p>
                &copy; {new Date().getFullYear()} My App. All rights reserved.
            </p>
        </footer>
    );
}
