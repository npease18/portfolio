export function FileList({file: filelist}) {
    function FileRow({file}) {
        return (
            <tr>
                <td className="italic hover:underline p-1"><a href={"/project_files/chatmaps/"+file.filename} target="_blank">{file.name}</a></td>
                <td className="p-1">{file.type}</td>
            </tr>
        )
    }

    var files = []
    for(var file in filelist) {
        files.push(<FileRow file={filelist[file]} key={file}/>)
    }

    return (
        <div className="mt-5 bg-slate-900 mr-2 rounded-md p-3">
            <h2 className="font-bold text-[24px]">ChatMaps Files</h2>
            <table className="w-[100%] mt-2 mr-2 ml-2">
                <thead>
                    <tr>
                        <th className="text-left">Name</th>
                        <th className="text-left">Type</th>
                    </tr>
                </thead>
                <tbody>
                    {files}
                </tbody>
            </table>
        </div>
    )
}