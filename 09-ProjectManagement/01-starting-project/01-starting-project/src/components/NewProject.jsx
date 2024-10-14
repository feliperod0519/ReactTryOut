import { useRef } from "react";
import InputRef from "./Input";
import ModalRef from "./Modal";

export default function NewProject({onAdd}) {

    const modalRef = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    function handleSave(){
        const enteredTitle = titleRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredDueDate = dueDateRef.current.value;

        if (enteredTitle.trim().length === 0 || enteredDescription.trim().length === 0 || enteredDueDate.trim().length === 0){
            modalRef.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    function handleCancel(){
        onAdd(undefined);
    }

    return  <>
                <ModalRef ref={modalRef} buttonCaption="Ok">
                    <h2 className="txt-xl font-bold text-stone-700 my-4">Invalid input</h2>
                    <p className='text-stone-600 mb-4'>D'oh</p>
                    <p className='text-stone-600 mb-4'>Provide valid value</p>
                </ModalRef>
                <div className="w-[35rem] mt-16">
                    <menu className="flex items-center justify-end gap-4 my-4">
                        <li><button className="text-stone-800 hover:text-stone-950"
                                    onClick={handleCancel}>Cancel</button></li>
                        <li>
                            <button className="px-6 py-2 rounded-md bg-stone-800
                                            text-stone-50 hover:bg-stone-950"
                                    onClick={handleSave}>Save</button>
                        </li>
                    </menu>
                    <div>
                        <InputRef type="text" ref={titleRef} label="Title" />
                        <InputRef ref={descriptionRef} label="Description" textArea />
                        <InputRef type="date" ref={dueDateRef} label="Due Date"/>
                    </div>
                </div>
           </>
}