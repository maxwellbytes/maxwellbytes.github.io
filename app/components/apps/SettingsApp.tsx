'use client';
import { useState } from 'react';
type SettingsTab = 'about' | 'theme' | 'roadmap' | 'credits'

export default function SettingsApp() {
  const [currTab, setCurrTab] = useState<SettingsTab>('about')
  
  return (
    <>
    <div className="flex flex-row text-center">
      <button
      className={`px-6 py-2 flex-1 ${currTab === 'about' ? 'bg-base' : 'bg-mantle'} ${currTab === 'about' ? 'ring-t-4 ring-inset ring-sky' : '' }`}
      onClick={() => {setCurrTab('about')}}>
        About the Site
      </button>
      <button
      className={`px-6 py-2 flex-1 ${currTab === 'theme' ? 'bg-base' : 'bg-mantle'}`}
      onClick={() => {setCurrTab('theme')}}>
        Theme
      </button>
      <button
      className={`px-6 py-2 flex-1 ${currTab === 'roadmap' ? 'bg-base' : 'bg-mantle'}`}
      onClick={() => {setCurrTab('roadmap')}}>
        Roadmap
      </button>
      <button
      className={`px-6 py-2 flex-1 ${currTab === 'credits' ? 'bg-base' : 'bg-mantle'}`}
      onClick={() => {setCurrTab('credits')}}>
        Credits
      </button>
    </div>
    <div className="p-3 m-2">
    <section>
      {currTab === 'about' && (
        <>
          <p>About the site page</p>
        </>
      )}
    </section>
    <section>
      {currTab === 'theme' && (
        <>
          <p>Theme Page</p>
        </>
      )}
    </section>
    <section className="text-text">
      {currTab === 'roadmap' && (
        <>
          <h2 className="text-center text-lg mb-3">This site is currently under construction! I hope to implement the following components soon, but in the meantime, please contact me at \[put email here but hide it from bots\].</h2>
          <hr />
          <div className="flex flex-col gap-4 mt-3">
            <div>
              <h3 className="text-md">Features in Progress</h3>
              <ul className="list-inside list-disc">
                <li>Ability to resize windows from all corners</li>
                <li>Minimizing windows is animated to respective taskbar icon</li>
              </ul>
            </div>
            <div>
              <h3 className="text-md">Future Features</h3>
              <ul className="list-inside list-disc">
                <li>Functional terminal</li>
                <li>Drag-and-Drop desktop icons on a set grid</li>
                <li>Drawing app</li>
                <li>Multiple themes that change the colors and/or window style</li>
              </ul>
            </div>
          </div>
        </>
      )}
    </section>
    <section>
      {currTab === 'credits' && (
        <>
          <p>Credits Page</p>
        </>
      )}
    </section>
    </div>
    </>
  );
}