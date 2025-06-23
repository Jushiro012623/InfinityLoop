import { Input } from '@heroui/react'
import { FiSearch } from 'react-icons/fi'

const SearchInput = ({className}: any) => {
  return (
    <Input
        isClearable
        className={className}
        classNames={{
            input: [
                "bg-transparent",
                "text-xs",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent ",
            inputWrapper: [
                "bg-default/10",
                "border",
                "border-default/30",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/30",
                "dark:hover:bg-default/30",
                "group-data-[focus=true]:bg-default-200/50",
                "dark:group-data-[focus=true]:bg-default/60",
                "!cursor-text",
            ],
        }}
        placeholder="Type to search..."
        radius="sm"
        startContent={
            <FiSearch size={20} className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
    />
  )
}

export default SearchInput