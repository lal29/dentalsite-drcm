import {X} from "lucide-react"

export default function BookingModal ({isOpen, onClose}) {
    if(!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
            onClick={onClose}
        >
            <div className="bg-white rounded-3xl p-8 w-[90%] max-w-md shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} 
                className="float-right text-gray-400 hover:text-gray-600 tranisition-colors cursor-pointer">
                    <X size={24}/>
                </button>
                <h2 className="text-2xl font-medium text-[#1a1625] mb-2">
                    Choose a Location
                </h2>
                <p className="text-[#6b6478] text-sm mb-8">
                    Select your preferred clinic to book an appointment
                </p>

                <div className="flex flex-col gap-4">
                    <a href="https://macasiraycresenciasurrey.oralhealth.app/book/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onClose}
                        className="flex items-center gap-4
                        border-2 border-[#e0d5f5]
                        hover:border-[#7c4dbd] hover:bg-[#f3f0fa]
                        rounded-2xl p-5
                        transition-all duration-200
                        group"
                    >
                        <div className="w-10 h-10 bg-[#f3f0fa] group-hover:bg-[#7c4dbd] rounded-full flex items-center justify-center transition-colors duration-200">
                            <span className="text-[#7c4dbd] group-hover:text-white text-lg">📍</span>
                        </div>
                        <div>
                            <p className="font-medium text-[#1a1625]">Surrey Clinic</p>
                            <p className="text-xs text-[#6b6478]">Suite 302-15957 84th Ave, Surrey BC</p>
                        </div>
                    </a>

                    <a href="https://drcresenciamacasirayinc.oralhealth.app/book/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onClose}
                        className="flex items-center gap-4
                        border-2 border-[#e0d5f5]
                        hover:border-[#7c4dbd] hover:bg-[#f3f0fa]
                        rounded-2xl p-5
                        transition-all duration-200
                        group"
                    >
                        <div className="w-10 h-10 bg-[#f3f0fa] group-hover:bg-[#7c4dbd] rounded-full flex items-center justify-center transition-colors duration-200">
                            <span className="text-[#7c4dbd] group-hover:text-white text-lg">📍</span>
                        </div>
                        <div>
                            <p className="font-medium text-[#1a1625]">Vancouver Clinic</p>
                            <p className="text-xs text-[#6b6478]">3911 Fraser Street, Vancouver BC</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}