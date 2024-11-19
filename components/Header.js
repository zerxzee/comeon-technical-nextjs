export default function Header() {
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
                <div className="flex justify-end">
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        Log out
                    </a>
                </div>
            </nav>
        </header>
    )
}
