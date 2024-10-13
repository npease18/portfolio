"use client"
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CallToActionIcon from '@mui/icons-material/CallToAction';
import ViewListIcon from '@mui/icons-material/ViewList';
import SearchIcon from '@mui/icons-material/Search';
import SignpostIcon from '@mui/icons-material/Signpost';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';

import { useState } from 'react';

export default function Page() {
  return (
    <div className="grid grid-cols-1">
        <title>Aubuchon Register Tools | nicholaspease.com</title>
        <section className="flex justify-center items-center">
            <img src="/images/aublogo_color.svg" className="w-[40%]"/>
        </section>
        <section className="flex justify-center items-center mt-5 font-bold text-[32px]">
            Aubuchon Hardware Additional Register Tools
        </section>
        <section className="flex justify-center items-center mt-5">
            <img src="https://img.shields.io/badge/VERSION-2.1.0-GREEN?style=for-the-badge"/>
            <img src="https://img.shields.io/badge/Closed%20Source-red?style=for-the-badge" className="ml-5 mr-5"/>
            <img src="https://img.shields.io/badge/Powered%20By%20NextJS-grey?style=for-the-badge&logo=nextdotjs"/>
        </section>
        <section className="flex justify-center items-center mt-5 w-[70%] relative left-[15%]">
        The register tools are a suite of software developed for the Aubuchon Hardware company to aid in the updating of manual UPC lookup books as well as interfacing with the backends pricing API to provide real time inventory, pricing, and product information. Due to the nature of this software, it is closed sourced.
        </section>
        <section className="flex justify-left mt-10 w-[70%] text-[32px] relative left-[15%] font-bold mb-5">
            The Suite of Tools Includes:
        </section>
        <ToolExpander/>
    </div>
  );
}

function ToolExpander() {
    const [tool, setTool] = useState("register")
    return (
        <main>
            <section className='grid grid-cols-7 gap-x-5 justify-items-center text-center w-[80%] relative left-[10%]'>
                <div className="button-expand w-[150px]" onMouseOverCapture={() => setTool("register")}>
                    <MenuBookIcon className="text-[90px]" fontSize="220px"/><br/>
                    Generate Register Book
                </div>
                <div className="button-expand w-[150px]" onMouseOverCapture={() => setTool("pallet")}>
                    <CallToActionIcon className="text-[90px]" fontSize="220px"/><br/>
                    Generate Pallet Signs
                </div>
                <div className="button-expand w-[150px]" onMouseOverCapture={() => setTool("list")}>
                    <ViewListIcon className="text-[90px]" fontSize="220px"/><br/>
                    Generate List from SKU/UPC
                </div>
                <div className="button-expand w-[150px]" onMouseOverCapture={() => setTool("counter")}>
                    <FormatListNumberedIcon className="text-[90px]" fontSize="220px"/><br/>
                    SKU Counter
                </div>
                <div className="button-expand w-[150px]" onMouseOverCapture={() => setTool("sign")}>
                    <SignpostIcon className="text-[90px]" fontSize="220px"/><br/>
                    Create-A-Sign 2
                </div>
                <div className="button-expand w-[150px]" onMouseOverCapture={() => setTool("investigation")}>
                    <SearchIcon className="text-[90px]" fontSize="220px"/><br/>
                    SKU Investigation
                </div>
                <div className="button-expand w-[150px]" onMouseOverCapture={() => setTool("colorx")}>
                    <FormatColorFillIcon className="text-[90px]" fontSize="220px"/><br/>
                    ColorX Calculator
                </div>
            </section>
            {tool && <div className='mt-5 bg-slate-900 rounded-lg p-5 w-[80%] relative left-[10%] min-h-[140px]'>
                <div className='font-bold'>{tools[tool].title}</div>
                {tools[tool].description}
            </div>}
        </main>
        
    )
}

var tools = {
    register: {
        title: "Generate Register Book",
        description: "This tool takes a Microsoft Excel workbook and formats the data in a manner consistent among uses. This allows the store to generate identical books, with minimal duplication of efforts and materials, while optimizing for time. This tools also allows the store to utilize barcode's in the book, without relying on cashiers to type all of the codes by hand.",
    },
    pallet: {
        title: "Generate Pallet Signs",
        description: "This tool takes a Microsoft Excel workbook and reads through all the user selected categories. It then queries the central Aubuchon Inventory API to assemble individualized pallet signs with most up to date pricing and additional data.",
    },
    list: {
        title: "Generate List from SKU/UPC",
        description: "This tool takes a bulk list of UPC's / SKUs and queries the Aubuchon Inventory API to assemble a list of items with the most up to date pricing and additional data. This tool is used to generate lists for the store to use in their daily operations. Potential applications involve inventorying, general list-making, and other correspondences.",
    },
    counter: {
        title: "SKU Counter",
        description: "This tool takes a bulk list of UPC's / SKUs and queries the Aubuchon Inventory API to count the number of items in the list. This tool is used to generate counts for the store to use in their daily operations. Potential applications involve inventorying, cycle counting, box inventorying, and other applications where counting a large number of scannable items is not practical.",
    },
    sign: {
        title: "Create-A-Sign 2",
        description: "This is a better version of the Aubuchon Hardware 'Create-A-Sign' program. This tool includes options to bulk generate signs, modify the pricing data should it be inaccurate, among other additions.",
    },
    investigation: {
        title: "SKU Investigation",
        description: "This tool investigates potentially mistyped SKUs for user errors on the POS systems. It then sorts those similar SKUs according to their 'suspiciousness' and allows the user to investigate the potential errors. This tool is best used for negatives and other issue SKUs",
    },
    colorx: {
        title: "ColorX Calculator",
        description: "This tool is used to calculate the paint differential between two given Benjamin Moore ColorX paint color formulas. It works by converting both formulas into common units, and outputting a simple to dispense formula to turn the old color, into the desired color.",
    }
}