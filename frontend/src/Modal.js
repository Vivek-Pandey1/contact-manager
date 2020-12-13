import { React, useRef } from 'react'
import axios from 'axios'

const OVERLAY_STYLE = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 200
}

export default function Modal({ open, onClose}) {
    const rName = useRef();
    const rTitle = useRef();
    const rPhone = useRef();
    const rAddress = useRef();
    const rNote = useRef();

    function onAdd(e) {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:3031/addContact',
            data: {
                'name': rName.current.value,
                'title': rTitle.current.value,
                'phone': rPhone.current.value,
                'address': rAddress.current.value,
                'note': rNote.current.value
            },
            headers: {'Content-Type': 'application/json' }
            })
            .then(function (res) {
                if(res)
                    window.location.reload();
            })
            .catch(err => console.log(err));
    }

    function logMe(e) {
        e.preventDefault();
        open = !open;
    }

    if (!open) 
        return null
    
    return (
        <>
            <div style={OVERLAY_STYLE} />
            <div className="modal">
                <button id="closeBtn" onClick={onClose}><i class="fas fa-times-circle"></i></button>
                <h3 className="aaEntry">Add Entry</h3>
                <form>
                    <input ref={rName} className="pt-input" type="text" placeholder="Enter Name"></input>
                    <input ref={rTitle} className="pt-input" type="text" placeholder="Enter Title"></input>
                    <input ref={rPhone} className="pt-input" type="text" placeholder="Enter Phone"></input>
                    <input ref={rAddress} className="pt-input" type="text" placeholder="Enter Address"></input>
                    <input ref={rNote} className="pt-input" type="text" placeholder="Enter Note"></input>
                    <button id="suBtn" onClick={onAdd}>Submit</button>
                </form>
            </div>
        </>
    )
}
