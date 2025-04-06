function OverlayModalBottomLeft() {
    return (
        <div className="absolute top-[70%] left-5 z-[999999] bg-white rounded-xs p-4 w-[350px]">
            <div className="flex flex-col gap-4 xs:max-w-7xl">
                <label htmlFor="source">Current Location</label>
                <input type="text" id="source" className="border rounded-md p-2 focus:outline-none" />

                <label htmlFor="source">Destination Location</label>
                <input type="text" id="source" className="border rounded-md p-2 focus:outline-none" />
            </div>
        </div>
    )
}

function OverlayModalTopRight() {
    return (
        <div className="top-[2%] absolute md:top-[5%] md:right-5 z-[999999] bg-white rounded-md p-4 w-[350px]">
            <div className="flex flex-col gap-4 md:max-w-7xl">
                <h3 className="font-semibold text-md">Status</h3>
                <ul className="flex flex-col gap-2">
                    <li className="bg-red-400/50 p-1">
                        Traffic 2km Ahead
                    </li>
                    <li className="bg-yellow-400/50 p-1">
                        Route Clearing ...
                    </li>
                    <li className="bg-green-400/50 p-1">
                        Route Clear
                    </li>
                </ul>
            </div>
        </div>
    )
}

export {
    OverlayModalBottomLeft,
    OverlayModalTopRight
}