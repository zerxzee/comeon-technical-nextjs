import { useState } from "react";
import { signOut } from 'next-auth/react';
import Modal from "./Modal";

export default function Header() {
    const [isModalVisible, setIsModalVisible] = useState(false);

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

    return (
        <header className="bg-neutral-300">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                {/* <!-- player item template --> */}
                <div class="player item">
                    <img class="ui avatar image" src="" alt="avatar" />

                    <div class="content">
                        <div class="header">
                            <b class="name"></b>
                        </div>
                        <div class="description event"></div>
                    </div>
                </div>
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
