'use client';
import React from 'react';
import { TASKBAR_HEIGHT, ICON_MAP, SVG_MAP, COLOR_LIST} from '@/lib/constants';
import { ICONS } from '@/lib/icons';
import { useDesktop } from '@/context/DesktopContext';
//import { Window } from '@/components/desktop/Window'; //??
import { AppType } from '@/lib/types';

// function match_icon(appType : AppType) {
//   switch (appType) {
//     case 'resume':
//       return (
//         <svg height="200px" width="200px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> {'.st0{fill:#000000;}'} </style> <g> <path className="st0" d="M276.239,252.183c-6.37,2.127-13.165,3.308-20.239,3.308c-7.074,0-13.87-1.181-20.24-3.308 c-46.272,7.599-70.489,41.608-70.489,82.877H256h90.728C346.728,293.791,322.515,259.782,276.239,252.183z"></path> <path className="st0" d="M256,240.788c27.43,0,49.658-22.24,49.658-49.666v-14.087c0-27.426-22.228-49.659-49.658-49.659 c-27.43,0-49.658,22.233-49.658,49.659v14.087C206.342,218.548,228.57,240.788,256,240.788z"></path> <path className="st0" d="M378.4,0H133.582C86.234,0,47.7,38.542,47.7,85.899v340.22C47.7,473.476,86.234,512,133.582,512h205.695 h13.175l9.318-9.301l93.229-93.229l9.301-9.31v-13.174V85.899C464.3,38.542,425.766,0,378.4,0z M432.497,386.985H384.35 c-24.882,0-45.074,20.183-45.074,45.073v48.139H133.582c-29.866,0-54.078-24.221-54.078-54.078V85.899 c0-29.874,24.212-54.096,54.078-54.096H378.4c29.876,0,54.096,24.222,54.096,54.096V386.985z"></path> </g> </g></svg>
//       )
//       break;
//     case 'about':
//       break;
//     case 'projects':
//       break;
//     case 'settings':
//       break;
//     default:
//       return (
//         <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clipPath="url(#a)"><path fillRule="evenodd" clipRule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#94e2d5"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
//       )
//       break;
//   }
// }

export default function TaskBar() {
  const { windows, focusedId, focusWindow, minimizeWindow } = useDesktop();
  
  //TODO: create a switchable variable for the settings app to change the theme? Currently just using hardcoded values
  //var currTheme = 'water'
   //backgroundColor: 'rgba(253, 253, 253, .8)', backdropFilter: 'blur(8px)'
   //backgroundColor: currTheme === 'water' ? '#071e22' : '#000000'
  return (
    <>
    <div className="fixed left-1/2 bottom-0 -translate-x-1/2 px-4 mb-2 z-50 rounded-2xl">
      <nav className="flex gap-2 text-text rounded-xl bg-[rgba(24, 24, 37, 0.4)] backdrop-blur-xl" 
      style={{ height: TASKBAR_HEIGHT }}
      >
        {windows.map((w) => {
          //const iconSrc = ICON_MAP[w.appType] ?? ICON_MAP.welcome;
          const isActive = w.id === focusedId;
          //const svg_html = match_icon(w.appType)
          
          const Icon = ICONS[w.appType];

          return (
            <button key={w.id}
              onClick={() => {
                console.log("working")
                if (w.isMinimized || w.id != focusedId) {
                  focusWindow(w.id)
                } else {
                  minimizeWindow(w.id)
                }
              }}
        className={`flex h-full w-12 items-center justify-center rounded-lg transition 
                ${isActive ? 'bg-lavender/15 hover:bg-lavender/20' : 'bg-transparent hover:bg-lavender/15'}
                ${isActive ? 'text-maroon' : 'text-sky'}`}
              //title={w.title}
              //{SVG_MAP["welcome"]}
              //<img src={iconSrc} />
              //${isActive ? 'bg-lavender/15' : 'bg-transparent hover:bg-lavender/15'} //in className tag from above
              //${isActive ? 'text-red' : 'text-teal'} hover:text-peach`}
            >
              <Icon size={40} />
              
            </button>
          );
        })}
      </nav>
      </div>
    </>
  );
}
