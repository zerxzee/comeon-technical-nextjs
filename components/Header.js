import { useEffect, useState } from "react";
import { signOut, useSession } from 'next-auth/react';
import Modal from "./Modal";

export default function Header() {
    const { data: session, status } = useSession();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [user, setUser] = useState(null);

    const handleOpenModal = () => setIsModalVisible(true);
    const handleCloseModal = () => setIsModalVisible(false);
    const handleConfirm = () => {
        handleSignOut();
        handleCloseModal();
    };

    const handleSignOut = async () => {
        await signOut({
            redirect: true,
            callbackUrl: '/',
        });
    };

    useEffect(() => {
        if (session) {
            setUser(session.user)
        }
    }, []);

    return (
        <header className="bg-neutral-300">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                {/* <!-- player item template --> */}
                {user ? (
                    <div className="flex">
                        <img alt="avatar" className="w-12 h-12 rounded-full object-cover"
                            src={user.avatar ?? "/images/avatar/default-avatar.png"} />

                        <div className="ml-2">
                            <div className="header">
                                <b className="name">{user.name}</b>
                            </div>
                            <p className="text-xs">{user.event}</p>
                        </div>
                    </div>
                ) : (
                    <p>No user data available</p>
                )}
                {/* <!-- end player item template --> */}
                <div className="flex">
                    <a href="#" className="-m-1.5 p-1.5">
                        <img
                            alt="ComeOn Group Company Logo"
                            src="/images/logo.svg"
                            className="h-8 w-auto"
                        />
                    </a>
                </div>
                <div className="flex justify-end" onClick={handleOpenModal}>
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        Log out
                    </a>
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
            </nav>
        </header>
    )
}
