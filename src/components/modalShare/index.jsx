import Button from "../Button"
import Input from "../Input"
import MiniCard from "../miniCard"
import Modal from "../modal"

export default function ModalShare({ isOpen, closeModal, modalId }) {
    console.log( modalId)
    return (
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <div>
                <h3 className="text-lg font-bold mb-4" >Share Post</h3>
            </div>
            <div className="mb-8">
                <MiniCard className='flex w-72 !py-2 mb-3 hover:border-blue border-none'>
                    <div className="flex justify-between items-start flex-row-reverse">
                        <form >
                            <Input type="email" name="email" label="Email" inputClasses="w-[320px]" />
                            <p>General access</p>
                            <div className="flex gap-3">
                                <input type="radio" id="huey" name="access" value="Viewed only" checked />
                                <label for="huey">Huey</label>
                            </div>

                            <div className="flex gap-3 mb-5">
                                <input type="radio" id="huey" name="access" value="Viewed only and edit" />
                                <label for="dewey">Viewed only and edit</label>
                            </div>

                            <div className="flex gap-2 justify-between">
                                <Button className="w-full bg-white border text-black">Cancel</Button>
                                <Button className="w-full">Add</Button>
                            </div>
                        </form>
                    </div>
                </MiniCard>
            </div>
        </Modal>
    )
}
