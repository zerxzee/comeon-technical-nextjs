import SelectGroup from "./SelectGroup";

export default function TabGroup({
    items,
    tabGroupName,
    selectedTab,
    onTabChange
}) {
    return (
        <div>
            {/* Dropdown for smaller screens */}
            <div className="sm:hidden mb-8">
                <SelectGroup
                    items={items}
                    selectGroupName={tabGroupName}
                    selectedItem={selectedTab}
                    onItemChange={onTabChange} />
            </div>

            {/* Tabs for larger screens */}
            <div className="hidden sm:block">
                <div className="border-b border-gray-200 mb-12">
                    <nav className="flex gap-4 justify-evenly" aria-label="Tabs">
                        {items.map((item) => (
                            <a
                                key={item.id}
                                href="#"
                                onClick={() => onTabChange(item.id)}
                                className={`
                                    shrink-0 
                                    px-1 pb-4 
                                    text-lg font-extrabold 
                                    tracking-widest 
                                    ${selectedTab === item.id
                                        ? 'border-b-2 border-[#ccf7cc] text-black'
                                        : 'border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}
                                `}>
                                {item.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}
