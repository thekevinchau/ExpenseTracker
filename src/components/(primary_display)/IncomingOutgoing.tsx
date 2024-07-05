interface I_O_props {
    incoming: number,
    outgoing: number,
}

export default function IO_Block({incoming, outgoing}: I_O_props): JSX.Element {
    return <div className="flex justify-between font-bold bg-slate-300 ml-5 mr-5 mt-3 p-5 text-sm bg-opacity-20 shadow-md">
    <div>
      <p>Incoming</p>
      <p className="text-blue-600 text-xl">US${incoming.toFixed(2)}</p>
    </div>

    <div>
      <p>Outgoing</p>
      <p className="text-red-500 text-xl">US${outgoing.toFixed(2)}</p>
    </div>
  </div>
}