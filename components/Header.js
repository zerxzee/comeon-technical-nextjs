import { useEffect, useState, useRef } from "react";
import { signOut, useSession } from 'next-auth/react';
import Modal from "./Modal";

export default function Header() {
    const { data: session, status } = useSession();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [user, setUser] = useState(null);
    const menuRef = useRef(null);

    const handleCloseModal = () => setIsModalVisible(false);

    const handleOpenModal = () => {
        setIsModalVisible(true);
        setIsMenuOpen(false);
    };

    const handleConfirm = () => {
        handleSignOut();
        handleCloseModal();
    };

    const handleSignOut = async () => {
        await signOut({
            callbackUrl: '/',
        });
    };

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleBlur = (e) => {
        if (!menuRef.current?.contains(e.relatedTarget)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        if (session) {
            setUser(session.user)
        }
    }, []);

    return (
        <header className="bg-white">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-evenly">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <a href="#" className="-m-1.5 p-1.5">
                            <div className="px-4 py-2 md:bg-[rgba(23,23,23,0.6)] rounded-3xl w-fit">
                                <img
                                    alt="ComeOn Group Company Logo"
                                    src="/images/logo.svg"
                                    className="h-8 w-auto hidden md:block"
                                />
                                <img
                                    alt="ComeOn Group Company Logo"
                                    src="/favicon.ico"
                                    className="h-8 w-auto md:hidden"
                                />
                            </div>
                        </a>
                    </div>

                    <div className="hidden flex-1 md:flex md:items-center md:gap-12">
                        <p className="text-2xl font-extrabold">ENJOY YOUR GAME</p>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        {user && (
                            <div className="flex">
                                <div className="content-center mr-4 text-right">
                                    <p>
                                        {user.name}
                                    </p>
                                    <p className="italic text-xs w-44 truncate md:w-auto">
                                        {user.event}
                                    </p>
                                </div>
                                <div className="relative md:block">
                                    <button
                                        type="button"
                                        className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
                                        onClick={toggleMenu}
                                        onBlur={handleBlur}>
                                        <span className="sr-only">Toggle dashboard menu</span>
                                        <img alt="avatar" className="w-12 h-12 rounded-full object-cover"
                                            src={user.avatar ?? "/images/avatar/default-avatar.png"} />
                                    </button>

                                    <div ref={menuRef} role="menu"
                                        className={`absolute end-0 z-10 mt-0.5 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg transition-all duration-150 ${isMenuOpen ? "block" : "hidden"
                                            }`}>
                                        <div className="p-2">
                                            <button
                                                className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                                                role="menuitem"
                                                onClick={handleOpenModal}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="size-4">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                                                </svg>
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Logout modal */}
            <Modal
                isVisible={isModalVisible}
                title="Logout"
                subtitle="Are you sure you want to logout?"
                confirmLabel="Logout"
                denyLabel="Cancel"
                confirmLabelBgColor="bg-red-500"
                onConfirm={handleConfirm}
                onDeny={handleCloseModal}
            />
        </header>
    )
}
