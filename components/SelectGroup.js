export default function SelectGroup({
    items,
    selectGroupName,
    selectedItem,
    onItemChange
}) {
    return (
        <select
            name={selectGroupName}
            id={selectGroupName}
            className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
            value={selectedItem || ''}
            onChange={(e) => onItemChange(e.target.value ? parseInt(e.target.value) : null)}>
            <option value="">Please select</option>
            {items.map((item) => (
                <option key={item.id} value={item.id}>
                    {item.name}
                </option>
            ))}
        </select>
    );
}
