export default function SelectGroup({ items, selectGroupName }) {
    return (
        <select
            name={selectGroupName}
            id={selectGroupName}
            className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
        >
            <option value="">Please select</option>
            {items.map((item) => (
                <option value={item.id}>{item.name}</option>
            ))}
        </select>
    );
}
