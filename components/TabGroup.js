import SelectGroup from "./SelectGroup";

export default function TabGroup({ items, tabGroupName }) {
    return (
        <div>
            {/* Dropdown for smaller screens */}
            <div className="sm:hidden mb-8">
                <SelectGroup items={items} selectGroupName={tabGroupName} />
            </div>

            {/* Tabs for larger screens */}
            <div className="hidden sm:block">
                <div className="border-b border-gray-200 mb-12">
                    <nav className="flex gap-4 justify-evenly" aria-label="Tabs">
                        {items.map((item, index) => (
                            <a
                                key={index}
                                href="#"
                                className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-lg font-extrabold text-gray-500 hover:border-gray-300 hover:text-gray-700 tracking-widest"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}
