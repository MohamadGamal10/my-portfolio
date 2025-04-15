export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-6 mt-10 border-t border-gray-700">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
                <p className="mb-2 md:mb-0">
                    &copy; 2025 All Rights Reserved
                </p>
                <p>
                    &lt;Developed by&gt;{" "}
                    <span className="cursor-pointer font-bold italic text-sky-400 hover:text-sky-300 transition duration-300">
                        Mohamed Gamal
                    </span>
                </p>
            </div>
        </footer>
    );
}
